for (let i = 0; i < 100; i++) {
    let myCell = document.createElement('div');
    myCell.style.width = '10%';
    myCell.style.display = 'inline-block';
    myCell.style.textAlign = 'center';
    myCell.style.outline = '1px solid #000';
    myCell.innerText = i + 1;
    document.body.appendChild(myCell);
}