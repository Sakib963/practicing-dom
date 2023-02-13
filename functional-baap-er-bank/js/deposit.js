document.getElementById('deposit-button').addEventListener('click', function(){
    // const depositInputElement = document.getElementById('deposit-amount-input-field');
    // const depositInputText = depositInputElement.value;
    // const newDepositAmount = parseFloat(depositInputText);

    const newDepositAmount = getInputValue('deposit-amount-input-field')

    if(isNaN(newDepositAmount))
    {
        alert('Please enter a valid amount to deposit');
        return;
    }

    // const depositTextElement = document.getElementById('deposit-amount-text-field');
    // const depositText = depositTextElement.innerText;
    // const previousDepositAmount = parseFloat(depositText);

    const previousDepositAmount = getTextValue('deposit-amount-text-field');

    const totalDeposit = newDepositAmount + previousDepositAmount;

    // depositTextElement.innerText = totalDeposit;
    setText('deposit-amount-text-field', totalDeposit);

    // const balanceTextElement = document.getElementById('balance-amount-text-field');
    // const balanceText = balanceTextElement.innerText;
    // const previousBalanceAmount = parseFloat(balanceText);

    const previousBalanceAmount = getTextValue('balance-amount-text-field');

    const newBalanceAmount = previousBalanceAmount + newDepositAmount;

    // balanceTextElement.innerText = newBalanceAmount;
    setText('balance-amount-text-field', newBalanceAmount)
})