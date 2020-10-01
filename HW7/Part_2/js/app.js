
const numberOfEmojis = 5;
const listOfEmojis = ['cool.png', 'hug.png', 'love.png', 'silly.png', 'thoughtful.png'];


for (let i = 0; i < numberOfEmojis; i++) {
    const votingContainer = document.createElement('div');
    votingContainer.style.display = 'inline-block';
    
    const votingEmoji = document.createElement('img');
    votingEmoji.setAttribute('src', ('./img/' + listOfEmojis[i]));
    votingEmoji.style.cursor = 'pointer';

    const votingCounter = document.createElement('div');
    votingCounter.innerText = 0;
    votingCounter.style.textAlign = 'center';

    votingEmoji.addEventListener('click', function() {
        votingCounter.innerText++;
    });

    votingContainer.appendChild(votingEmoji);
    votingContainer.appendChild(votingCounter);
    document.body.appendChild(votingContainer);
}