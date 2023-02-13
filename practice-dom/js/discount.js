document.getElementById('apply-btn').addEventListener('click', function(){
    const couponInputField = document.getElementById('coupon-input-field');
    const coupon = couponInputField.value;

    if(coupon === 'DIS30')
    {
        const priceAmount = parseFloat(document.getElementById('price-text').innerText);
        const discount = priceAmount * 0.3;
        const total = priceAmount - discount;
        const totalPriceField = document.getElementById('total-price');
        totalPriceField.innerText = total;
    }
    else
    {
        alert('Please Enter a Valid Coupon');
        return;
    }
})