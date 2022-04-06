var appear = {
    opacity: 0,
    delay: 2000,
    duration: 2000,
};

var fastAppear = {
    opacity: 0,
    delay: 300,
    duration: 500,
};

var slideLeft = {
    distance: '10%',
    origin: 'left',
    opacity: 0,
    delay: 1500,
    duration: 2000,
};

var slideFastLeft = {
    distance: '1%',
    origin: 'left',
    opacity: 0,
    delay: 300,
    duration: 500,
};

var slideFastRight = {
    distance: '1%',
    origin: 'right',
    opacity: 0,
    delay: 300,
    duration: 500,
};

var slideUp = {
    distance: '20%',
    origin: 'top',
    opacity: 0,
    delay: 1000,
    duration: 2000,
};

var interval = {
    distance: '20%',
    origin: 'left',
    opacity: 0,
    delay: 300,
    duration: 500,
    interval: 300,
};

var interval2 = {
    distance: '20%',
    origin: 'left',
    opacity: 0,
    delay: 300,
    duration: 500,
    interval: 300,
};




ScrollReveal().reveal('.appear', appear);
ScrollReveal().reveal('.interval', interval);
ScrollReveal().reveal('.interval2', interval2);
ScrollReveal().reveal('.fastAppear', fastAppear);
ScrollReveal().reveal('.social-icon1', {opacity: 0, distance: "40%", origin: 'right', delay: 1000, duration: 2000});
ScrollReveal().reveal('.social-icon2', {opacity: 0, distance: "40%", origin: 'right', delay: 1500, duration: 2000});
ScrollReveal().reveal('.social-icon3', {opacity: 0, distance: "40%", origin: 'right', delay: 2000, duration: 2000});
ScrollReveal().reveal('.banner-title', slideLeft);
ScrollReveal().reveal('.fast-slideLeft', slideFastLeft);
ScrollReveal().reveal('.fast-slideRight', slideFastRight);
ScrollReveal().reveal('.navbar', slideUp);