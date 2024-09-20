document.getElementById('btn-add-money')
    .addEventListener('click', function (event) {
    event.preventDefault();
    const  addMoney = getInputFieldValidById('input-add-money');
    const  pinValue = getInputFieldValidById('input-pin-number');
    const accountBalance = getTextFieldValueById('balance');
    // console.log(addMoney, pinValue);
    if (isNaN(addMoney)) {
        alert('Failed to add money');
        return
    }
     // wrong way to verify. do not try it at your serious website
    if (pinValue === 1234) {
        const newBalance = accountBalance + addMoney;
        document.getElementById('balance').innerText = newBalance;

        const p = document.createElement('p')
        p.innerText = `Added: ${addMoney} Tk. New Balance: ${newBalance}`;
        document.getElementById('transaction-container').appendChild(p)
    } else {
        alert('Failed to add the money.')
    }
})