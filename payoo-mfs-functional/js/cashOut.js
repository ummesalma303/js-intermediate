document.getElementById('btn-cash-out').addEventListener('click', function (event) {
    event.preventDefault();
    const cashOutInput = getInputFieldValidById('cash-out-money')
    const cashOutPin = getInputFieldValidById('cash-out-pin-number')
    const cashOutBalance = getTextFieldValueById('balance');
    if (isNaN(cashOutInput)) {
        alert('Failed to cash out');
        return
    }
    if (cashOutPin === 1234) {
        document.getElementById('balance').innerText = newBalance;
        const newBalance = cashOutBalance - cashOutInput;
        if (cashOutInput > balance) {
            alert('You do not have enough money to cash out');
            return
        }
        const div = document.createElement('div');
        div.classList.add('bg-yellow-300')
        div.innerHTML = `
        <h4 class="text-2xl font-bold">Cash Out</h4>
        <p>${cashOutInput} withdraw. New Balance ${newBalance}</p>`
        document.getElementById('transaction-container').appendChild(div)
    } else {
        alert('No money for you.... DGM.')
    }
})