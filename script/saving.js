document.getElementById('btn-save').addEventListener('click', function(){
    const savingPercent = inputValueById('saving-field') / 100;
    const income = inputValueById('income-field');
    const newSavingAmount = income * savingPercent;
    const balance = elementValueById('balance');
    if (isNaN(newSavingAmount)){
        return window.alert('Please enter a number')
    }
    if(newSavingAmount > balance){
        return window.alert('FOKINNI!!!')
    }
    setElementValueById('saving-amount', newSavingAmount)
    const newRemainingBalance = balance - newSavingAmount;
    setElementValueById('remaining-balance', newRemainingBalance);
})