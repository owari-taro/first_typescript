function* createFibonacciGenerator() {
    let a = 0;
    let b = 1;
    while (true) {
        yield a;
        [a, b] = [b, a + b];
    }
}

let generator = createFibonacciGenerator();
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());