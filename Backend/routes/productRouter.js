// Import required modules
import express from 'express';
// import asyncHandler from '../middleware/asyncHandler.js';
import { 
    getAccessories, 
    getAccessoryById,
    getBirds,
    getBirdById,
    getCats,
    getCatById,
    getDogs,
    getDogById,
    getFishes,
    getFishById,
    getPetfoods,
    getPetfoodById,
} from '../controllers/productctrl.js';

// Create a router for each resource
const accessoryRouter = express.Router();
const birdRouter = express.Router();
const catRouter = express.Router();
const dogRouter = express.Router();
const fishRouter = express.Router();
const petfoodRouter = express.Router();

// Accessory routes
accessoryRouter.route('/') // Using .route() for the root path
    .get(getAccessories); // Define the route handler for GET request

accessoryRouter.route('/:id') // Using .route() for the path with ID parameter
    .get(getAccessoryById); // Define the route handler for GET request with ID

// Bird routes
birdRouter.route('/')
    .get(getBirds);

birdRouter.route('/:id')
    .get(getBirdById);

// Cat routes
catRouter.route('/')
    .get(getCats);

catRouter.route('/:id')
    .get(getCatById);

// Dog routes
dogRouter.route('/')
    .get(getDogs);

dogRouter.route('/:id')
    .get(getDogById);

// Fish routes
fishRouter.route('/')
    .get(getFishes);

fishRouter.route('/:id')
    .get(getFishById);

// Petfood routes
petfoodRouter.route('/')
    .get(getPetfoods);

petfoodRouter.route('/:id')
    .get(getPetfoodById);

// Export all routers
export { accessoryRouter, birdRouter, catRouter, dogRouter, fishRouter, petfoodRouter };

