function createSum() {
    let sum = 0;

    return function(number) {
        return sum += number;
    }
}

let sum = createSum();

sum(3);
