import topProduct1 from './images/menu_3.png';
import topProduct2 from './images/menu_5.png';
import topProduct3 from './images/menu_7.png';
import topProduct4 from './images/food_4.png';
import topProduct5 from './images/food_3.jpg';
import topProduct6 from './images/food_7.png';
import topProduct7 from './images/food_10.jpg';
import image1 from "../assets/images/dish_1.png";
import image2 from "../assets/images/dish_2.png";
import image3 from "../assets/images/dish_3.png";
import image4 from "../assets/images/pizza_2.jpg";
import image5 from "../assets/images/food_4.png";
import image6 from "../assets/images/pizza_1.png";
function importAll(r) {
  let images = {};
  r.keys().map(item => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('../assets/images/', false, /\.png$/));
const foodImages = Object.keys(images)
  .filter(key => key.startsWith('food'))
  .map(key => images[key]);
// console.log(foodImages);

export const imgArray = [image1, image2, image3, image4, image5, image6];


export const foodImagesArray = [
  {
    name: "Waffles",
    description: "food is any substance consumed to provide nutritional support for an organism.",
    src: foodImages[0],
    rating: 4.5,
  },
  {
    name: "Pasta",
    description: "food is any substance consumed to provide nutritional support for an organism.",
    src: foodImages[1],
    rating: 4,
  },
  {
    name: "Burger",
    description: "A hamburger is a sandwich consisting of one or more cooked patties of ground meat.",
    src: foodImages[2],
    rating: 3.5,
  },
  {
    name: "Pizza",
    description: "Pizza is a savory dish of Italian origin, consisting of a usually round, flattened base of leavened wheat-based dough.",
    src: foodImages[3],
    rating: 5,
  },
  {
    name: "Cake",
    description: "Cake is a form of sweet food made from flour, sugar, and other ingredients, that is usually baked.",
    src: foodImages[4],
    rating: 4,
  },
  {
    name: "Roll",
    description: "A roll is a small, usually round or oblong individual loaf of bread served as a meal accompaniment.",
    src: foodImages[5],
    rating: 3.5,
  },
  {
    name: "Sicilian Pizza",
    description: "Sicilian pizza is pizza prepared in a manner that originated in Sicily, Italy.",
    src: foodImages[6],
    rating: 4.5,
  },
  {
    name: "food",
    description: "food is any substance consumed to provide nutritional support for an organism.",
    src: foodImages[7],
    rating: 3,
  },
  {
    name: "food",
    description: "food is any substance consumed to provide nutritional support for an organism.",
    src: foodImages[8],
    rating: 3.5,
  },
  {
    name: "food",
    description: "food is any substance consumed to provide nutritional support for an organism.",
    src: foodImages[9],
    rating: 4,
  },
  {
    name: "food",
    description: "food is any substance consumed to provide nutritional support for an organism.",
    src: foodImages[10],
    rating: 4.5,
  },
  {
    name: "food",
    description: "food is any substance consumed to provide nutritional support for an organism.",
    src: foodImages[11],
    rating: 5,
  },
  {
    name: "food",
    description: "food is any substance consumed to provide nutritional support for an organism.",
    src: foodImages[12],
    rating: 3,
  },
  {
    name: "food",
    description: "food is any substance consumed to provide nutritional support for an organism.",
    src: foodImages[13],
    rating: 3.5,
  },
  {
    name: "food",
    description: "food is any substance consumed to provide nutritional support for an organism.",
    src: foodImages[14],
    rating: 4,
  },
  {
    name: "food",
    description: "food is any substance consumed to provide nutritional support for an organism.",
    src: foodImages[15],
    rating: 4.5,
  },
  {
    name: "food",
    description: "food is any substance consumed to provide nutritional support for an organism.",
    src: foodImages[16],
    rating: 5,
  },
  {
    name: "food",
    description: "food is any substance consumed to provide nutritional support for an organism.",
    src: foodImages[17],
    rating: 3,
  },
  {
    name: "food",
    description: "food is any substance consumed to provide nutritional support for an organism.",
    src: foodImages[18],
    rating: 3.5,
  },
  {
    name: "food",
    description: "food is any substance consumed to provide nutritional support for an organism.",
    src: foodImages[19],
    rating: 4,
  },
  {
    name: "food",
    description: "food is any substance consumed to provide nutritional support for an organism.",
    src: foodImages[20],
    rating: 4.5,
  },
  {
    name: "food",
    description: "food is any substance consumed to provide nutritional support for an organism.",
    src: foodImages[21],
    rating: 5,
  },
  {
    name: "food",
    description: "food is any substance consumed to provide nutritional support for an organism.",
    src: foodImages[22],
    rating: 3,
  },
  {
    name: "food",
    description: "food is any substance consumed to provide nutritional support for an organism.",
    src: foodImages[23],
    rating: 3.5,
  },
  {
    name: "food",
    description: "food is any substance consumed to provide nutritional support for an organism.",
    src: foodImages[24],
    rating: 4,
  },
  {
    name: "food",
    description: "food is any substance consumed to provide nutritional support for an organism.",
    src: foodImages[25],
    rating: 4.5,
  },
  {
    name: "food",
    description: "food is any substance consumed to provide nutritional support for an organism.",
    src: foodImages[26],
    rating: 5,
  },
  {
    name: "food",
    description: "food is any substance consumed to provide nutritional support for an organism.",
    src: foodImages[27],
    rating: 3,
  },
  {
    name: "food",
    description: "food is any substance consumed to provide nutritional support for an organism.",
    src: foodImages[28],
    rating: 3.5,
  },
  {
    name: "food",
    description: "food is any substance consumed to provide nutritional support for an organism.",
    src: foodImages[29],
    rating: 4,
  },
  {
    name: "food",
    description: "food is any substance consumed to provide nutritional support for an organism.",
    src: foodImages[30],
    rating: 4.5,
  },
  {
    name: "food",
    description: "food is any substance consumed to provide nutritional support for an organism.",
    src: foodImages[31],
    rating: 5,
  },
];



export const topProducts = [
    {
      url: topProduct1,
      name: "Waffles",
    },
    {
      url: topProduct2,
      name: "Cake",
    },
    {
      url: topProduct3,
      name: "Pasta",
    },
    {
      url: topProduct4,
      name: "food",
    },
    {
      url: topProduct5,
      name: "Burger",
    },
    {
      url: topProduct6,
      name: "Roll",
    },
    {
      url: topProduct7,
      name: "Sicilian Pizza",
    },
  ];

export const testimonials = [
  {
    name: "John Doe",
    title: "CEO",
    image: "https://randomuser.me/api/portraits",
    quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
  },
]