
document.getElementById('btn-calculate').addEventListener('click', function(){
    const income = inputValueById('income-field');
    const foodExpense = inputValueById('food-field');
    const rentExpense = inputValueById('rent-field');
    const clothesExpense = inputValueById('clothes-field');
    const totalExpense = elementValueById('total-expense');
    const balance = elementValueById('balance');

    const newTotalExpense = foodExpense + rentExpense + clothesExpense;
    setElementValueById('total-expense', newTotalExpense)

    const newBalance = income - newTotalExpense;
    setElementValueById('balance', newBalance)

})