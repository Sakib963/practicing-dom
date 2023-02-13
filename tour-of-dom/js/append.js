// 1. Where to add
const placesList = document.getElementById('places-list');

// 2. What to be added
const li = document.createElement('li');
li.innerText = 'Shalbon';

// 3. add the child
placesList.appendChild(li)


// 1. where to add
const mainContainer = document.getElementById('main-container');


// 2. What to be added
const section = document.createElement('section')
const h1 = document.createElement('h1')
h1.innerText = 'New Header'
const p = document.createElement('p')
p.innerText = 'This is a paragraph text area.'

// 3. Add the child 
section.appendChild(h1)
section.appendChild(p)
mainContainer.appendChild(section)


// Set innerHTML directly
const sectionDress = document.createElement('section')
sectionDress.innerHTML = `
<h1>Dresses I like</h1>
<ul>
    <li>Lungi</li>
    <li>Chera genji</li>
    <li>fata pant</li>
    <li>tshirt</li>
</ul>
`

mainContainer.appendChild(sectionDress)