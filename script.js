const operationDisplay = document.querySelector("#h3-CurrentNumberDisplay");
const currentNumberDisplay = document.querySelector("#h2-CurrentNumberDisplay");

const buttonsNumbers = Array.from(document.getElementsByClassName("num"));
const buttonsBasicOperations = Array.from(document.getElementsByClassName("basicOperation"));
const btnEqual = document.getElementById("btn-equal");

let number1 = 0, number2 = 0;
let operation = null;

buttonsNumbers.forEach(btn => btn.addEventListener("click", () => {
    if (operation == null)
        clear();

    currentNumberDisplay.textContent += btn.textContent;
}));

buttonsBasicOperations.forEach(btn => btn.addEventListener("click", () => {
    number1 = Number(currentNumberDisplay.textContent);
    operation = btn.textContent;
    operationDisplay.textContent = `${number1} ${operation}`;

    currentNumberDisplay.textContent = "";
}));

btnEqual.addEventListener("click", () => {
    if (number1 != 0)
    {
        number2 = Number(currentNumberDisplay.textContent);
        operationDisplay.textContent = `${number1} ${operation} ${number2} =`;

        if (operation == "+")
            currentNumberDisplay.textContent = `${number1 + number2}`;
        else if (operation == "-")
            currentNumberDisplay.textContent = `${number1 - number2}`; 
        else if (operation == "X")
            currentNumberDisplay.textContent = `${number1 * number2}`; 
        else if (operation == "÷")
            currentNumberDisplay.textContent = `${number1 / number2}`; 
    }

    operation = null;
});

function clear()
{
    operationDisplay.textContent = "";
    currentNumberDisplay.textContent = "";
    number1 = 0;
    number2 = 0;
    operation = "";
}