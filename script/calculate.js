
document.getElementById('btn-calculate').addEventListener('click', function(){
    const income = inputValueById('income-field');
    const foodExpense = inputValueById('food-field');
    const rentExpense = inputValueById('rent-field');
    const clothesExpense = inputValueById('clothes-field');
    const totalExpense = elementValueById('total-expense');
    const balance = elementValueById('balance');
    const incomeLocation = GetLocation('income-field')

    const newTotalExpense = foodExpense + rentExpense + clothesExpense;
    if(isNaN(newTotalExpense)){
        return window.alert('Please enter numbers')
    }
    else if (newTotalExpense > income){
        return window.alert('Joto boro mukh noy toto boro kotha?')
    }
    setElementValueById('total-expense', newTotalExpense)

    const newBalance = income - newTotalExpense;
    setElementValueById('balance', newBalance)

})