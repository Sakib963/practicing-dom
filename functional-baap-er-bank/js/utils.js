function getInputValue(inputId)
{
    const inputField = document.getElementById(inputId);
    const inputString = inputField.value;
    const inputValue = parseFloat(inputString);

    inputField.value = '';

    return inputValue;
}

function getTextValue(textId)
{
    const textField = document.getElementById(textId);
    const textString = textField.innerText;
    const textValue = parseFloat(textString);

    return textValue;
}

function setText(fieldId, value)
{
    const textField = document.getElementById(fieldId);
    textField.innerText = value;
}