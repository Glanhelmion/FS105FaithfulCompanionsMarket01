import parrot1 from "./images/birds/parrot1.jpg";
import parrot2 from "./images/birds/parrot2.jpeg";
import parrot3 from "./images/birds/parrot3.jpeg";
import bird1 from "./images/birds/bird1.jpeg";
import cockatiel1 from "./images/birds/cockatiel1.jpg";
import bulbul1 from "./images/birds/bulbul1.jpg";
import sunconure1 from "./images/birds/sunconure1.jpg";
import africangrey1 from "./images/birds/africangrey1.png";

const birds = [
  {
    _id: 1,
    name: "Macaw",
    image: parrot1,
    description: "Big parrots with powerful beaks, playful toes, and captivating voices! ",
    species: "Big parrots",
    category: "Pets",
    price: 99.99,
    availability: 8,
    rating: 4.2,
    numReviews: 12,
  },
  {
    _id: 2,
    name: "Lovebird",
    image: bird1,
    description: "Family friend small parrots. Every kid will love them!",
    species: "Small parrots",
    category: "Wild Birds",
    price: 149.99,
    availability: 3,
    rating: 4.5,
    numReviews: 9,
  },
  {
    _id: 3,
    name: "Cockatiel",
    image: cockatiel1,
    description: "Social birds that bond closely with their owners and are known as the 'whistling bird' for their sweet melodies.",
    species: "Small parrots",
    category: "Birds of Prey",
    price: 79.99,
    availability: 6,
    rating: 4.0,
    numReviews: 15,
  },
    {
    _id: 4,
    name: "Bulbul",
    image: bulbul1,
    description: "Medium-sized with a distinctive appearance, agile and melodious, can mimic sounds with training.",
    species: "Owl",
    category: "Birds of Prey",
    price: 79.99,
    availability: 6,
    rating: 4.0,
    numReviews: 15,
  },
    {
    _id: 5,
    name: "Sun Conure",
    image: sunconure1,
    description: "Lively, expressive, beautiful personality and beautifully colorful birds, about 12 inches long.",
    species: "Owl",
    category: "Birds of Prey",
    price: 79.99,
    availability: 6,
    rating: 4.0,
    numReviews: 15,
  },
    {
    _id: 6,
    name: "African Grey",
    image: africangrey1,
    description: "Handsome, social, and affectionate birds, ideal companions for those with time to interact with them. They enjoy head petting & scratches when handled regularly.",
    species: "Owl",
    category: "Birds of Prey",
    price: 79.99,
    availability: 6,
    rating: 4.0,
    numReviews: 15,
  },
  // Add more bird objects as needed
];

export default birds;
