function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        if (display.value.includes('/0')) {
            display.value = 'Division by zero is not allowed';
        }
        else {
            display.value = eval(display.value);
        }
    } catch (e) {
        display.value = 'Erreur';
    }
}