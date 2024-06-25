
document.getElementById('scrollButton').addEventListener('click', function() {
    window.scrollTo({
        top: document.querySelector('.container').offsetTop,
        behavior: 'smooth'
    });
});





