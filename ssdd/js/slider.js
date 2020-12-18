


const slider1 = document.getElementById("glider_1");
const slider2 = document.getElementById("glider_2");
const slider3 = document.getElementById("glider_3");
const slider4 = document.getElementById("glide_4");
if (slider1) {
    new Glide(slider1, {
        type: "carousel",
        startAt: 0,
        autoplay: 3000,
        hoverpause: true,
        perView: 1,
        animationDuration: 800,
        animationTimingFunc: "ease-in-out",
    }).mount();
}



if (slider2) {
    new Glide(slider2, {
        type: "carousel",
        startAt: 0,
       
        hoverpause: true,
        perView: 4,
        animationDuration: 800,
        animationTimingFunc: "ease-in-out",
        breakpoints: {
            1200: {
                perView: 3,
            },
            768: {
                perView: 2,
            },
        },
    }).mount();
}

if(slider3) {
    new Glide(slider3,{
        type: "carousel",
        startAt: 0,
       
        hoverpause: true,
        perView: 1,
        animationDuration: 800,
        animationTimingFunc: "ease-in-out",
    }).mount();
}

if(slider4) {
    new Glide(slider4,{
        type: "carousel",
        startAt: 0,
        autoplay: 3000,
        hoverpause: true,
        perView: 3,
        animationDuration: 800,
        animationTimingFunc: "ease-in-out",
        breakpoints: {
            998: {
                perView: 2,
            },
            768: {
                perView: 1,
            },
        },
    }).mount();
}