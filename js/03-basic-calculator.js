function calculate(x, y, operation) {
    switch(operation) {
        case "add":
            return x + y;
        case "subtract":
            return x - y;
        case "multiply":
            return x * y;
        case "divide":
            return x / y;
        default:
            return "Invalid operation";
    }
}

let repeat;
do {
    let num1 = parseFloat(prompt("Enter the first number:"));
    let num2 = parseFloat(prompt("Enter the second number:"));
    let operation = prompt("Enter the operation (add, subtract, multiply, divide):").toLowerCase();

    let result = calculate(num1, num2, operation);
    if (result === "Invalid operation") {
        alert("Invalid operation! Please enter add, subtract, multiply, or divide.");
    } else {
        alert(`The result of ${operation}ing ${num1} and ${num2} is ${result}.`);
    }

    repeat = prompt("Do you want to perform another calculation? (yes/no)","yes").toLowerCase();
} while (repeat === "yes");
