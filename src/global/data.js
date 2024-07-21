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



export const resturantsdata = [
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
    deliveryTime: '20-30 mins',
    collectionTime: '10-15 mins',
    foodType: 'Fast Food',
    productData: [
      {
        name: 'Big Mac',
        price: 5.99,
        image: 'https://www.example.com/images/big_mac.jpg',
      },
      {
        name: 'French Fries',
        price: 2.99,
        image: 'https://www.example.com/images/french_fries.jpg',
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
    deliveryTime: '25-35 mins',
    collectionTime: '10-15 mins',
    foodType: 'Fast Food',
    productData: [
      {
        name: 'Fried Chicken Bucket',
        price: 15.99,
        image: 'https://www.example.com/images/fried_chicken_bucket.jpg',
      },
      {
        name: 'Mashed Potatoes',
        price: 3.99,
        image: 'https://www.example.com/images/mashed_potatoes.jpg',
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
    deliveryTime: '30-40 mins',
    collectionTime: '15-20 mins',
    foodType: 'Fast Food',
    productData: [
      {
        name: 'King Steer Burger',
        price: 6.99,
        image: 'https://www.example.com/images/king_steer_burger.jpg',
      },
      {
        name: 'Steers Chips',
        price: 2.99,
        image: 'https://www.example.com/images/steers_chips.jpg',
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
    deliveryTime: '35-45 mins',
    collectionTime: '20-25 mins',
    foodType: 'Pizza',
    productData: [
      {
        name: 'Pepperoni Pizza',
        price: 12.99,
        image: 'https://www.example.com/images/pepperoni_pizza.jpg',
      },
      {
        name: 'Garlic Bread',
        price: 4.99,
        image: 'https://www.example.com/images/garlic_bread.jpg',
      },
    ],
  },
];
