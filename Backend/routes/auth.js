import express from "express";
import User from "../models/User.js"; // Import the User model
import Item from "../models/Item.js"; // Import the Item model
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import multer from "multer"; // Import multer for image upload
import path from "path";
import crypto from "crypto";
import nodemailer from "nodemailer"; // server-side email solution

const router = express.Router();
const app = express();

// Below is for profile page. Will call this data at my router.get below
const authenticateToken = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

// Set up multer for local file storage
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads")
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})
var upload = multer({ storage: storage })

// Get the directory name of the current module
const __dirname = path.dirname(new URL(import.meta.url).pathname);

router.use(express.static(path.join(__dirname, "/public")));
router.use("/uploads", express.static("uploads"));

// Register User
router.post("/register", async (req, res) => {
  console.log("Received data:", req.body);
  const { name, email, password } = req.body;

  try {    

    // Check if user already exists
    let user = await User.findOne({ 
      email 
    });
   
    if (user) {
      return res.status(400).json({ 
        message: "Account user already exists" 
      });
    }

    // Create a new user
    user = new User({ 
      name,
      email, 
      password,
      isActivated: false
    });

    // Generate a token for email activation
    const token = jwt.sign(
      { userId: user._id, email: user.email }, // Include email in the token payload
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    // Set token and token expiry time for the user
    user.token = token;
    user.tokenExpires = new Date(Date.now() + 3600000); // Token expires in 1 hour


    // Save the user to the database
    await user.save();

    const activationLink = `http://localhost:5000/api/auth/activate?token=${token}`;
    const imageURL = "https://i.ibb.co/0Kd17XY/fcmlogo.jpg";
    console.log("auth link 1 \n" + activationLink);
    // Send activation email
    try {
      await sendActivationEmail(user.email, activationLink, imageURL);
      res.status(201).json({ message: "Account user created successfully. Activation email sent." });
    } catch (emailError) {
      console.error('Error sending email:', emailError);
      res.status(500).json({ message: 'User registered, but failed to send activation email.' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

    async function sendActivationEmail(email, activationLink, imageURL) {
      const transporter = nodemailer.createTransport({
        service: "gmail", 
        auth: {
          user: process.env.EMAIL_ADDRESS,
          pass: process.env.EMAIL_PASSWORD // see .env file
          }
      });
      const mailOptions = {
        from: process.env.EMAIL_ADDRESS,
        to: email,
        subject: 'Account Activation',
        html: `<div style="font-family: Arial, sans-serif; color: #333;">
        <h1 style="color: #555;">Account Activation</h1>
        <p style="color: #666;">Please click on the following link to activate your account :</p>
        <a href="${activationLink}" style="background-color: #0046ff; color: #ffffff; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block;">Activate account</a>
        <p style="margin-top: 20px;">Or copy and paste this URL into your browser:</p>
        <p><a href="${activationLink}" style="color: #0046ff;">${activationLink}</a></p>
        <p style="color: #666;">Let's paw now with your wings and fins and bring heaven to your loved pets</p>
        <p><em>Paw Regards</em></p>
        <p><em>The Faithful Companion Market Team</em></p>
        <img src="${imageURL}" alt="Your Brand Image" style="width: 100px; height: 100px;">
      </div>`
      };

      return transporter.sendMail(mailOptions);

      
  };


  //For the activation link
  router.get('/activate', async (req, res) => {
    const { token } = req.query;
  
    try { 
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const user = await User.findById(decoded.userId);
  
      if (!user) {
        return res.status(404).send('User not found.');
      }

      if (user.isActivated) {
        return res.status(400).send('Account already activated.');
      }
  
      user.isActivated = true; // Change the isActivated field from false to true to indicated acccount activated
      user.token = null; // Clear the token after activation
      user.tokenExpires = null; // Clear the token expiry time after activation
      await user.save();
  
      res.send('Account activated successfully! Redirecting. . .');
    } catch (error) {
      res.status(500).send('Error activating account.');
    }
  });
  


// Login User
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email } );

    if (!user) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }

    // Check if the account has been activated
    if (!user.isActivated) {
      return res.status(401).json({ message: "Account not activated. Please check your email to activate your account." });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }

    
    const token = jwt.sign(
      { 
        id: user._id, 
        name: user.name,
        email: user.email,
        role: user.role,
      }, 
      process.env.JWT_SECRET, 
      { expiresIn: "1d" }
    );

    res.json({ 
      token, 
      role: user.role,
      message: "Login successful" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Below to read the user data from database in MongoDB, so that render correct profile page

router.get("/ProfilePage", authenticateToken, async (req, res) => {
  try {
    const user = await User.findById(req.user.userId).select(
      "-password"
    );
    res.json(user);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching user data",
    });
  }
});

// Send password reset email
router.post("/reset-password", async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });

    // Generate a token
    const resetToken = crypto.randomBytes(32).toString("hex");
    const resetTokenExpire = Date.now() + 3600000; // 1 hour from now

     if (user) {
      // Save the token and its expiry to the user"s record
      user.resetToken = resetToken;
      user.resetTokenExpire = resetTokenExpire;
      await user.save();

    // TODO: Send an email to the user with the reset link
    // The link should be something like "https://yourfrontenddomain.com/reset-password?token=" + resetToken
    // You can use nodemailer or any other email library to send the email

    const transporter = nodemailer.createTransport({
      service: "gmail", 
      auth: {
        user: process.env.EMAIL_ADDRESS,
        pass: process.env.EMAIL_PASSWORD // see .env file
      }
    });
  
    const resetLink = `http://localhost:3000/setnewpassword?token=${resetToken}`;
    
    const imageURL = "https://i.ibb.co/0Kd17XY/fcmlogo.jpg";

    const mailOptions = {
      from: process.env.EMAIL_ADDRESS,
      to: user.email,
      subject: "Password Reset Link",
      html: `<div style="font-family: Arial, sans-serif; color: #333;">
              <h1 style="color: #555;">Reset Your Password</h1>
              <p style="color: #666;">Please click on the following link to reset your password:</p>
              <a href="${resetLink}" style="background-color: #0046ff; color: #ffffff; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block;">Reset Password</a>
              <p style="margin-top: 20px;">Or copy and paste this URL into your browser:</p>
              <p><a href="${resetLink}" style="color: #0046ff;">${resetLink}</a></p>
              <p><em>Paw Regards</em></p>
              <p><em>The Faithful Companion Market Team</em></p>
              <img src="${imageURL}" alt="Your Brand Image" style="width: 100px; height: 100px;">
            </div>`
    };
  
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
        res.status(500).send("Error in sending email");
      } else {
        console.log("Email sent: " + info.response);
        res.status(200).send("Password reset email sent.");
      }
    });
  }

  // Respond with a generic message
  res.status(200).send("If a user with that email exists, we have sent them a password reset email.");
    } catch (error) {
      console.error(error);
      res.status(500).send('Error processing request');
    }
    });

// For users to set up the new password
router.post("/setnewpassword", async (req, res) => {
  try {
    const { token } = req.query;
    console.log("Received token:", token);
    const { password } = req.body;
    const user = await User.findOne({
      resetToken: token,
      resetTokenExpire: { $gt: Date.now() }
    });

    console.log("User found:", user);

    if (!user) {
      return res.status(400).send("Invalid or expired token");
    }


    // Update the user"s password and clear the reset token fields
    user.password = password;
    user.resetToken = undefined;
    user.resetTokenExpire = undefined;
    await user.save();

    res.send("Password has been reset successfully");
  } catch (error) {
    console.error("Error resetting password:", error);
    res.status(500).send("Error resetting password");
  }
});

// Below is for users to edit their password
router.post("/change-password", authenticateToken, async (req, res) => {
  const { newPassword } = req.body;

  if (!newPassword) {
    return res.status(400).send("New password is required");
  }

  try {
    const salt = await bcrypt.genSalt(12);
    const hashedPassword = await bcrypt.hash(newPassword, salt);

    await User.findByIdAndUpdate(req.user.userId, {
      password: hashedPassword,
    });
    res.send("Password updated successfully");
  } catch (error) {
    res.status(500).send("Error updating password");
  }
});

// Below is for users to delete their account

router.delete("/delete-account", authenticateToken, async (req, res) => {
  try {
    await User.findByIdAndDelete(req.user.userId);
    res.send("Account deleted successfully");
  } catch (error) {
    console.error("Error deleting account", error);
    res.status(500).send("Error deleting account");
  }
});

// Below is a post method for the uploading of the image to be registered unto the user"s profile page
router.post("/upload",authenticateToken,upload.single("profileImage"),async (req, res) => {
    try {
      // req.file is the uploaded file
      // Get only the relative path
      const relativeImagePath = path.join(
        "upload",
        path.basename(req.file.path)
      );

      // Update the user"s profile to include the relative image file path
      const user = await User.findByIdAndUpdate(
        req.user.userId,
        {
          profileImagePath: relativeImagePath,
        },
        {
          new: true,
        }
      );
      res.json(user);
    } catch (error) {
      res.status(500).json({
        message: "Error uploading image",
      });
    }
  }
);


// Add an item without image upload
router.post("/admin/add-item", upload.single("image"), async (req, res) => {
  try {
    const { name, description, category, species, availability, price, rating, numReviews } = req.body;
    
    const imageUrl = req.file ? `/uploads/${req.file.filename}` : null; 
    // Check for required fields
    if (!name || !description || !category || !species || !availability || !price || !rating || !numReviews) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Check if the submitted category is valid
    if (!["pets", "toys"].includes(category)) {
      return res.status(400).json({ error: "Invalid category" });
    }

    const newItem = new Item({
      name,
      description,
      category,
      species,
      availability,
      price,
      rating,
      numReviews,
      imageUrl,
    });

    await newItem.save();
    res.status(201).json({ message: "Item added successfully" });
  } catch (error) {
    console.error("Item addition error: ", error);
    res.status(500).json({ message: "Error occurred during item addition", error: error.message });
  }
});

// Define the route to handle file uploads using the router
router.post("/profile-upload-single", upload.single("image"), function (req, res, next) {
  // Handle the uploaded file here
  console.log(JSON.stringify(req.file));
  var response = "<a href="/">Home</a><br>";
  response += "File uploaded successfully.<br>";
  response += `<img src="${req.file.path}" /><br>`;
  return res.send(response);
});

// Register the router with your app
app.use("/", router);


router.get("/admin/get-items", async (req, res) => {
  try {
    // Fetch all items from the database
    const items = await Item.find({});
    res.json(items);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch items" });
  }
});
router.delete("/admin/delete-item/:itemId", async (req, res) => {
  try {
    const itemId = req.params.itemId;
    const deletedItem = await Item.findByIdAndDelete(itemId);

    if (!deletedItem) {
      return res.status(404).json({ error: "Item not found" });
    }

    res.json({ message: "Item deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to delete item" });
  }
});

router.put("/admin/edit-item/:id", async (req, res) => {
  try {
    const { name, description, stock, price } = req.body;
    const itemId = req.params.id;

    if (!name || !description || !stock || !price) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const updatedItem = await Item.findByIdAndUpdate(
      itemId,
      {
        name,
        description,
        stock,
        price,
      },
      { new: true } // Return the updated item
    );

    if (!updatedItem) {
      return res.status(404).json({ error: "Item not found" });
    }

    res.status(200).json(updatedItem);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to edit item" });
  }
});


export default router;
