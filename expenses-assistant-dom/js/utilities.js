function getInputFieldById(id) {
  const inputValue = document.getElementById(id).value;
  const inputNumber = parseFloat(inputValue);
    return inputNumber
}
function results(id) {
  const totalExpenses = document.getElementById(id);
  return totalExpenses
}