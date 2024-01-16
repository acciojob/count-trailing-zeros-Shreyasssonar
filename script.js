function trailingZeros(n) {
  //your JS code here. If required.
var inputNumber = parseInt(prompt("Enter a positive integer:"));

    // Check if the input is a non-negative integer
    if (isNaN(inputNumber) || inputNumber < 0 || inputNumber > 10000) {
        alert("Invalid input. Please enter a non-negative integer up to 10000.");
        return;
    }

    // Function to calculate the factorial of a number
    function factorial(n) {
        if (n === 0 || n === 1) {
            return 1;
        } else {
            return n * factorial(n - 1);
        }
    }

    // Calculate factorial and count trailing zeros
    var factorialResult = factorial(inputNumber);
    var trailingZerosCount = 0;

    while (factorialResult % 10 === 0) {
        trailingZerosCount++;
        factorialResult /= 10;
    }

    // Display the result using alert
    alert("Number of trailing zeros in the factorial of " + inputNumber + " is: " + trailingZerosCount);
}

const input = prompt("Enter a number");
trailingZeros();
alert(trailingZeros(input));
