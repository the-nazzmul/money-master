document.getElementById('btn-save').addEventListener('click', function(){
    const savingPercent = inputValueById('saving-field') / 100;
    const income = inputValueById('income-field');
    const newSavingAmount = income * savingPercent;
    setElementValueById('saving-amount', newSavingAmount)
    const balance = elementValueById('balance');
    const newRemainingBalance = balance - newSavingAmount;
    setElementValueById('remaining-balance', newRemainingBalance);
})