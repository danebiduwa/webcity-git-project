const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

let currentInput = '';
let operator = '';
let previousInput = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.innerText;

        if (value >= '0' && value <= '9' || value === '.') {
            // Append number or decimal point to current input
            currentInput += value;
            display.value = currentInput;
        } else if (value === 'C') {
            // Clear all inputs
            currentInput = '';
            previousInput = '';
            operator = '';
            display.value = '';
        } else if (value === '=') {
            // Perform the calculation
            if (previousInput && currentInput && operator) {
                display.value = calculate(Number(previousInput), Number(currentInput), operator);
                currentInput = display.value;
                operator = '';
            }
        } else {
            // Store operator and move current input to previous input
            operator = value;
            previousInput = currentInput;
            currentInput = '';
        }
    });
});

// Simple calculate function that handles +, -, *, /
function calculate(num1, num2, operator) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        default:
            return 0;
    }
}