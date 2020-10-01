function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function timeout(message, time = 0) {
    return new Promise(done => {
      setTimeout(() => done(message), time * 1000);
    });
}  

function getUserMessage() {
    return form.elements.userMessage.value;
}

function getBotMessage() {
    const responseIndex = rand(0, responses.length - 1);
    const response = responses[responseIndex];

    const time = rand(1, 10);

    return timeout(response, time);
}

function showMessage(text, className) {
    const message = document.createElement('div');
    message.classList.add('message', className);
    message.textContent = text;

    wrapper.appendChild(message);
    wrapper.scrollTop = wrapper.scrollHeight;
}

function endChat() {
    form.elements.userMessage.disabled = true;
    sendButton.disabled = true;
    sendButton.style.backgroundColor = 'grey';
    document.removeEventListener('keydown', enterPressed);
}

async function startChat() {
    const newUserMessage = getUserMessage();

    if (!newUserMessage) {
        return;
    }

    showMessage(newUserMessage, 'user-message');
    form.elements.userMessage.value = '';

    const userMessages = document.getElementsByClassName('user-message');
    const lastMessage = userMessages[userMessages.length - 1].innerText;

    if (lastMessage.toLowerCase() === 'ой, все') {
        endChat();
        showMessage('Не очень-то и хотелось :( Бывай!', 'bot-message');
        return;
    }

    const newBotMessage = await getBotMessage();
    showMessage(newBotMessage, 'bot-message');

    const randomNumber = rand(1, 100);
    if (randomNumber > 80 && randomNumber <= 90) {
        endChat();
        showMessage('Ладно, все, я устал от нашей болтовни, пока-пока', 'goodbye-message');
    }
}

async function enterPressed(event) {
    if (event.code == 'Enter') {
        event.preventDefault();
        await startChat();
    }
}
