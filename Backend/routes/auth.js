const express = require('express');
const User = require('../models/User'); // Import the User model
const Item = require('../models/Item'); // Import the Item model
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const multer = require('multer'); // Import multer for image upload
const router = express.Router();
const app = express();
const port = 3002 || 3001;


var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})
var upload = multer({ storage: storage })


router.use(express.static(__dirname + '/public'));
router.use('/uploads', express.static('uploads'));

// Register User
router.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if user already exists
    let user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Create a new user
    user = new User({ username, password });
    await user.save();

    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Login User
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ message: 'Invalid Credentials' });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid Credentials' });
    }

    // Include the username in the JWT token
    const token = jwt.sign(
      { id: user._id, username: user.username }, // Add username here
      'your_jwt_secret', 
      { expiresIn: '1h' }
    );

    res.json({ token, message: 'Login successful' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


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

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


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


module.exports = router;
