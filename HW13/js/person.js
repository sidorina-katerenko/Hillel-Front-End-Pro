function Person(name, cars) {
    this.id = Person.id++;
    this.name = name;
    this.cars = cars || [];
}

Person.id = 1;

function PersonsView(persons) {
    this.container = createElement("div", "persons-view-container");
}

PersonsView.prototype.render = function() {
    return this.container;
};