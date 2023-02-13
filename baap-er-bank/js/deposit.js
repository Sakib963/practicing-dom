document.getElementById('btn-deposit').addEventListener('click', function(){

    const depositField = document.getElementById('deposit-field');
    const newDepositAmount = depositField.value;

    const depositTotalElement = document.getElementById('deposit-amount');
    const previousDepositTotal = depositTotalElement.innerText

    const totalDeposit = parseFloat(newDepositAmount) + parseFloat(previousDepositTotal);
    depositTotalElement.innerText = totalDeposit


    const balanceTotalElement = document.getElementById('balance-field');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    const currentBalanceTotal = previousBalanceTotal + parseFloat(newDepositAmount);

    balanceTotalElement.innerText = currentBalanceTotal;

    depositField.value = ''
})