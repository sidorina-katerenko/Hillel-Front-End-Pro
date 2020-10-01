const wrapper = document.getElementById('wrapper');
const form = document.forms.userInput;

const sendButton = form.querySelector('.message-send');

sendButton.addEventListener('click', async () => { 
    await startChat();
})

document.addEventListener('keydown', enterPressed);