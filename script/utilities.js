function inputValueById (inputId){
    const inputLocation = document.getElementById(inputId);
    const inputValueString = inputLocation.value;
    const inputValue = parseFloat(inputValueString);
    return inputValue;
}

function elementValueById (elementId){
    const elementLocation = document.getElementById(elementId);
    const elementValueString = elementLocation.innerText;
    const elementValue = parseFloat(elementValueString);
    return elementValue;
}

function setInputValueById (inputId, newValue){
    const inputLocation = document.getElementById(inputId);
    inputLocation.value = newValue;
}
function setElementValueById (elementId, newValue){
    const elementLocation = document.getElementById(elementId);
    elementLocation.innerText = newValue
}