let calculation = localStorage.getItem('calculation') || '';

displayCalculation();

function updateCalculation(value) {
    calculation += value;

    displayCalculation();
    localStorage.setItem('calculation', calculation);
}

// Optional: you can also create a function in order
// to reuse this code.
function saveCalculation() {
    localStorage.setItem('calculation', calculation);
}

function displayCalculation() {
    document.querySelector('.result').innerHTML = calculation;
}

const buttons = document.querySelectorAll('.js-calc-btn');

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        updateCalculation(btn.textContent);
    });
});

document.querySelector('.js-btn-clear').addEventListener('click', () => {
    calculation = '';
    displayCalculation();

    // Remember to save the calculation here.
    localStorage.setItem('calculation', calculation);
});

document.querySelector('.js-btn-equal').addEventListener('click', () => {
    // Note: eval() takes a string and runs it as code.
    // Avoid using eval() in real world projects since
    // it can potentially be given harmful code to run.
    calculation = eval(calculation);
    displayCalculation();

    // Remember to save the calculation here.
    localStorage.setItem('calculation', calculation);
});