function moveToCenter(selectedImg) {
    var images = document.querySelectorAll('.carousel-img');
    
    images.forEach(img => {
        img.classList.remove('active');
    });

    selectedImg.classList.add('active');
}

const myContainer = document.querySelector('.myContainer');
const openBtn = document.querySelector('.open');

openBtn.addEventListener('click', () => {
 if(myContainer.classList.contains('show-nav')) { 
    myContainer.classList.remove('show-nav');
}
 else myContainer.classList.add('show-nav');
});
