'use strict';

const wrapper = document.getElementById('wrapper');
const firstScreen = document.getElementById('categories');
const secondScreen = document.getElementById('products');
const thirdScreen = document.getElementById('product_info');

let selectedCategory;
let selectedProduct;
let productAmount;

showCategories();

document.getElementById('formBtn').addEventListener('click', function() {
  const form = document.forms.purchaseForm.elements;
  const userData = getFormData(form);
  const result = validateFormData(userData);
  const errorMessages = document.querySelectorAll('.error-message');

  for (let i = 0; i < errorMessages.length; i++) {
    errorMessages[i].style.display = 'none';
  }

  if (Array.isArray(result)) {
    for (const key of result) {
      if (form[key].value === '') {
        if (key === 'payment') {
          form[key][0].parentElement.querySelector('.error-message').style.display = 'block';
        } else {
          form[key].parentElement.querySelector('.error-message').style.display = 'block';
        }
      }
    }
  } else {
    wrapper.innerHTML = '';
    const heading = document.createElement('h1');
    heading.innerText = 'Your order summary: ';
    wrapper.appendChild(heading);

    for (const key in userData) {
        const child = document.createElement('div');
        child.className = 'purchase-data';
        child.innerText = displayName[key] + userData[key];
        wrapper.appendChild(child);
    }

    const price = document.createElement('div');
    price.className = 'purchase-data';
    price.innerText = 'Final cost: ' + selectedProduct.price * userData.amount;

    const productName = document.createElement('div');
    productName.className = 'purchase-data';
    productName.innerText = 'Product name: ' + selectedProduct.name;

    wrapper.appendChild(productName);
    wrapper.appendChild(price);
  }
})

const closeBtn = document.getElementById('closeBtn');
closeBtn.addEventListener('click', hidePurchaseForm);