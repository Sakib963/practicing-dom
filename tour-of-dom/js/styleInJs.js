const sections = document.querySelectorAll('section');
// console.log(sections)
for(const section of sections)
{
    section.style.border = '2px solid steelblue'
    section.style.padding = '10px'
    section.style.margin = '20px'
    section.style.borderRadius = '5px'
    section.style.backgroundColor = '#aed0f2'
}

const places = document.getElementById('places-container');
places.style.alignItems = 'center'
places.style.color = '#f2aed8'
places.style.borderRadius = '5px'
places.style.backgroundColor = '#baaef2'

const placeTitle = document.getElementById('place-title')
placeTitle.style.color = '#f2aed8'

// const li = document.createElement('li');
// const li2 = document.createElement('li');
// li.innerText = 'Brand new places to visit'
// li2.innerText = 'Another dynamic li'

// // console.log(li)


// const placesUL = document.querySelector('#places-container ul');
// // console.log(placesUL)

// placesUL.appendChild(li);
// placesUL.appendChild(li2);