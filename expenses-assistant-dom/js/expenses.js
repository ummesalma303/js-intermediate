document.getElementById('calculate').addEventListener('click', function () {
    let software = getInputFieldById('software');
    let courses = getInputFieldById('courses');
    let internet = getInputFieldById('internet');
    const totalExpenses = software + courses + internet;

    // Total balance
    const income = getInputFieldById('income');
    const balance = income - totalExpenses;

     // income checking
    if (income < balance) {
        alert('you have not enough money')
        return
    } 
    const expenses = results('total-expenses');
    const totalBalance = results('balance');

    expenses.innerText = totalExpenses.toFixed(2);
    totalBalance.innerText = balance.toFixed(2);
    // totalExpenses.innerText = balance;
    
    // remove hidden class after calculation
    const result = results('results')
    result.classList.remove('hidden');

})
// savings
document.getElementById('calculate-savings').addEventListener('click', function () {
    // const savings = getInputFieldById("savings")
    // const totalSavings = totalBalance * savings
    console.log(balance);
    // const savingAmount = results('total-expenses');
    // const remainingBalance= results('savings-amount')
})