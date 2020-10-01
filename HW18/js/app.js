'use strict';
const wrapper = document.getElementById('wrapper');
const USER_DATA_KEY = 'userData';
const users = getUsersFromLocalStorage();

const patternName = /^[A-Z][a-z]{1,} [A-Z][a-z]{1,}$/;
const patternAge = /^\d{1,2}$/;
const patternPhone = /^\+380\d{9}$/;
const patternCard = /\d{4}-\d{4}-\d{4}-\d{4}/;

const addUserButtonContainer = createContainer('new-user-button-container');
const addUserButton = createButton('button-new-user', 'Add new user');
addUserButtonContainer.appendChild(addUserButton);
wrapper.appendChild(addUserButtonContainer);

for (const user of users) {
    showUser(user);
}

addUserButton.addEventListener('click', function() {
    const container = addUserButtonContainer.querySelector('.edit-container');

    if (container === null) {
        const newUserForm = createUserInput();
        addUserButtonContainer.appendChild(newUserForm);
    } else {
        container.remove();
    }
});