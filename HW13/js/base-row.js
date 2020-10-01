function BaseRow() {
    this.container = createElement("div", "row-container");

    this.viewButton = document.createElement("button");
    this.viewButton.innerText = "View";
}

// BaseRow.prototype.createShortInfo = function() {};

BaseRow.prototype.render = function() {
    const shortInfo = this.createShortInfo();
    
    const buttonsContainer = document.createElement("div");
    buttonsContainer.appendChild(this.viewButton);

    this.container.appendChild(shortInfo);
    this.container.appendChild(buttonsContainer);

    return this.container;
}