const cars = [
    new Car("Mazda"),
    new Car("Lexus"),
    new Car("Mers"),
    new Car("Ferrari")
];

const persons = [
    new Person("User1", cars.slice(0, 2)),
    new Person("User2", cars.slice(2)),
];

const data = {
    cars, persons
}

const grid = new Grid(data);
grid.render();