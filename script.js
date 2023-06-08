let scrollSection = document.querySelector(".section1")
// console.log(scrollSection.offsetTop - scrollSection.offsetHeight * 1.5);

window.addEventListener("scroll", () => {
    fadeRightAnim(scrollSection, 1.5)
})

function fadeRightAnim(section, coordinate) {
    let fadeRight = section.querySelectorAll(".fade-right")
    fadeRight.forEach(fadeRights => {
        const speed = fadeRights.getAttribute("data-speed")
        fadeRights.style.transition = speed + "ms ease-in-out"
        if (this.scrollY >= (section.offsetTop - section.offsetHeight * coordinate)) {
            fadeRights.classList.add("active")
        } else {
            fadeRights.classList.remove("active")
        }
    });
} 
// console.log(scrollSection.offsetTop - scrollSection.offsetHeight * 1.5);

window.addEventListener("scroll", () => {
    fadeRightAnim1(scrollSection, 1.5)
})

function fadeRightAnim1(section, coordinate) {
    let fadeRight1 = section.querySelectorAll(".fade-left")
    fadeRight1.forEach(fadeRights1 => {
        const speed = fadeRights1.getAttribute("data-speed")
        fadeRights1.style.transition = speed + "ms ease-in-out"
        if (this.scrollY >= (section.offsetTop - section.offsetHeight * coordinate)) {
            fadeRights1.classList.add("active")
        } else {
            fadeRights1.classList.remove("active")
        }
    });
}

let scrollSection1 = document.querySelector(".section2")
window.addEventListener("scroll", () => {
    fadeRightAnim1(scrollSection1, 1.5)
})

function fadeRightAnim1(section, coordinate) {
    let fadeLeft3 = section.querySelectorAll(".fade-left")
    fadeLeft3.forEach(fadeLeft2 => {
        const speed = fadeLeft2.getAttribute("data-speed")
        fadeLeft2.style.transition = speed + "ms ease-in-out"
        if (this.scrollY >= (section.offsetTop - section.offsetHeight * coordinate)) {
            fadeLeft2.classList.add("active")
        } else {
            fadeLeft2.classList.remove("active")
        }
    });
} 
window.addEventListener("scroll", () => {
    fadeRightAnim2(scrollSection1, 1.5)
})

function fadeRightAnim2(section, coordinate) {
    let fadeRight2 = section.querySelectorAll(".fade-right")
    fadeRight2.forEach(fadeRights2 => {
        const speed = fadeRights2.getAttribute("data-speed")
        fadeRights2.style.transition = speed + "ms ease-in-out"
        if (this.scrollY >= (section.offsetTop - section.offsetHeight * coordinate)) {
            fadeRights2.classList.add("active")
        } else {
            fadeRights2.classList.remove("active")
        }
    });
}

let scrollSection2 = document.querySelector(".section3")
window.addEventListener("scroll", () => {
    fadeRightAnim3(scrollSection2, 1.5)
})

function fadeRightAnim3(section, coordinate) {
    let fadeRight3 = section.querySelectorAll(".fade-right")
    fadeRight3.forEach(fadeRights3 => {
        const speed = fadeRights3.getAttribute("data-speed")
        fadeRights3.style.transition = speed + "ms ease-in-out"
        if (this.scrollY >= (section.offsetTop - section.offsetHeight * coordinate)) {
            fadeRights3.classList.add("active")
        } else {
            fadeRights3.classList.remove("active")
        }
    });
}
 
window.addEventListener("scroll", () => {
    fadeRightAnim4(scrollSection2, 1.5)
})

function fadeRightAnim4(section, coordinate) {
    let fadeLeft4 = section.querySelectorAll(".fade-left")
    fadeLeft4.forEach(fadeLefts4 => {
        const speed = fadeLefts4.getAttribute("data-speed")
        fadeLefts4.style.transition = speed + "ms ease-in-out"
        if (this.scrollY >= (section.offsetTop - section.offsetHeight * coordinate)) {
            fadeLefts4.classList.add("active")
        } else {
            fadeLefts4.classList.remove("active")
        }
    });
} 

let scrollSection3 = document.querySelector(".columns__div")
window.addEventListener("scroll", () => {
    fadeRightAnim5(scrollSection3, 1.5)
})

function fadeRightAnim5(section, coordinate) {
    let fadeRight4 = section.querySelectorAll(".fade-right")
    fadeRight4.forEach(fadeRights4 => {
        const speed = fadeRights4.getAttribute("data-speed")
        fadeRights4.style.transition = speed + "ms ease-in-out"
        if (this.scrollY >= (section.offsetTop - section.offsetHeight * coordinate)) {
            fadeRights4.classList.add("active")
        } else {
            fadeRights4.classList.remove("active")
        }
    });
} 

let scrollSection4 = document.querySelector(".columns__div")
window.addEventListener("scroll", () => {
    fadeRightAnim6(scrollSection4, 1.5)
})

function fadeRightAnim6(section, coordinate) {
    let fadeRight5 = section.querySelectorAll(".fade-left")
    fadeRight5.forEach(fadeRights5 => {
        const speed = fadeRights5.getAttribute("data-speed")
        fadeRights5.style.transition = speed + "ms ease-in-out"
        if (this.scrollY >= (section.offsetTop - section.offsetHeight * coordinate)) {
            fadeRights5.classList.add("active")
        } else {
            fadeRights5.classList.remove("active")
        }
    });
} 





let scrollSection5 = document.querySelector(".columns__div1")
window.addEventListener("scroll", () => {
    fadeRightAnim7(scrollSection5, 1.5)
})

function fadeRightAnim7(section, coordinate) {
    let fadeRight6 = section.querySelectorAll(".fade-right")
    fadeRight6.forEach(fadeRights6 => {
        const speed = fadeRights6.getAttribute("data-speed")
        fadeRights6.style.transition = speed + "ms ease-in-out"
        if (this.scrollY >= (section.offsetTop - section.offsetHeight * coordinate)) {
            fadeRights6.classList.add("active")
        } else {
            fadeRights6.classList.remove("active")
        }
    });
} 





let scrollSection6 = document.querySelector(".columns__div1")
window.addEventListener("scroll", () => {
    fadeRightAnim8(scrollSection6, 1.5)
})

function fadeRightAnim8(section, coordinate) {
    let fadeRight7 = section.querySelectorAll(".fade-left")
    fadeRight7.forEach(fadeRights7 => {
        const speed = fadeRights7.getAttribute("data-speed")
        fadeRights7.style.transition = speed + "ms ease-in-out"
        if (this.scrollY >= (section.offsetTop - section.offsetHeight * coordinate)) {
            fadeRights7.classList.add("active")
        } else {
            fadeRights7.classList.remove("active")
        }
    });
} 













 
let timerNum = document.querySelectorAll(".section5__text1")
let timer = document.querySelector(".section5")

// console.log(timer.getBoundingClientRect().top);
// console.log(timer.offsetTop);

// let y = +timerNum[0].dataset.num

function run() {
    for (let i = 0; i < timerNum.length; i++) {
        let count = +timerNum[i].getAttribute("data-num") /* 123 */
        timerNum[i].innerHTML = 0

        function time(k = 0) {
            timerNum[i].innerHTML = k
            k++

            if (k <= count) {
                setTimeout(() => {
                    time(k)
                }, 50);
            }
        }
        time()
    }
}

window.addEventListener("scroll", function timerWait() {
    // console.log(this.scrollY); 1318
    // console.log(timer.offsetTop); 1938
    // console.log(timer.offsetHeight); 350
    if (this.scrollY >= (timer.offsetTop - timer.offsetHeight * 2.5)) {
        // timer.style.background = 'red'
        run()
        this.removeEventListener("scroll", timerWait)
    }
    // fadeRightAnim(timer, 3)
})

// console.log(x);
// console.log(y);
