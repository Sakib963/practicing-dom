console.log('This is separate js file')

// <!-- option 1 -->
// <button onclick="document.body.style.backgroundColor = 'yellow'">Make yellow</button>


// Option 2: add onclick function
// <button onclick="makeRed()">Make Red</button>
function makeRed(){
    document.body.style.backgroundColor = 'red';
}

// option 3
const blueButton = document.getElementById('make-blue');
blueButton.onclick = makeBlue

function makeBlue(){
    document.body.style.backgroundColor = 'blue';
}

// option 3b
const purpleButton = document.getElementById('make-purple');
purpleButton.onclick = function makePurple(){
    document.body.style.backgroundColor = 'purple';
}

// option 4
const pinkButton = document.getElementById('make-pink');
pinkButton.addEventListener('click', makePink)

function makePink(){
    document.body.style.backgroundColor = 'pink';
}

// option 4 b
const greenButton = document.getElementById('make-green');
greenButton.addEventListener('click', function(){
    document.body.style.backgroundColor = 'green'
})

// option 4 final
document.getElementById('make-goldenrod').addEventListener('click',function(){
    document.body.style.backgroundColor = 'goldenrod'
})