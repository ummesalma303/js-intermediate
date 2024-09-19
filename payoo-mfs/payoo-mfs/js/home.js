document.getElementById('btn-add-money')
    .addEventListener('click', function (event) {
    event.preventDefault()
    const addMoneyInput = document.getElementById('input-add-money').value;
    const balanceNumber = parseFloat(addMoneyInput)
    const pinNumberInput = document.getElementById('input-pin-number').value;
    const accountBalance = document.getElementById('account-balance').innerText;
    const balanceAccount = parseFloat(accountBalance)

    if (pinNumberInput.length === 4) {
        const newBalance = balanceNumber + balanceAccount;
        document.getElementById('account-balance').innerText = newBalance
    } else {
        alert('Failed to add money! Please try again.')
    }
})