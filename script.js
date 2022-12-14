const operationDisplay = document.querySelector("#span-Operation");
const currentNumberDisplay = document.querySelector("#span-CurrentNumberDisplay");
const buttonsNumbers = Array.from(document.getElementsByClassName("num"));
const buttonsBasicOperations = Array.from(document.getElementsByClassName("basicOperation"));
const buttonsNotBasicOperations = Array.from(document.getElementsByClassName("notBasicOperation"));
const btnClear = document.getElementById("btn-clear");
const btnEqual = document.getElementById("btn-equal");

let number1 = 0, number2 = 0;
let operation = null;

//adds events for all btn numbers.
buttonsNumbers.forEach(btn => btn.addEventListener("click", () => {
    if (operation == null)
        btnClear.click();

    currentNumberDisplay.textContent += btn.textContent;
}));

buttonsBasicOperations.forEach(btn => btn.addEventListener("click", () => {
    if (currentNumberDisplay.textContent != "")
    {
        number1 = Number(currentNumberDisplay.textContent);
        operation = btn.textContent;
        operationDisplay.textContent = `${number1} ${operation}`;

        currentNumberDisplay.textContent = "";
    }
}));

buttonsNotBasicOperations.forEach(btn => btn.addEventListener("click", () => {
    if (currentNumberDisplay.textContent != "")
    {
        number1 = Number(currentNumberDisplay.textContent);
        operation = btn.textContent;

        if (operation == "√")
        {
            operationDisplay.textContent = `√${number1}`;
            currentNumberDisplay.textContent = `${Math.sqrt(number1)}`;
        }
        else if (operation == "1/x")
        {
            operationDisplay.textContent = `1 ÷ ${number1}`;
            currentNumberDisplay.textContent = `${number1 == 0 ? "Math Error" : 1 / number1}`;
        }

        operation = null;
    }
}));

//clear all the variables and content
btnClear.addEventListener("click", () => {
    operationDisplay.textContent = "";
    currentNumberDisplay.textContent = "";
    number1 = 0;
    number2 = 0;
    operation = "";
});

//removes last char from display, if it is possible.
document.getElementById("btn-back").addEventListener("click", () => {
    if (currentNumberDisplay.textContent != "")
        currentNumberDisplay.textContent = currentNumberDisplay.textContent.substring(0, currentNumberDisplay.textContent.length - 1);
    else
        btnClear.click();
});

//does the operation and resets op var at the end.
btnEqual.addEventListener("click", () => {
    if (number1 != 0 && operation != null)
    {
        number2 = Number(currentNumberDisplay.textContent);
        operationDisplay.textContent = `${number1} ${operation} ${number2} =`;

        if (operation == "+")
            currentNumberDisplay.textContent = `${number1 + number2}`;
        else if (operation == "-")
            currentNumberDisplay.textContent = `${number1 - number2}`; 
        else if (operation == "×")
            currentNumberDisplay.textContent = `${number1 * number2}`; 
        else if (operation == "÷")
            currentNumberDisplay.textContent = `${number2 != 0 ? number1 / number2 : "Math Error"}`; 
    }

    operation = null;
});