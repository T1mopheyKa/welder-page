$('.container__slider').slick({
    infinite: true,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 3,
});

$('.partner-slider').slick({
    infinite: true,
    dots: true,
    slidesToShow: 8,
    slidesToScroll: 5,
    autoplay: true,
    autoplaySpeed: 800,
    centerMode: true,
    variableWidth: true
});

function onEntry(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('element-show');
        }
    });
}

let options = {
    threshold: [0.3]
};
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation');

for (let elm of elements) {
    observer.observe(elm);
}