//STEP 1
function halfNumber(num) {
    let half = num / 2;
    console.log(`Half of ${num} is ${half}.`)
    return half;
}

// Example usage
halfNumber(5); 

//STEP 2

function squareNumber(num) {
    let squared = num * num;
    console.log(`The result of squaring the number ${num} is ${squared}.`)
    return squared;
}

// Example usage
squareNumber(3)

//STEP 3
function percentOf(num1, num2) {
    let percent = (num1 / num2) * 100;
    console.log(`${num1} is ${percent}% of ${num2}.`);
    return percent;
}

// Example usage
percentOf(2, 4); // Logs: "2 is 50% of 4."

//STEP 4
function findModulus(num1, num2) {
    let modulus = num1 % num2;
    console.log(`${modulus} is the modulus of ${num1} and ${num2}.`);
    return modulus;
}

// Example usage
findModulus(4, 10); // Logs: "4 is the modulus of 4 and 10."

