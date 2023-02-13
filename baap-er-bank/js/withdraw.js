document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw-fields');
    const newWithdrawAmount = parseFloat(withdrawField.value);

    if(isNaN(newWithdrawAmount)){
        alert('Please provide a valid number');
        return;
    }
    
    const previousWithdrawElement = document.getElementById('withdraw-total');
    const previousWithdrawAmount = parseFloat(previousWithdrawElement.innerText);

    const totalWithdraw = newWithdrawAmount + previousWithdrawAmount;
    

    const balanceTotalElement = document.getElementById('balance-field');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    if(newWithdrawAmount > previousBalanceTotal)
    {
        alert('baap er bank e eto taka nai')
    }
    else
    {
        const currentBalanceTotal = previousBalanceTotal - newWithdrawAmount;
        balanceTotalElement.innerText = currentBalanceTotal;
        previousWithdrawElement.innerText = totalWithdraw;
    }

    

    withdrawField.value = ''
})