'use strict';

const categories = [
  {
    id: '1',
    name: 'Laptops',
    items: [
      {id: '11', name: 'Apple Macbook 15', price: 2000, image: 'research.jpg'},
      {id: '12', name: 'Apple Macbook 13', price: 1500, image: 'research.jpg'},
      {id: '13', name: 'Dell XPS', price: 2000, image: 'research.jpg'},
      {id: '14', name: 'Chromebook', price: 500, image: 'research.jpg'},
    ],
  },
  {
    id: '2',
    name: 'Phones',
    items: [
      {id: '21', name: 'iPhone', price: 1500, image: 'research.jpg'},
      {id: '22', name: 'Samsung S20 Ultra', price: 5000, image: 'research.jpg'},
    ],
  },
  {
    id: '3',
    name: 'Watches',
    items: [
      {id: '31', name: 'Apple Watch', price: 500, image: 'research.jpg'},
      {id: '32', name: 'Samsung Smart Watch', price: 500, image: 'research.jpg'},
    ],
  },
  {
    id: '4',
    name: 'Accessories',
    items: [
      {id: '41', name: 'airPods', price: 300, image: 'research.jpg'},
      {id: '42', name: 'Xiaomi miPods', price: 100, image: 'research.jpg'},
      {id: '43', name: 'Samsung komPots', price: 200, image: 'research.jpg'},
    ],
  },
];

const keys = {
  userName: 'userName',
  city: 'city',
  postNumber: 'postNumber',
  payment: 'payment',
  amount: 'amount',
  comment: 'comment',
}

const displayName = {
  [keys.userName]: 'First and last name: ',
  [keys.city]: 'City: ',
  [keys.postNumber]: 'Post office #: ',
  [keys.payment]: 'Payment option: ',
  [keys.amount]: 'Amount of items: ',
  [keys.comment]: 'Additional comment: ',
}