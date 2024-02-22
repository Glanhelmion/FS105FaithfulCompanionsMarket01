import cat11 from "./images/cats/cat11.jpg";
import cat3 from "./images/cats/cat3.jpeg";
import munchkin1 from "./images/cats/munchkin1.jpg";
import siamese1 from "./images/cats/siamese1.jpg";
import ragdoll1 from "./images/cats/ragdoll1.jpg";
import gingercat1 from "./images/cats/gingercat1.jpg";

const cats = [
  {
    _id: 1,
    name: "Munchkin",
    image: munchkin1,
    description:
      "Curious, intelligent, friendly, playful, and enjoy lap time while also loving to hunt toys.",
    species: "Domestic Cat",
    category: "Pets",
    price: 50.99,
    availability: 10,
    rating: 4.5,
    numReviews: 15,
  },
  {
    _id: 2,
    name: "Persian",
    image: cat11,
    description:
      "Medium-sized, 7-12 pounds, 10-15 inches tall, with round heads, small ears, big eyes, and flat, chubby-cheeked faces.",
    species: "Domestic Cat",
    category: "Pets",
    price: 45.99,
    availability: 5,
    rating: 4.0,
    numReviews: 10,
  },
  {
    _id: 3,
    name: "Siamese",
    image: siamese1,
    description:
      "Tall, slender legs, large pricked ears, almond-shaped eyes, and a long, straight tail, all contributing to their graceful appearance.",
    species: "Lion",
    category: "Wild Animals",
    price: 199.99,
    availability: 2,
    rating: 4.8,
    numReviews: 20,
  },
  {
    _id: 4,
    name: "Ragdoll",
    image: ragdoll1,
    description:
      "Large, colorpoint coat, blue eyes, silky semi-long fur. Known for docile, affectionate temperament.",
    species: "Lion",
    category: "Wild Animals",
    price: 199.99,
    availability: 2,
    rating: 4.8,
    numReviews: 20,
  },
  {
    _id: 5,
    name: "Ginger Cat",
    image: gingercat1,
    description:
      "Ginger cats, also known as tiger or marmalade cats, have orange coloring and stripes, but they're not a distinct breed, just a color variation.",
    species: "Lion",
    category: "Wild Animals",
    price: 199.99,
    availability: 2,
    rating: 4.8,
    numReviews: 20,
  },
  {
    _id: 6,
    name: "Maine Coon",
    image: cat3,
    description:
      "Massive yet gentle cats,  known for their majestic look, size, shaggy coat, and bobcat-like ears.",
    species: "Lion",
    category: "Wild Animals",
    price: 199.99,
    availability: 2,
    rating: 4.8,
    numReviews: 20,
  },
];

export default cats;
