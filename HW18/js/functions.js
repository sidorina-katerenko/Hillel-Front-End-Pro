function createButton(className, text) {
    const button = document.createElement('button');
    button.setAttribute('type', 'button');
    button.className = className;
    button.innerText = text;

    return button;
}

function createContainer(className) {
    const container = document.createElement('div');
    container.className = className;

    return container;
}

function showUserInfo(user) {
    const userInfoContainer = createContainer('info-container');

    const name = document.createElement('div');
    name.innerText = 'Name: ' + user.name;
    const age = document.createElement('div');
    age.innerText = 'Age: ' + user.age;
    const gender = document.createElement('div');
    gender.innerText = 'Gender: ' + user.gender;
    const phone = document.createElement('div');
    phone.innerText = 'Phone: ' + user.phone;
    const card = document.createElement('div');
    card.innerText = 'Card: ' + user.card;

    userInfoContainer.appendChild(name);
    userInfoContainer.appendChild(age);
    userInfoContainer.appendChild(gender);
    userInfoContainer.appendChild(phone);
    userInfoContainer.appendChild(card);

    return userInfoContainer;
}

function onUserView(e) {
    const parent = e.target.parentElement.parentElement;

    switch (e.target.dataset.openstate) {
        case 'closed': {
            const userId = parseInt(e.target.dataset.id);

            const user = users.find(function (u) {
                return u.id === userId;
            });

            const container = showUserInfo(user);
            parent.appendChild(container);
            e.target.dataset.openstate = 'open';
            break;
        }
        case 'open': {
            const container = parent.querySelector('.info-container');
            container.remove();
            e.target.dataset.openstate = 'closed';
            break;
        }
        default: break;
    }
}

function updateUserInfo(parent, form, user) {
    user.name = form.username.value;
    user.age = form.userage.value;
    user.gender = form.usergender.value;
    user.phone = form.userphone.value;
    user.card = form.usercard.value;

    updateLocalStorage();   

    parent.querySelector('span').innerText = user.name;
    form.remove();
    parent.querySelector('.button-edit').dataset.openstate = 'closed';
}

function createUserInfo(form) {
    const newUser = {
        id: Date.now(),
        name: form.username.value,
        age: form.userage.value,
        gender: form.usergender.value,
        phone: form.userphone.value,
        card: form.usercard.value,
    };

    users.push(newUser);
    updateLocalStorage();
    showUser(newUser);
    form.remove();
}

function createUserInput(parent, user) {
    const userInfoContainer = document.createElement('form');
    userInfoContainer.className = 'edit-container';

    const errorMessage = document.createElement('div');
    errorMessage.className = 'error-message';

    const nameInput = document.createElement('input');
    nameInput.setAttribute('name', 'username');
    nameInput.setAttribute('placeholder', 'New name');

    if (user !== undefined && user.name !== undefined) {
        nameInput.setAttribute('value', user.name);
    }

    const ageInput = document.createElement('input');
    ageInput.setAttribute('name', 'userage');
    ageInput.setAttribute('placeholder', 'New age');

    if (user !== undefined && user.age !== undefined) {
        ageInput.setAttribute('value', user.age);
    }

    const genderInput = document.createElement('input');
    genderInput.setAttribute('name', 'usergender');
    genderInput.setAttribute('placeholder', 'New gender');

    if (user !== undefined && user.gender !== undefined) {
        genderInput.setAttribute('value', user.gender);
    }

    const phoneInput = document.createElement('input');
    phoneInput.setAttribute('name', 'userphone');
    phoneInput.setAttribute('placeholder', 'New phone');

    if (user !== undefined && user.phone !== undefined) {
        phoneInput.setAttribute('value', user.phone);
    }

    const cardInput = document.createElement('input');
    cardInput.setAttribute('name', 'usercard');
    cardInput.setAttribute('placeholder', 'New card');

    if (user !== undefined && user.card !== undefined) {
        cardInput.setAttribute('value', user.card);
    }

    const submitButton = createButton('button-save', 'Save');

    submitButton.addEventListener('click', function() {
        if (!patternName.test(nameInput.value)) {
            errorMessage.innerText = 'Please enter your name (format: Aaaaa Bbbbb)';
            userInfoContainer.appendChild(errorMessage);
            return;
        }

        if (!patternAge.test(ageInput.value)) {
            errorMessage.innerText = 'Please enter your age correctly';
            userInfoContainer.appendChild(errorMessage);
            return;
        }

        if (genderInput.value !== 'male' && genderInput.value !== 'female') {
            errorMessage.innerText = 'Gender should be "male" or "female"';
            userInfoContainer.appendChild(errorMessage);
            return;
        }

        if (!patternPhone.test(phoneInput.value)) {
            errorMessage.innerText = 'Please enter a valid Ukrainian number';
            userInfoContainer.appendChild(errorMessage);
            return;
        }

        if (!patternCard.test(cardInput.value)) {
            errorMessage.innerText = 'Please enter a valid card number (format: XXXX-XXXX-XXXX-XXXX)';
            userInfoContainer.appendChild(errorMessage);
            return;
        }

        if (user !== undefined && user.id !== undefined) {
            updateUserInfo(parent, userInfoContainer, user);
        } else {
            createUserInfo(userInfoContainer);
        }
    });

    userInfoContainer.appendChild(nameInput);
    userInfoContainer.appendChild(ageInput);
    userInfoContainer.appendChild(genderInput);
    userInfoContainer.appendChild(phoneInput);
    userInfoContainer.appendChild(cardInput);
    userInfoContainer.appendChild(submitButton);

    return userInfoContainer;
}

function onUserEdit(e) {
    const parent = e.target.parentElement.parentElement;

    switch (e.target.dataset.openstate) {
        case 'closed': {
            const userId = parseInt(e.target.dataset.id);

            const user = users.find(function (u) {
                return u.id === userId;
            });

            const container = createUserInput(parent, user);
            parent.appendChild(container);
            e.target.dataset.openstate = 'open';
            break;
        }
        case 'open': {
            const container = parent.querySelector('.edit-container');
            container.remove();
            e.target.dataset.openstate = 'closed';
            break;
        }
        default: break;
    }
}

function removeItem(parent, user) {
    const container = createContainer('remove-container');
    container.innerText = 'Are you sure you want to remove ' + user.name + '? ';
    const yes = createButton('button-yes', 'Yes');
    const nope = createButton('button-no', 'No');

    yes.addEventListener('click', function() {
        const index = users.findIndex(function(u) {
            return u.id === user.id;
        })
        users.splice(index, 1);

        updateLocalStorage();

        parent.remove();
    })

    nope.addEventListener('click', function() {
        parent.querySelector('.button-remove').dataset.openstate = 'closed';
        container.remove();
    })
    
    container.appendChild(yes);
    container.appendChild(nope);

    return container;
}

function onUserRemove(e) {
    const parent = e.target.parentElement.parentElement;

    switch (e.target.dataset.openstate) {
        case 'closed': {
            const userId = parseInt(e.target.dataset.id);

            const user = users.find(function (u) {
                return u.id === userId;
            });

            const container = removeItem(parent, user);
            parent.appendChild(container);
            e.target.dataset.openstate = 'open';
            break;
        }
        case 'open': {
            const container = parent.querySelector('.remove-container');
            container.remove();
            e.target.dataset.openstate = 'closed';
            break;
        }
        default: break;
    }
}

function showUser(user) {
    const container = createContainer('user-container');
    container.setAttribute('data-id', user.id);

    const userItem = document.createElement('span');
    userItem.innerText = user.name;

    const buttonContainer = createContainer('button-container');

    const viewButton = createButton('button-view', 'View');
    viewButton.setAttribute('data-id', user.id);
    viewButton.setAttribute('data-openState', 'closed');
    viewButton.addEventListener('click', onUserView);

    const editButton = createButton('button-edit', 'Edit');
    editButton.setAttribute('data-id', user.id);
    editButton.setAttribute('data-openState', 'closed');
    editButton.addEventListener('click', onUserEdit);

    const removeButton = createButton('button-remove', 'Remove');
    removeButton.setAttribute('data-id', user.id);
    removeButton.setAttribute('data-openState', 'closed');
    removeButton.addEventListener('click', onUserRemove);

    buttonContainer.appendChild(viewButton);
    buttonContainer.appendChild(editButton);
    buttonContainer.appendChild(removeButton);

    container.appendChild(userItem);
    container.appendChild(buttonContainer);

    wrapper.appendChild(container);
}

function getUsersFromLocalStorage() {
    const item = localStorage.getItem(USER_DATA_KEY);

    if (item === null) {
        localStorage.setItem(USER_DATA_KEY, JSON.stringify(initialUsers));
        return initialUsers;
    }

    return JSON.parse(item);
}

function updateLocalStorage() {
    localStorage.setItem(USER_DATA_KEY, JSON.stringify(users));
}