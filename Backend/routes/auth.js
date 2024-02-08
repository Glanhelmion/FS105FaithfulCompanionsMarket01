import express from "express";
import User from "../models/User.js"; // Import the User model
import Item from "../models/Item.js"; // Import the Item model
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import multer from "multer"; // Import multer for image upload
import path from "path";

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
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})
var upload = multer({ storage: storage })

// Get the directory name of the current module
const __dirname = path.dirname(new URL(import.meta.url).pathname);

router.use(express.static(path.join(__dirname, '/public')));
router.use('/uploads', express.static('uploads'));

// Register User
router.post('/register', async (req, res) => {
  console.log("Received data:", req.body);
  const { name, email, password } = req.body;

  try {    

    // Check if user already exists
    let user = await User.findOne({ 
      email 
    });
   
    if (user) {
      return res.status(400).json({ 
        message: 'Account user already exists' 
      });
    }

    // Create a new user
    user = new User({ 
      name,
      email, 
      password,
    });
    await user.save();

    res.status(201).json({ message: 'Account user created successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Login User
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ 
      email
     });

    if (!user) {
      return res.status(400).json({ message: 'Invalid Credentials' });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid Credentials' });
    }

    // Include the username in the JWT token
    const token = jwt.sign(
      { 
        id: user._id, 
        username: user.username,
        role: user.role,
      }, // Add username here
      process.env.JWT_SECRET, 
      { expiresIn: '1d' }
    );

    res.json({ 
      token, 
      role: user.role,
      message: 'Login successful' });
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

// Below is a post method for the uploading of the image to be registered unto the user's profile page
router.post("/upload",authenticateToken,upload.single("profileImage"),async (req, res) => {
    try {
      // req.file is the uploaded file
      // Get only the relative path
      const relativeImagePath = path.join(
        "upload",
        path.basename(req.file.path)
      );

      // Update the user's profile to include the relative image file path
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
router.post('/admin/add-item', upload.single('image'), async (req, res) => {
  try {
    const { name, description, category, species, availability, price, rating, numReviews } = req.body;
    
    const imageUrl = req.file ? `/uploads/${req.file.filename}` : null; 
    // Check for required fields
    if (!name || !description || !category || !species || !availability || !price || !rating || !numReviews) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Check if the submitted category is valid
    if (!['pets', 'toys'].includes(category)) {
      return res.status(400).json({ error: 'Invalid category' });
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
    res.status(201).json({ message: 'Item added successfully' });
  } catch (error) {
    console.error("Item addition error: ", error);
    res.status(500).json({ message: "Error occurred during item addition", error: error.message });
  }
});

// Define the route to handle file uploads using the router
router.post('/profile-upload-single', upload.single('image'), function (req, res, next) {
  // Handle the uploaded file here
  console.log(JSON.stringify(req.file));
  var response = '<a href="/">Home</a><br>';
  response += "File uploaded successfully.<br>";
  response += `<img src="${req.file.path}" /><br>`;
  return res.send(response);
});

// Register the router with your app
app.use('/', router);


router.get('/admin/get-items', async (req, res) => {
  try {
    // Fetch all items from the database
    const items = await Item.find({});
    res.json(items);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch items' });
  }
});
router.delete('/admin/delete-item/:itemId', async (req, res) => {
  try {
    const itemId = req.params.itemId;
    const deletedItem = await Item.findByIdAndDelete(itemId);

    if (!deletedItem) {
      return res.status(404).json({ error: 'Item not found' });
    }

    res.json({ message: 'Item deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to delete item' });
  }
});

router.put('/admin/edit-item/:id', async (req, res) => {
  try {
    const { name, description, stock, price } = req.body;
    const itemId = req.params.id;

    if (!name || !description || !stock || !price) {
      return res.status(400).json({ error: 'All fields are required' });
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
      return res.status(404).json({ error: 'Item not found' });
    }

    res.status(200).json(updatedItem);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to edit item' });
  }
});


export default router;
