import topProduct1 from "./images/menu_1.jpg";
import topProduct2 from "./images/menu_2.jpg";
import topProduct3 from "./images/menu_3.webp";
import topProduct4 from "./images/menu_4.jpg";
import topProduct5 from "./images/menu_5.jpg";
import topProduct6 from "./images/menu_6.jpg";
import topProduct7 from "./images/menu_7.png";

import image1 from "../assets/images/dish_1.png";
import image2 from "../assets/images/dish_2.png";
import image3 from "../assets/images/dish_3.png";
import image4 from "../assets/images/pizza_2.jpg";
import image5 from "../assets/images/menu/food_4.png";
import image6 from "../assets/images/pizza_1.png";
import { type } from "@testing-library/user-event/dist/type";
function importAll(r) {
  let images = {};
  r.keys().map((item) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = importAll(
  require.context("../assets/images/menu", false, /\.png$/)
);

const foodImages = Object.keys(images)
  .filter((key) => key.startsWith("food"))
  .sort((a, b) => {
    const numA = parseInt(a.match(/\d+/), 10);
    const numB = parseInt(b.match(/\d+/), 10);
    return numA - numB;
  })
  .map((key) => images[key]);
// console.log(foodImages);

export const imgArray = [image1, image2, image3, image4, image5, image6];

export const foodImagesArray = [
  {
    name: "Choco Lava Cake",
    description:
      "Choco Lava Cake is a delicious dessert made with a gooey chocolate center that oozes out.",
    src: foodImages[16],
    price: "80",
    type: "",
    rating: 4.5,
  },
  {
    name: "Red Sauce Pasta",
    description:
      "Red Sauce Pasta is a delicious Italian dish made with pasta, tomato sauce, and herbs.",
    src: foodImages[25],
    price: "139.00/149.00",
    type: "veg/nonVeg",
    rating: 4.5,
  },
  {
    name: "Raspberry Iced Tea",
    description:
      "Raspberry Iced Tea is a refreshing beverage made with the sweet and tangy flavor of raspberries.",
    src: foodImages[2],
    price: "79.00",
    type: "veg",
    rating: 4,
  },
  {
    name: "Crunchy Chicken Wrap",
    description:
      "Crunchy Chicken Wrap is a delicious snack made with crispy chicken and fresh veggies wrapped in a tortilla.",
    src: foodImages[5],
    type: "nonVeg",
    price: "99.00",
    rating: 5,
  },
  {
    name: "Chicken Nuggets",
    description:
      "Chicken Nuggets are a delicious snack made with chicken pieces coated with breadcrumbs and deep-fried.",
    type: "nonVeg",
    price: "89.00",
    src: foodImages[3],
    rating: 5,
  },
  {
    name: "Chicken Burger Combo",
    description:
      "Chicken Burger Combo is a delicious meal with chicken wings or strips or french fries with cold drinks.",
    src: foodImages[8],
    type: "nonVeg",
    price: "189.00-399.00",
    rating: 3.5,
  },
  {
    name: "Garlic Bread",
    description:
      "Garlic Bread is a delicious snack made with different add-ons like corn, paneer, and chicken and many more.",
    src: foodImages[4],
    price: "119.00",
    type: "veg/nonVeg",
    rating: 4,
  },
  {
    name: "Sicilian Pizza",
    description:
      "Sicilian pizza is pizza prepared in a manner that originated in Sicily, Italy.",
    src: foodImages[6],
    rating: 4.5,
  },
  {
    name: "Mint Blue Mojito",
    description:
      "Mint Blue Mojito is a refreshing beverage made with mint leaves, lemon juice, and soda.",
    src: foodImages[0],
    type: "veg",
    price: "99.00",
    rating: 3,
  },
  {
    name: "Mushroom Fried",
    description:
      "Mushroom Fried is a delicious snack made with mushrooms, veggies, and different types of sauce.",
    src: foodImages[9],
    type: "veg",
    price: "79.00",
    rating: 4,
  },
  {
    name: "Fried Momos",
    description:
      "Fried Momos available in both veg with paneer and mushroom and non-veg options include chicken.",
    src: foodImages[10],
    type: "veg/nonVeg",
    price: "79.00-119.00",
    rating: 4.5,
  },
  {
    name: "Spicy Prawn Quesadilla",
    description:
      "Spicy Prawn Quesadilla is a delicious Mexican dish made with prawns, cheese, and tortillas.",
    src: foodImages[11],
    type: "nonVeg",
    price: "199.00",
    rating: 5,
  },
  {
    name: "food",
    description: "",
    src: foodImages[12],
    price: "199.00",
    type: "nonVeg",
    rating: 3,
  },
  {
    name: "food",
    description:
      "Food is any substance consumed to provide nutritional support for an organism.",
    src: foodImages[13],
    rating: 3.5,
  },
  {
    name: "food",
    description:
      "Food is any substance consumed to provide nutritional support for an organism.",
    src: foodImages[14],
    rating: 4,
  },
  {
    name: "food",
    description:
      "Food is any substance consumed to provide nutritional support for an organism.",
    src: foodImages[15],
    rating: 4.5,
  },
  {
    name: "Steamed Momos",
    description:
      "Steamed Momos available in both veg with paneer and mushroom and non-veg options include chicken.",
    type: "veg/nonVeg",
    price: "79.00-119.00",
    src: foodImages[7],
    rating: 5,
  },
  {
    name: "food",
    description:
      "Food is any substance consumed to provide nutritional support for an organism.",
    src: foodImages[17],
    rating: 3,
  },
  {
    name: "Chicken Meatballs",
    description:
      "Chicken Meatballs are a delicious snack made with minced chicken and spicy sauce.",
    src: foodImages[18],
    price: "129.00",
    type: "nonVeg",
    rating: 3.5,
  },
  {
    name: "Paneer Fried Tossed",
    description:
      "Paneer Fried Tossed is a delicious snack made with paneer, veggies, and different types of sauce.",
    type: "veg",
    price: "129.00",
    src: foodImages[19],
    rating: 4,
  },
  {
    name: "food",
    description:
      "Food is any substance consumed to provide nutritional support for an organism.",
    src: foodImages[20],
    rating: 4.5,
  },
  {
    name: "food",
    description:
      "Food is any substance consumed to provide nutritional support for an organism.",
    src: foodImages[21],
    rating: 5,
  },
  {
    name: "food",
    description:
      "Food is any substance consumed to provide nutritional support for an organism.",
    src: foodImages[22],
    rating: 3,
  },
  {
    name: "food",
    description:
      "Food is any substance consumed to provide nutritional support for an organism.",
    src: foodImages[23],
    rating: 3.5,
  },
  {
    name: "food",
    description:
      "Food is any substance consumed to provide nutritional support for an organism.",
    src: foodImages[24],
    rating: 4,
  },
  {
    name: "food",
    description:
      "Food is any substance consumed to provide nutritional support for an organism.",
    src: foodImages[25],
    rating: 4.5,
  },
  {
    name: "White Sauce Pasta",
    description:
      "White Sauce Pasta is a delicious Italian dish made with pasta, white sauce. Available both in veg and non veg.",
    src: foodImages[26],
    price: "139.00/149.00",
    type: "veg/nonVeg",
    rating: 5,
  },
  {
    name: "food",
    description:
      "Food is any substance consumed to provide nutritional support for an organism.",
    src: foodImages[27],
    rating: 3,
  },
  {
    name: "Crispy Sticky BBQ Wings",
    description:
      "Crispy Sticky BBQ Wings are a delicious snack made with chicken wings coated with BBQ sauce.",
    type: "nonVeg",
    price: "149.00",
    src: foodImages[28],
    rating: 3.5,
  },
  {
    name: "Honey Gochujang Chicken",
    description:
      "Honey Gochujang Chicken is a delicious Korean dish made with chicken and a sweet and spicy sauce.",
    src: foodImages[29],
    price: "199.00",
    type: "nonVeg",
    rating: 4,
  },
  {
    name: "food",
    description:
      "Food is any substance consumed to provide nutritional support for an organism.",
    src: foodImages[30],
    rating: 4.5,
  },
  {
    name: "Spicy Prawn Thin Crust Pizza",
    description:
      "Spicy Prawn Thin Crust Pizza is a delicious pizza made with prawns, cheese, and a thin crust.",
    src: foodImages[31],
    type: "nonVeg",
    price: "349.00",
    rating: 5,
  },
];

export const topProducts = [
  {
    url: topProduct1,
    name: "Burger",
  },
  {
    url: topProduct2,
    name: "Momos",
  },
  {
    url: topProduct3,
    name: "Fried Chicken",
  },
  {
    url: topProduct4,
    name: "Milk Shake",
  },
  {
    url: topProduct5,
    name: "Quesadilla",
  },
  {
    url: topProduct6,
    name: "Sicilian Pizza",
  },
  {
    url: topProduct7,
    name: "Pasta",
  },
  // Sicilian Pizza
];

export const testimonials = [
  {
    name: "John Doe",
    title: "CEO",
    image: "https://randomuser.me/api/portraits",
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
  },
];
