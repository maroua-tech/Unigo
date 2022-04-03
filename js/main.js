let toggleMenu = document.querySelector(".toggle-menu");
let navBar = document.querySelector('nav');
let arrow = document.querySelector(".toggle-menu::after");
let links = document.querySelectorAll("nav ul li a");
let buttons = document.querySelectorAll("nav button");
let log = document.querySelector(".signin");
let reg = document.querySelector(".signup");
let Patient = Array.from(document.querySelectorAll(".testimonials .container .slider .patients .patient"));
let right = document.querySelector("i.right");
let left = document.querySelector("i.left");
let rightPatient = Array.from(document.querySelectorAll(".testimonials .container .slider .patients .patient.right"));
let leftPatient = Array.from(document.querySelectorAll(".testimonials .container .slider .patients .patient.left"));
// toggle menu
toggleMenu.addEventListener('click', () => {
    toggleMenu.classList.toggle("active");
    navBar.classList.toggle("open");
});
// go to sign_in_up page
// buttons.forEach((el) => {
//     el.addEventListener('click', (e) => {
//         console.log(e.currentTarget)
//         if (e.currentTarget.classList.contains('register')) {
//             reg.classList.add("active");
//         } else {
//            log.classList.add("active"); 
//         }
//     })
// })




// change active class
function handleActive(el) {
    el.forEach((link) => {
        link.addEventListener('click', (e) => {
            el.forEach((link) => {
                link.classList.remove('active');
            });
            e.currentTarget.classList.add("active");
        });
    });
}
handleActive(links);
handleActive(buttons);
// change patient testimonial

let currentslide = 1;

let slideCount;
if (window.matchMedia("(max-width:767px)").matches) {
    slideCount = Patient.length;
} else {
   slideCount = rightPatient.length
}


right.addEventListener('click', () => {
    console.log("maroua");
    rightSlide();
});

left.addEventListener('click', () => {
    leftSlide();
});


checker();

function leftSlide() {
    if (left.classList.contains('disabled')) { 
        
    } else {
        currentslide--;
        console.log(currentslide);
        checker();
    }
}

function rightSlide() {
    if (right.classList.contains('disabled')) { 
        
    } else {
        currentslide++;
        console.log(currentslide);
        checker(); 
    }
}
function checker() {
    removeActive();
    if (window.matchMedia("(max-width:767px)").matches) {
        Patient[currentslide - 1].classList.add("active");

    if (currentslide == 1) {
    left.classList.add('disabled');
    } else {
        left.classList.remove('disabled');
    
    }
    if (currentslide == slideCount) {
       right.classList.add('disabled');
    } else {
       right.classList.remove('disabled');
    
    }
    } else {
        rightPatient[currentslide - 1].classList.add("active");
        leftPatient[currentslide - 1].classList.add("active");
    
    
    if (currentslide == 1) {
        left.classList.add('disabled');
    } else {
        left.classList.remove('disabled');
    
    }
    if (currentslide == slideCount) {
       right.classList.add('disabled');
    } else {
       right.classList.remove('disabled');
    
    }
    }
    
    }

function removeActive() {
    Patient.forEach((el) => {
        el.classList.remove("active");
      }) 
    rightPatient.forEach((el) => {
        el.classList.remove("active");
      }) 
    leftPatient.forEach((el) => {
        el.classList.remove("active");
      }) 
}