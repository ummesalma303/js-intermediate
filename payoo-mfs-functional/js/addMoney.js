document.getElementById('btn-add-money')
    .addEventListener('click', function (event) {
    event.preventDefault();
    const  addMoney = getInputFieldValidById('input-add-money');
    const  pinValue = getInputFieldValidById('input-pin-number');
    const accountBalance = getTextFieldValueById('balance');
    // console.log(addMoney, pinValue);
     // wrong way to verify. do not try it at your serious website
    if (pinValue === 1234) {
        const newBalance = accountBalance + addMoney;
        document.getElementById('balance').innerText = newBalance;
    } else {
        alert('Failed to add the money.')
    }
})