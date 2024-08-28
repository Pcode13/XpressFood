export const filterdata = [
  {
    id: 0,
    name: 'Pizza',
    image: require('../assets/Image/pizza.png'),
  },
  {
    id: 1,
    name: 'Burger',
    image: require('../assets/Image/burger.png'),
  },
  {
    id: 2,
    name: 'Salads',
    image: require('../assets/Image/salad.png'),
  },
  {
    id: 3,
    name: 'HotDog',
    image: require('../assets/Image/hotdog.png'),
  },
  {
    id: 4,
    name: 'Chinese',
    image: require('../assets/Image/chinese.png'),
  },
  {
    id: 5,
    name: 'Mexican',
    image: require('../assets/Image/mexican.png'),
  },
  {
    id: 6,
    name: 'Sea Food',
    image: require('../assets/Image/seafood.png'),
  },
  {
    id: 7,
    name: 'Ocean dish',
    image: require('../assets/Image/oceandish.png'),
  },
];



export const restaurantsData = [
  {
    id: 1,
    restaurantName: "McDonald's",
    faraway: '2',
    businessAddress: '100 Main St, Cityville',
    image: require('../assets/Image/mcdonald.png'),
    averageReview: 4.2,
    numberReview: 500,
    coordinate: {
      latitude: 40.73061,
      longitude: -73.935242,
    },
    discount: '5%',
    deliveryTime: '30 mins',
    collectionTime: '15 mins',
    foodType: 'Fast Food',
    productData: [
      {
        name: 'Big Mac',
        price: 5.99,
        image: require('../assets/Image/burger.png'),
      },
      {
        name: 'French Fries',
        price: 2.99,
        image: require('../assets/Image/frenchfries.png'),
      },
      {
        name: "Soft Drinks",
        price: 29.30,
        image: require('../assets/Image/drinks.png')
      },
      {
        name: "Roti Roll",
        price: 70,
        image: require('../assets/Image/roti-roll.png')
      },
    ],
  },
  {
    id: 2,
    restaurantName: 'KFC',
    faraway: '1.3',
    businessAddress: '200 Chicken Rd, Cityville',
    image: require('../assets/Image/kfc.png'),
    averageReview: 4.0,
    numberReview: 400,
    coordinate: {
      latitude: 34.052235,
      longitude: -118.243683,
    },
    discount: '10%',
    deliveryTime: '60 mins',
    collectionTime: '10 mins',
    foodType: 'Fast Food',
    productData: [
      {
        name: 'Big Mac',
        price: 5.99,
        image: require('../assets/Image/burger.png'),
      },
      {
        name: 'French Fries',
        price: 2.99,
        image: require('../assets/Image/frenchfries.png'),
      },
      {
        name: "Soft Drinks",
        price: 29.30,
        image: require('../assets/Image/drinks.png')
      },
      {
        name: "Roti Roll",
        price: 70,
        image: require('../assets/Image/roti-roll.png')
      },
    ],
  },
  {
    id: 3,
    restaurantName: 'Steers',
    faraway: '4.5',
    businessAddress: '300 Burger St, Cityville',
    image: require('../assets/Image/steers.png'),
    averageReview: 4.3,
    numberReview: 300,
    coordinate: {
      latitude: 51.507351,
      longitude: -0.127758,
    },
    discount: '15%',
    deliveryTime: '40 mins',
    collectionTime: '25 mins',
    foodType: 'Fast Food',
    productData: [
      {
        name: 'Big Mac',
        price: 5.99,
        image: require('../assets/Image/burger.png'),
      },
      {
        name: 'French Fries',
        price: 2.99,
        image: require('../assets/Image/frenchfries.png'),
      },
      {
        name: "Soft Drinks",
        price: 29.30,
        image: require('../assets/Image/drinks.png')
      },
      {
        name: "Roti Roll",
        price: 70,
        image: require('../assets/Image/roti-roll.png')
      },
    ],
  },
  {
    id: 4,
    restaurantName: "Roman's Pizza",
    faraway: '0.5',
    businessAddress: '400 Pizza Ln, Cityville',
    image: require('../assets/Image/romanspizza.png'),
    averageReview: 4.5,
    numberReview: 250,
    coordinate: {
      latitude: 37.774929,
      longitude: -122.419416,
    },
    discount: '20%',
    deliveryTime: '45 mins',
    collectionTime: '35 mins',
    foodType: 'Pizza',
    productData: [
      {
        name: 'Big Mac',
        price: 5.99,
        image: require('../assets/Image/burger.png'),
      },
      {
        name: 'French Fries',
        price: 2.99,
        image: require('../assets/Image/frenchfries.png'),
      },
      {
        name: "Soft Drinks",
        price: 29.30,
        image: require('../assets/Image/drinks.png')
      },
      {
        name: "Roti Roll",
        price: 70,
        image: require('../assets/Image/roti-roll.png')
      },
    ],
  },
];






export const productData = [{
  name: "Hand cut chips", price: 29.30, image: "https://bukasapics.s3.us-east-2.amazonaws.com/plate5.png",
  details: "Two 100% fresh beef burger patties that are hot,deliciously", id: 0
},
{
  name: "Big Mac", price: 50.80, image: "https://bukasapics.s3.us-east-2.amazonaws.com/plate4.png",
  details: "McFeast features two 100% fresh beef burger patties that are hot", id: 1
},
{ name: "Chicken Burger", price: 70, image: "https://bukasapics.s3.us-east-2.amazonaws.com/plate3.png", details: "", id: 2 },

{
  name: "Hand cut chips", price: 29.30, image: "https://bukasapics.s3.us-east-2.amazonaws.com/plate4.png",
  details: "Two 100% fresh beef burger patties that are hot,deliciously", id: 3
},
{
  name: "Big Mac", price: 70.20, image: "https://bukasapics.s3.us-east-2.amazonaws.com/plate1.png",
  details: "McFeast features two 100% fresh beef burger patties that are hot", id: 4
},
{ name: "Chicken Burger", price: 70, image: "https://bukasapics.s3.us-east-2.amazonaws.com/chicken.png", details: "", id: 5 },

];


export const menuData = [

  { title: "BEEF", special: false, key: 0, },
  { title: "CHICKEN", special: false, key: 1 },
  { title: "VEGGIE BURGER", special: false, key: 2 },
  { title: "FRIES& CORN", special: false, key: 3 },
  { title: "SALADS", special: false, key: 4 },
  { title: "HAPPY MEALS", special: false, key: 5 },
  { title: "SAHRE BOX", special: false, key: 6 },
  { title: "MILKSHAKES", special: false, key: 7 },
  { title: "COLD DRINKS", special: false, key: 8 },
  { title: "DESSERTS", special: false, key: 9 },
  { title: "HOT DRINKS", special: false, key: 10 },

];

export const specialData = [
  { title: "LIMITED OFFER", key: 0 },
  { title: "GO CHILLI", key: 1 },
  { title: "GO CHEESE", key: 2 },
  { title: "MCCHICKEN DELUXE PROMO", key: 3 },
];

export const menu = [
  { key: 1, title: 'BEEF' },
  { key: 2, title: 'CHICKEN' },
  { key: 3, title: 'VEGGIE BURGER' },
  { key: 4, title: 'SHARE BOX' },
  { key: 5, title: 'Happy Meals' },
  { key: 6, title: 'Fries' },
  { key: 7, title: 'Sides' },
  { key: 8, title: 'Milkshakes' },
]


export const menuDetailedData = [
  {
    meal: "Big Mac",
    price: 70.20,
    image: "https://bukasapics.s3.us-east-2.amazonaws.com/plate1.png",
    details: "McFeast features two 100% fresh beef burger patties that are hot",
    preferenceTitle: ["Choose your 2 dips", "Choose your 1st drink flavour", "Choose your 2nd drink flavour", "Would you like to add a side?", "Would you Like any extra sauce?"],
    preferenceData: [

      [{ name: "Jalapeno Dip", price: 8.91, checked: false, id: 10 }, { name: "Sweet & Sour Dip", price: 8.75, checked: false, id: 11 }, { name: 'BBQ Dip', price: 11.99, checked: false, id: 12 },
      ],

      [{ name: "Small Coke", price: 8.90, checked: false, id: 13 }, { name: "Small Fanta Orange", price: 8.90, checked: false, id: 14 }, { name: 'Small Sprite', price: 11.90, checked: false, id: 15 },
      { name: 'Small Coke Zero', price: 3.95, checked: false, id: 16 }, { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 17 }, { name: 'Small Apple Juice', price: 10.95, checked: false, id: 18 },
      { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 19 }, { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 20 },
      ],

      [{ name: "Small Coke", price: 8.90, checked: false, id: 21 }, { name: "Small Fanta Orange", price: 8.90, checked: false, id: 22 }, { name: 'Small Sprite', price: 11.90, checked: false, id: 23 },
      { name: 'Small Coke Zero', price: 3.95, checked: false, id: 24 }, { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 25 }, { name: 'Small Apple Juice', price: 10.95, checked: false, id: 26 },
      { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 27 }, { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 28 }, { name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 29 },
      ],

      [{ name: "debonairs sauce", price: 8.90, checked: false, id: 30 }, { name: "BBQ Sauce", price: 8.90, checked: false, id: 31 }, { name: 'Tikka Sauce', price: 11.90, checked: false, id: 32 },
      ],

      [
        { name: "Small Coke", price: 8.90, checked: false, id: 33 }, { name: "Small Fanta Orange", price: 8.90, checked: false, id: 34 }, { name: 'Small Sprite', price: 11.90, checked: false, id: 35 },
        { name: 'Small Coke Zero', price: 3.95, checked: false, id: 36 }, { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 37 }, { name: 'Small Apple Juice', price: 10.95, checked: false, id: 38 },
        { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 39 }, { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 40 }, { name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 41 },
      ],
    ],
    minimum_quatity: [2, 1, 1, null, null],
    counter: [0, 0, 0, 0, 0],
    required: [true, true, true, false, false],
    id: 0
  },

  {
    meal: "Hand cut chips",
    price: 29.30,
    image: "https://bukasapics.s3.us-east-2.amazonaws.com/plate4.png",
    details: "Two 100% fresh beef burger patties that are hot,deliciously",
    preferenceTitle: ["Choose your 2 dips", "Choose your 1st drink flavour", "Choose your 2nd drink flavour", "Would you like to add a side?", "Would you Like any extra sauce?"],
    preferenceData: [

      [{ name: "Jalapeno Dip", price: 8.91, checked: false, id: 0 }, { name: "Sweet & Sour Dip", price: 8.75, checked: false, id: 1 }, { name: 'BBQ Dip', price: 11.99, checked: false, id: 2 },
      ],

      [{ name: "Small Coke", price: 8.90, checked: false, id: 0 }, { name: "Small Fanta Orange", price: 8.90, checked: false, id: 1 }, { name: 'Small Sprite', price: 11.90, checked: false, id: 2 },
      { name: 'Small Coke Zero', price: 3.95, checked: false, id: 3 }, { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4 }, { name: 'Small Apple Juice', price: 10.95, checked: false, id: 5 },
      { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6 }, { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7 },
      ],

      [{ name: "Small Coke", price: 8.90, checked: false, id: 0 }, { name: "Small Fanta Orange", price: 8.90, checked: false, id: 1 }, { name: 'Small Sprite', price: 11.90, checked: false, id: 2 },
      { name: 'Small Coke Zero', price: 3.95, checked: false, id: 3 }, { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4 }, { name: 'Small Apple Juice', price: 10.95, checked: false, id: 5 },
      { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6 }, { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7 }, { name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 8 },
      ],

      [{ name: "debonairs sauce", price: 8.90, checked: false, id: 0 }, { name: "BBQ Sauce", price: 8.90, checked: false, id: 1 }, { name: 'Tikka Sauce', price: 11.90, checked: false, id: 2 },
      ],

      [
        { name: "Small Coke", price: 8.90, checked: false, id: 0 }, { name: "Small Fanta Orange", price: 8.90, checked: false, id: 1 }, { name: 'Small Sprite', price: 11.90, checked: false, id: 2 },
        { name: 'Small Coke Zero', price: 3.95, checked: false, id: 3 }, { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4 }, { name: 'Small Apple Juice', price: 10.95, checked: false, id: 5 },
        { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6 }, { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7 }, { name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 8 },
      ],
    ],
    minimum_quatity: [2, 1, 2, null, null],
    counter: [0, 0, 0, 0, 0],
    required: [true, true, true, false, false],
    id: 1
  },

  {
    meal: "Chicken Burger",
    price: 45.70,
    image: "https://bukasapics.s3.us-east-2.amazonaws.com/plate3.png",
    details: "",
    preferenceTitle: ["Choose your 2 dips", "Choose your 1st drink flavour", "Choose your 2nd drink flavour", "Would you like to add a side?", "Would you Like any extra sauce?"],
    preferenceData: [

      [{ name: "Jalapeno Dip", price: 8.91, checked: false, id: 0 }, { name: "Sweet & Sour Dip", price: 8.75, checked: false, id: 1 }, { name: 'BBQ Dip', price: 11.99, checked: false, id: 2 },
      ],

      [{ name: "Small Coke", price: 8.90, checked: false, id: 0 }, { name: "Small Fanta Orange", price: 8.90, checked: false, id: 1 }, { name: 'Small Sprite', price: 11.90, checked: false, id: 2 },
      { name: 'Small Coke Zero', price: 3.95, checked: false, id: 3 }, { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4 }, { name: 'Small Apple Juice', price: 10.95, checked: false, id: 5 },
      { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6 }, { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7 },
      ],

      [{ name: "Small Coke", price: 8.90, checked: false, id: 0 }, { name: "Small Fanta Orange", price: 8.90, checked: false, id: 1 }, { name: 'Small Sprite', price: 11.90, checked: false, id: 2 },
      { name: 'Small Coke Zero', price: 3.95, checked: false, id: 3 }, { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4 }, { name: 'Small Apple Juice', price: 10.95, checked: false, id: 5 },
      { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6 }, { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7 }, { name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 8 },
      ],

      [{ name: "debonairs sauce", price: 8.90, checked: false, id: 0 }, { name: "BBQ Sauce", price: 8.90, checked: false, id: 1 }, { name: 'Tikka Sauce', price: 11.90, checked: false, id: 2 },
      ],

      [
        { name: "Small Coke", price: 8.90, checked: false, id: 0 }, { name: "Small Fanta Orange", price: 8.90, checked: false, id: 1 }, { name: 'Small Sprite', price: 11.90, checked: false, id: 2 },
        { name: 'Small Coke Zero', price: 3.95, checked: false, id: 3 }, { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4 }, { name: 'Small Apple Juice', price: 10.95, checked: false, id: 5 },
        { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6 }, { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7 }, { name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 8 },
      ],
    ],

    minimum_quatity: [2, 1, 1, null, null],
    counter: [0, 0, 0, 0, 0],
    required: [true, true, true, false, false],
    id: 2
  },

  {
    meal: "Big Mac",
    price: 50.80,
    image: "https://bukasapics.s3.us-east-2.amazonaws.com/plate4.png",
    details: "McFeast features two 100% fresh beef burger patties that are hot",
    preferenceTitle: ["Choose your 2 dips", "Choose your 1st drink flavour", "Choose your 2nd drink flavour", "Would you like to add a side?", "Would you Like any extra sauce?"],
    preferenceData: [

      [{ name: "Jalapeno Dip", price: 8.91, checked: false, id: 0 }, { name: "Sweet & Sour Dip", price: 8.75, checked: false, id: 1 }, { name: 'BBQ Dip', price: 11.99, checked: false, id: 2 },
      ],

      [{ name: "Small Coke", price: 8.90, checked: false, id: 0 }, { name: "Small Fanta Orange", price: 8.90, checked: false, id: 1 }, { name: 'Small Sprite', price: 11.90, checked: false, id: 2 },
      { name: 'Small Coke Zero', price: 3.95, checked: false, id: 3 }, { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4 }, { name: 'Small Apple Juice', price: 10.95, checked: false, id: 5 },
      { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6 }, { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7 },
      ],

      [{ name: "Small Coke", price: 8.90, checked: false, id: 0 }, { name: "Small Fanta Orange", price: 8.90, checked: false, id: 1 }, { name: 'Small Sprite', price: 11.90, checked: false, id: 2 },
      { name: 'Small Coke Zero', price: 3.95, checked: false, id: 3 }, { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4 }, { name: 'Small Apple Juice', price: 10.95, checked: false, id: 5 },
      { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6 }, { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7 }, { name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 8 },
      ],

      [{ name: "debonairs sauce", price: 8.90, checked: false, id: 0 }, { name: "BBQ Sauce", price: 8.90, checked: false, id: 1 }, { name: 'Tikka Sauce', price: 11.90, checked: false, id: 2 },
      ],

      [
        { name: "Small Coke", price: 8.90, checked: false, id: 0 }, { name: "Small Fanta Orange", price: 8.90, checked: false, id: 1 }, { name: 'Small Sprite', price: 11.90, checked: false, id: 2 },
        { name: 'Small Coke Zero', price: 3.95, checked: false, id: 3 }, { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4 }, { name: 'Small Apple Juice', price: 10.95, checked: false, id: 5 },
        { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6 }, { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7 }, { name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 8 },
      ],
    ],

    minimum_quatity: [2, 1, 1, null, null],
    counter: [0, 0, 0, 0, 0],
    required: [true, true, true, false, false],
    id: 3
  },


  {

    meal: "Hand cut chips",
    price: 29.30,
    image: "https://bukasapics.s3.us-east-2.amazonaws.com/plate5.png",
    details: "Two 100% fresh beef burger patties that are hot,deliciously",

    preferenceTitle: ["Choose your 2 dips", "Choose your 1st drink flavour", "Choose your 2nd drink flavour", "Would you like to add a side?", "Would you Like any extra sauce?"],

    preferenceData: [

      [{ name: "Jalapeno Dip", price: 8.91, checked: false, id: 0 }, { name: "Sweet & Sour Dip", price: 8.75, checked: false, id: 1 }, { name: 'BBQ Dip', price: 11.99, checked: false, id: 2 },
      ],

      [{ name: "Small Coke", price: 8.90, checked: false, id: 0 }, { name: "Small Fanta Orange", price: 8.90, checked: false, id: 1 }, { name: 'Small Sprite', price: 11.90, checked: false, id: 2 },
      { name: 'Small Coke Zero', price: 3.95, checked: false, id: 3 }, { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4 }, { name: 'Small Apple Juice', price: 10.95, checked: false, id: 5 },
      { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6 }, { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7 },
      ],

      [{ name: "Small Coke", price: 8.90, checked: false, id: 0 }, { name: "Small Fanta Orange", price: 8.90, checked: false, id: 1 }, { name: 'Small Sprite', price: 11.90, checked: false, id: 2 },
      { name: 'Small Coke Zero', price: 3.95, checked: false, id: 3 }, { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4 }, { name: 'Small Apple Juice', price: 10.95, checked: false, id: 5 },
      { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6 }, { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7 }, { name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 8 },
      ],

      [{ name: "debonairs sauce", price: 8.90, checked: false, id: 0 }, { name: "BBQ Sauce", price: 8.90, checked: false, id: 1 }, { name: 'Tikka Sauce', price: 11.90, checked: false, id: 2 },
      ],

      [
        { name: "Small Coke", price: 8.90, checked: false, id: 0 }, { name: "Small Fanta Orange", price: 8.90, checked: false, id: 1 }, { name: 'Small Sprite', price: 11.90, checked: false, id: 2 },
        { name: 'Small Coke Zero', price: 3.95, checked: false, id: 3 }, { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4 }, { name: 'Small Apple Juice', price: 10.95, checked: false, id: 5 },
        { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6 }, { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7 }, { name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 8 },
      ],
    ],

    minimum_quatity: [2, 1, 1, null, null],
    counter: [0, 0, 0, 0, 0],
    required: [true, true, true, false, false],
    id: 4
  },

  {
    meal: "Big Mac",
    price: 70.20,
    image: "https://bukasapics.s3.us-east-2.amazonaws.com/plate1.png",
    details: "McFeast features two 100% fresh beef burger patties that are hot",
    preferenceTitle: ["Choose your 2 dips", "Choose your 1st drink flavour", "Choose your 2nd drink flavour", "Would you like to add a side?", "Would you Like any extra sauce?"],
    preferenceData: [

      [{ name: "Jalapeno Dip", price: 8.91, checked: false, id: 10 }, { name: "Sweet & Sour Dip", price: 8.75, checked: false, id: 11 }, { name: 'BBQ Dip', price: 11.99, checked: false, id: 12 },
      ],

      [{ name: "Small Coke", price: 8.90, checked: false, id: 13 }, { name: "Small Fanta Orange", price: 8.90, checked: false, id: 14 }, { name: 'Small Sprite', price: 11.90, checked: false, id: 15 },
      { name: 'Small Coke Zero', price: 3.95, checked: false, id: 16 }, { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 17 }, { name: 'Small Apple Juice', price: 10.95, checked: false, id: 18 },
      { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 19 }, { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 20 },
      ],

      [{ name: "Small Coke", price: 8.90, checked: false, id: 21 }, { name: "Small Fanta Orange", price: 8.90, checked: false, id: 22 }, { name: 'Small Sprite', price: 11.90, checked: false, id: 23 },
      { name: 'Small Coke Zero', price: 3.95, checked: false, id: 24 }, { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 25 }, { name: 'Small Apple Juice', price: 10.95, checked: false, id: 26 },
      { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 27 }, { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 28 }, { name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 29 },
      ],

      [{ name: "debonairs sauce", price: 8.90, checked: false, id: 30 }, { name: "BBQ Sauce", price: 8.90, checked: false, id: 31 }, { name: 'Tikka Sauce', price: 11.90, checked: false, id: 32 },
      ],

      [
        { name: "Small Coke", price: 8.90, checked: false, id: 33 }, { name: "Small Fanta Orange", price: 8.90, checked: false, id: 34 }, { name: 'Small Sprite', price: 11.90, checked: false, id: 35 },
        { name: 'Small Coke Zero', price: 3.95, checked: false, id: 36 }, { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 37 }, { name: 'Small Apple Juice', price: 10.95, checked: false, id: 38 },
        { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 39 }, { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 40 }, { name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 41 },
      ],
    ],
    minimum_quatity: [2, 1, 1, null, null],
    counter: [0, 0, 0, 0, 0],
    required: [true, true, true, false, false],
    id: 5
  },

];

