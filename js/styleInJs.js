const sections = document.querySelectorAll('section');

for(const section of sections){
    section.style.border = '2px solid steelblue';
    section.style.marginBottom = '5px';
    section.style.borderRadius = '5PX';
    section.style.paddingLeft = '7px';
    section.style.backgroundColor = 'lightgray';
}

// const placesContainer = document.querySelectorAll('#places');
// placesContainer[0].style.backgroundColor = 'yellow';

const placesContainer = document.getElementById('places');
placesContainer.classList.add('center-text');