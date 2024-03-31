// Calculator class
class Calculator {
    constructor() {
        this.result = 0;
    }

    // Addition method
    add(num) {
        this.result += num;
    }

    // Subtraction method
    subtract(num) {
        this.result -= num;
    }

    // Multiplication method
    multiply(num) {
        this.result *= num;
    }

    // Division method
    divide(num) {
        if (num !== 0) {
            this.result /= num;
        } else {
            console.log("Error: Cannot divide by zero!");
        }
    }

    // Clear method
    clear() {
        this.result = 0;
    }
}

// Usage example
const calculator = new Calculator();
calculator.add(5);
calculator.subtract(2);
calculator.multiply(3);
calculator.divide(4);
console.log(calculator.result); // Output: 1.25