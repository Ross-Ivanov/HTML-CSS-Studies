const buttonsEl = document.querySelectorAll('.buttons');

const resultFieldElement = document.getElementById('result');

for (let button = 0; button < buttonsEl.length; button++) {
    buttonsEl[button].addEventListener('click', function(q) {
        const pressedButton = buttonsEl[button].textContent;
        if (pressedButton === 'C') {
            clearResultWindow();
        } else if (pressedButton === '=') {
            calculateResult();
        } else if (pressedButton === 'CE') {
            deleteLastCharacter();
        } else {
            addToResultWindow(pressedButton);
        }
    });
}

function clearResultWindow() {
    resultFieldElement.value = '';
}

function calculateResult() {
    resultFieldElement.value = eval(resultFieldElement.value);
}

function addToResultWindow(pressedButton) {
    resultFieldElement.value += pressedButton;
}

function deleteLastCharacter(pressedButton) {
    resultFieldElement.value = resultFieldElement.value.slice(0, -1);
}

// TODO: fix the issue with entering another operator after pressing an operator