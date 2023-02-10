window.addEventListener('load', () => {
    new Glider(document.querySelector('.glider'), {
        slidesToShow: 1,
        dots: '.glider-dots'
    });
    new Glider(document.querySelector('.glider2'), {
        slidesToShow: 1,
        dots: '.glider-dots2'
    });
    new Glider(document.querySelector('.glider3'), {
        slidesToShow: 1,
        dots: '.glider-dots3'
    });
});