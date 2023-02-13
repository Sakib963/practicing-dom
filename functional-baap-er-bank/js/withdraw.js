document.getElementById('withdraw-button').addEventListener('click', function(){
    // const withdrawInputElement = document.getElementById('withdraw-amount-input-field');
    // const withdrawText = withdrawInputElement.value;
    // const newWithdrawAmount = parseFloat(withdrawText);

    const newWithdrawAmount = getInputValue('withdraw-amount-input-field');

    if(isNaN(newWithdrawAmount))
    {
        alert('Please Enter a valid amount')
        return;
    }

    // const withdrawTextElement = document.getElementById('withdraw-amount-text-field');
    // const previousWithdrawText = withdrawTextElement.innerText;
    // const previousWithdrawAmount = parseFloat(previousWithdrawText);

    const previousWithdrawAmount = getTextValue('withdraw-amount-text-field');

    // const balanceElement = document.getElementById('balance-amount-text-field');
    // const balanceText = balanceElement.innerText;
    // const balanceAmount = parseFloat(balanceText);

    const balanceAmount = getTextValue('balance-amount-text-field');

    if(newWithdrawAmount > balanceAmount)
    {
        alert('You cant withdraw more than your current balance')
        return;
    }

    const newBalance = balanceAmount - newWithdrawAmount;
    const totalWithdraw = newWithdrawAmount + previousWithdrawAmount;

    // withdrawTextElement.innerText = totalWithdraw;
    // balanceElement.innerText = newBalance;
    setText('withdraw-amount-text-field', totalWithdraw);
    setText('balance-amount-text-field', newBalance);
})