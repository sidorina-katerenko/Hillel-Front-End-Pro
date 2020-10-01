'use strict';

function showItems(items, parent, clickHandler, className, additionalAttributes) {
  parent.innerHTML = '';

  for (let i = 0; i < items.length; i++) {
    const element = document.createElement('button');
    element.setAttribute('type', 'button');
    element.classList.add(className);
    element.innerText = items[i].name;
    element.setAttribute('data-id', items[i].id);

    if (additionalAttributes && additionalAttributes.length) {
      for (let j = 0; j < additionalAttributes.length; j++) {
        element.setAttribute(additionalAttributes[j].key, additionalAttributes[j].value);
      }
    }

    element.addEventListener('click', clickHandler);

    parent.appendChild(element);
  }
}

function handleCategoryClick(event) {
  const categoryId = event.target.getAttribute('data-id');

  selectedCategory = categories.find(function(category) {
    return category.id === categoryId;
  });

  const products = selectedCategory.items;
  showProducts(products, categoryId);
}

function handleProductClick(event) {
  const productId = event.target.getAttribute('data-id');

  selectedProduct = selectedCategory.items.find(function(product) {
    return product.id === productId;
  });

  addProductToScreen(showPurchaseForm, thirdScreen);;
}

function showCategories() {
  showItems(categories, firstScreen, handleCategoryClick, 'category-button');
  const firstScreenHeading = document.createElement('h1');
  firstScreenHeading.innerText = 'Choose category';
  firstScreen.prepend(firstScreenHeading);
}

function showProducts(items) {
  showItems(items, secondScreen, handleProductClick, 'product-button');
  const secondScreenHeading = document.createElement('h1');
    secondScreenHeading.innerText = 'Choose product';
    secondScreen.prepend(secondScreenHeading);
}

function addProductToScreen(callback, parent) {
  const productDetails = document.createElement('div');

  const productImage = document.createElement('img');
  productImage.setAttribute('src', ('./img/' + selectedProduct.image));
  productImage.setAttribute('height', '150px');

  const purchaseBtn = document.createElement('button');
  purchaseBtn.setAttribute('type', 'button');
  purchaseBtn.classList.add('purchase-btn');
  purchaseBtn.innerText = 'Purchase';
  purchaseBtn.addEventListener('click', callback);

  productDetails.innerHTML = '<div><b>Product name: </b>' + selectedProduct.name + '</div>';
  productDetails.innerHTML += '<div><b>Product price: </b>' + selectedProduct.price + '</div>';
  productDetails.appendChild(purchaseBtn);

  const thirdScreenHeading = document.createElement('h1');
  thirdScreenHeading.innerText = 'Product details';

  parent.appendChild(thirdScreenHeading);
  parent.appendChild(productImage);
  parent.appendChild(productDetails);
}

function showPurchaseForm() {
  const form = document.forms.purchaseForm;
  form.style.transform = 'scale(1)';
}

function hidePurchaseForm() {
  const form = document.forms.purchaseForm;
  form.style.transform = 'scale(0)';
}

function getFormData(form) {
  return {
      [keys.userName]: form.userName.value,
      [keys.city]: form.city.value,
      [keys.postNumber]: form.postNumber.value,
      [keys.payment]: form.payment.value,
      [keys.amount]: form.amount.value,
      [keys.comment]: form.comment.value,
  }
}

function validateFormData(formData) {
  const result = [];
  for (const key in formData) {
    if (formData[key] === "") {
      result.push(key);
    }
  }

  return result.length === 0 ? true : result;
}