function moveToCenter(selectedImg) {
    var images = document.querySelectorAll('.carousel-img');
    
    images.forEach(img => {
        img.classList.remove('active');
    });

    selectedImg.classList.add('active');
}