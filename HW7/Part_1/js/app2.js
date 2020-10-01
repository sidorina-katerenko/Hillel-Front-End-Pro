function getLinkFromUser() {
    let usersLink = prompt('Введите ссылку, по которой хотите перейти (не шалите, добавьте протокол!)');

    if (!usersLink.startsWith('http')) {
        usersLink = 'https://' + usersLink;
    }

    document.getElementById('taskTwoForm').setAttribute('action', usersLink);
}

const firstButton = document.getElementById('taskTwoButton');

firstButton.addEventListener('click', getLinkFromUser);