let serial = 0;
// 1st Card
document.getElementById('first-card').addEventListener('click', function(){
    serial++;
    const productNameText = document.getElementById('first-name');
    const productName = productNameText.innerText;

    const productPriceText = document.getElementById('first-price');
    const productPrice = productPriceText.innerText;

    const productQuantityText = document.getElementById('first-quantity');
    const productQuantity = productQuantityText.innerText;

    const productTotal = productPrice*productQuantity;

    displayData(serial, productName, productPrice, productQuantity, productTotal)
})

// 2nd Card
/*
document.getElementById('second-card').addEventListener('click', function(){
    const productNameText = document.getElementById('second-name');
    const productName = productNameText.innerText;

    const productPriceText = document.getElementById('second-price');
    const productPrice = productPriceText.innerText;

    const productQuantityText = document.getElementById('second-quantity');
    const productQuantity = productQuantityText.innerText;

    const productTotal = productPrice*productQuantity;

    displayData(productName, productPrice, productQuantity, productTotal)
})
*/

// 2nd card using event object from browser
document.getElementById('second-card').addEventListener('click', function(event){
    serial++;
    const productName = event.target.parentNode.parentNode.children[0].innerText;
    const productPrice = event.target.parentNode.parentNode.children[2].children[0].innerText;
    const productQuantity = event.target.parentNode.parentNode.children[3].children[0].innerText;
    const productTotal = productPrice * productQuantity;
    console.log(serial,productName, productPrice, productQuantity, productTotal)
    displayData(serial, productName, productPrice, productQuantity, productTotal)
})
// 3rd card using event object from browser
document.getElementById('third-card').addEventListener('click', function(event){
    serial++;
    const productName = event.target.parentNode.parentNode.children[0].innerText;
    const productPrice = event.target.parentNode.parentNode.children[2].children[0].innerText;
    const productQuantity = event.target.parentNode.parentNode.children[3].children[0].innerText;
    const productTotal = productPrice * productQuantity;
    console.log(serial,productName, productPrice, productQuantity, productTotal)
    displayData(serial, productName, productPrice, productQuantity, productTotal)
})
// 4th card using event object from browser
document.getElementById('fourth-card').addEventListener('click', function(event){
    serial++;
    const productName = event.target.parentNode.parentNode.children[0].innerText;
    const productPrice = event.target.parentNode.parentNode.children[2].children[0].innerText;
    const productQuantity = event.target.parentNode.parentNode.children[3].children[0].innerText;
    const productTotal = productPrice * productQuantity;
    console.log(serial,productName, productPrice, productQuantity, productTotal)
    displayData(serial, productName, productPrice, productQuantity, productTotal)
})
// 5th card using event object from browser
document.getElementById('fifth-card').addEventListener('click', function(){
    const productName = document.getElementById('fifth-name').innerText;
    const productPrice = document.getElementById('price-input').value;
    const productQuantity = document.getElementById('quantity-input').value;
    if(productPrice == '' || productQuantity == '')
    {
        alert("Please input a valid number")
    }
    else
    {
        serial++;
        const productTotal = productPrice * productQuantity;
        console.log(serial,productName, productPrice, productQuantity, productTotal)
        displayData(serial, productName, productPrice, productQuantity, productTotal)
    }
    
})





function displayData(serial,productName, productPrice, productQuantity, productTotal)
{
    const container = document.getElementById('table-container');

    const tr = document.createElement("tr");
    tr.innerHTML=`
        <td>${serial}</td>
        <td>${productName}</td>
        <td>${productPrice}</td>
        <td>${productQuantity}</td>
        <td>${productTotal}</td>
    `;
    container.appendChild(tr)
}