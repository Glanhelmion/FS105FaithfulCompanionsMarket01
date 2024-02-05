const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth'); // Import the auth routes

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
//mongodb+srv://KKK:DEaRVEBYkg6MXaSr@kkk.ki4f1ah.mongodb.net/
mongoose.connect('mongodb+srv://KKK:DEaRVEBYkg6MXaSr@kkk.ki4f1ah.mongodb.net/Users', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB');
});

// Use the authentication routes
app.use('/api/auth', authRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
