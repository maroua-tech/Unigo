let toggleMenu = document.querySelector(".toggle-menu");
let navBar = document.querySelector('nav');
let arrow = document.querySelector(".toggle-menu::after");
let links = document.querySelectorAll("nav ul li a");
let buttons = document.querySelectorAll("nav button");
let Patient = Array.from(document.querySelectorAll(".testimonials .container .slider .patients .patient"));
let right = document.querySelector("i.right");
let left = document.querySelector("i.left");
let rightPatient = Array.from(document.querySelectorAll(".testimonials .container .slider .patients .patient.right"));
let leftPatient = Array.from(document.querySelectorAll(".testimonials .container .slider .patients .patient.left"));
let overlay = document.querySelector(".overlay");
let popup = document.querySelector(".popup");
let close = document.querySelector(".close");
let toggle = document.querySelectorAll(".toggle-container .toggle > div");
let togglehover = document.querySelectorAll(".toggle-container .toggle > div:hover,.toggle-container .toggle > div.active");
let compte = document.querySelectorAll(".compte");
let log = document.querySelector(".log");
let reg = document.querySelector(".reg");
let image = document.querySelector(".image");
let toggleContainer = document.querySelector(".toggle-container");
let login = document.querySelector(".login");
let register = document.querySelector(".register");



// go to login onclick
login.addEventListener("click", (e) => { 
    toggleContainer.classList.remove('active');
    log.classList.add('active');
    reg.classList.remove('active');
    image.classList.remove("right");
            compte.forEach(el => {
                el.classList.remove("active");
                if (el.classList.contains('signin')) {
                    el.classList.add("active");
                } else {
                    el.classList.remove("active");
                    
                }
        })
});
// go to register onclick
register.addEventListener("click", (e) => { 
    toggleContainer.classList.add('active');
    reg.classList.add('active');
    log.classList.remove('active');
            image.classList.add("right");
            compte.forEach(el => {
                el.classList.remove("active");
                if (el.classList.contains('signup')) {
                    el.classList.add("active");
                } else {
                    el.classList.remove("active");
                    
                }
        })
});

// toggle between login and register in popup
toggle.forEach(el => {
    el.addEventListener("click", (e) => {
        toggle.forEach(el => {
            el.classList.remove("active");
        })
        
        if (e.currentTarget.classList.contains('log')) {
            e.currentTarget.classList.add("active");
            toggleContainer.classList.remove('active');
            image.classList.remove("right");
            compte.forEach(el => {
                el.classList.remove("active");
                if (el.classList.contains('signin')) {
                    el.classList.add("active");
                } else {
                    el.classList.remove("active");
                    
                }
        })
        } else {
            e.currentTarget.classList.add("active");
            toggleContainer.classList.add('active');
            image.classList.add("right");
            compte.forEach(el => {
                el.classList.remove("active");
                if (el.classList.contains('signup')) {
                    el.classList.add("active");
                } else {
                    el.classList.remove("active");
                    
                }
        })
        }
        
        
        
    })
})
// toggle menu
toggleMenu.addEventListener('click', () => {
    toggleMenu.classList.toggle("active");
    navBar.classList.toggle("open");
});
// go to sign_in_up page
buttons.forEach((el) => {
    el.addEventListener('click', (e) => {
        console.log(e.currentTarget);
        e.preventDefault();
        close.style.display = "block";
        overlay.style.display = "block";
        popup.style.display = "flex";
    })
    
})
close.addEventListener('click', (e) => {
    e.currentTarget.style.display = "none";
    overlay.style.display = "none";
    popup.style.display = "none";
    log.classList.remove('active');
    reg.classList.remove('active');
})




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