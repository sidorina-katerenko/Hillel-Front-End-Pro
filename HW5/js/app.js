const startDiscountFrom = 10000;
const discount = 20;

function showCategories(arrayName) {
  for (let i = 0; i < arrayName.length; i++) {
    console.log('#' + (i + 1) + ' Name: ' + arrayName[i].name);
  }
}

showCategories(categories);

function getNumberFromInput(message, array) {
  return parseInt(prompt(message + array.length + ')'));
}

function isNumberInvalidInArray(number, array) {
  return (number !== number || number < 1 || number > array.length);
}

let itemNumber;

function getItemNumber(message, array) {
  do {
    itemNumber = getNumberFromInput(message, array);
  } while(isNumberInvalidInArray(itemNumber, array));
}

getItemNumber('Enter the number of category (1-', categories);

const products = categories[itemNumber - 1].items;

function showProductsByCategory(arrayName) {
  for (let i = 0; i < arrayName.length; i++) {
    console.log('#' + (i + 1) + ' Name: ' + arrayName[i].name + ' Price: ' + arrayName[i].price);
  }
}

showProductsByCategory(products);

getItemNumber('Enter the number of product (1-', products);

let productAmount;

function isNumberInvalid(number) {
  return (number !== number || number < 1);
}

function getProductAmount(message) {
  do {
    productAmount = parseInt(prompt(message));
  } while(isNumberInvalid(productAmount));
}

getProductAmount('Enter the amount of products');

let price;

function calculatePrice(item, amount) {
  return price = item * amount;
}

console.log('The price is ' + calculatePrice((products[itemNumber - 1].price), productAmount))

function calculateDiscount() { // if needed
  const realDiscount = (100 - discount) / 100; // 0.8
  return price * realDiscount;
}

if (price > startDiscountFrom) {
  let finalPrice = calculateDiscount();
  console.log('You get a discount');
  console.log('Your final price is: ' + finalPrice);
}
