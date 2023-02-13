// Step 1: add click event handler to submit button
document.getElementById('btn-submit').addEventListener('click', function(){
    // Step 2: get the email address of input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // Step 3: get the password of password input field
    // 3.a: set id on the html element
    // 3.b: get the element
    // 3.c: get the value from the element
    const passwordField = document.getElementById('user=password')
    const password = passwordField.value;

    // Danger: Do not verify email password on the client side 
    // step 4: verify email and password
    if(email == 'pola@baap.com' && password == 'secret')
    {
        location.href = 'bank.html'
    }
    else
    {
        alert('Please provide correct info to login')
    }
    
})