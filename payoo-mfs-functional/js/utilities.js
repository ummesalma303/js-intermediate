function getInputFieldValidById(id) {
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue)
    return inputNumber
}
function getTextFieldValueById(id) {
    const accountBalance = document.getElementById(id).innerText;
    const accountBalanceNumber = parseFloat(accountBalance)
    return accountBalanceNumber
}