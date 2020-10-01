const mode = {
    car: "car",
    owner: "owner"
};

function Grid(data) {
    this.data = data;
    this.mode = mode.car;

    this.modeView = {
        [mode.car]: new CarsView(this.data.cars),
        [mode.owner]: new CarsView(this.data.persons)
    }

    this.wrapper = document.querySelector("#wrapper");
    this.container = createElement("div", "grid-container");
    this.rowsContainer = createElement("div", "grid-rows-container");
}

Grid.prototype.onSelectChange = function(mode) {
    if (mode === this.mode) return;

    this.mode = mode;
    this.rowsContainer.innerHTML = "";

    const modeView = this.modeView[mode];
    const view = modeView.render();
    this.rowsContainer.appendChild(view);
}

Grid.prototype.render = function() {
    const select = new ModeSelect([mode.car, mode.owner], this.onSelectChange.bind(this));

    this.container.appendChild(select.render());
    this.container.appendChild(this.rowsContainer);

    wrapper.appendChild(this.container);
}