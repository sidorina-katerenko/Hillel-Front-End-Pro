function Car(name) {
    this.id = Car.id++;
    this.name = name;
}

Car.id = 1;

function CarRow(car) {
    BaseRow.apply(this);
    this.car = car;
}

CarRow.prototype.createShortInfo = function() {
    const el = createElement("div", "test");
    return el;
}

CarRow.prototype = Object.create(BaseRow.prototype);
CarRow.prototype.constructor = CarRow;

function CarsView(cars) {
    this.cars = cars;
    this.container = createElement("div", "cars-view-container");
}

CarsView.prototype.render = function() {
    const rows = [];
    for (const car of this.cars) {
        const row = new CarRow(car);
        rows.push(row);
    }
    
    for (const row of rows) {
        this.container.appendChild(row.render());
    }

    return this.container;
}