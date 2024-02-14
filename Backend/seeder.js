import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors';
import UsersData from './data/users.js';
import AccessoriesData from './data/accessoriespage.js';
import BirdsData from './data/birdpage.js';
import CatsData from './data/catpage.js';
import DogsData from './data/dogpage.js';
import FishData from './data/fishpage.js';
import PetfoodsData from './data/petfoodpage.js';
import User from './models/user.js';
import Accessories from './models/accessories.js';
import Bird from './models/bird.js';
import Cat from './models/cat.js';
import Dog from './models/dog.js';
import Fish from './models/fish.js';
import Petfood from './models/petfood.js';
import Order from './models/order.js';
import connectDB from './config/mongodb.js';

dotenv.config();

connectDB();

const importData = async () => {
  let adminUser; // Define adminUser outside the try block

  try {
    // Clear existing data
    await Order.deleteMany();
    await Accessories.deleteMany();
    await Bird.deleteMany();
    await Cat.deleteMany();
    await Dog.deleteMany();
    await Fish.deleteMany();
    await User.deleteMany();

    // Insert users
    const createdUsers = await User.insertMany(UsersData);
    adminUser = createdUsers[0]._id; // Assign adminUser here

    // Add user to sample accessories data
    const accessoriesData = AccessoriesData.map((accessory) => ({
      ...accessory,
      user: adminUser,
    }));

    // Insert accessories data
    await Accessories.insertMany(accessoriesData);

    // Add user to sample birds data
    const birdsData = BirdsData.map((bird) => ({
      ...bird,
      user: adminUser,
    }));

    // Insert birds data
    await Bird.insertMany(birdsData);

    // Add user to sample cats data
    const catsData = CatsData.map((cat) => ({
      ...cat,
      user: adminUser,
    }));

    // Insert cats data
    await Cat.insertMany(catsData);

    // Add user to sample dogs data
    const dogsData = DogsData.map((dog) => ({
      ...dog,
      user: adminUser,
    }));

    // Insert dogs data
    await Dog.insertMany(dogsData);

    // Add user to sample fish data
    const fishData = FishData.map((fish) => ({
      ...fish,
      user: adminUser,
    }));

    // Insert fish data
    await Fish.insertMany(fishData);

    // Add user to sample petfoods data
    const petfoodsData = PetfoodsData.map((petfood) => ({
      ...petfood,
      user: adminUser,
    }));

    // Insert petfoods data
    await Petfood.insertMany(petfoodsData);

    console.log('Data Imported!'.green.inverse);

    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Order.deleteMany();
    await Accessories.deleteMany();
    await Bird.deleteMany();
    await Cat.deleteMany();
    await Dog.deleteMany();
    await Fish.deleteMany();
    await Petfood.deleteMany();
    await User.deleteMany();

    console.log('Data destroyed successfully.'.red.inverse);
    process.exit();
  } catch (error) {
    console.error(`Error destroying data: ${error.message}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}
