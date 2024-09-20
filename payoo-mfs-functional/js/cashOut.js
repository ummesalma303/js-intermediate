document.getElementById('btn-cash-out').addEventListener('click', function (event) {
    event.preventDefault();
    const cashOutInput = getInputFieldValidById('cash-out-money')
    const cashOutPin = getInputFieldValidById('cash-out-pin-number')
    const cashOutBalance = getTextFieldValueById('balance');
    if (cashOutPin === 1234) {
        const newBalance = cashOutBalance - cashOutInput;
        document.getElementById('balance').innerText = newBalance
    } else {
        alert('No money for you.... DGM.')
    }
})