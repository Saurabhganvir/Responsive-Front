const scroll = new LocomotiveScroll({
    el: document.getElementById("main"),
    smooth: true
});

var elemContainer = document.querySelector(".elem-container")
var fixedImg = document.getElementById("fixed-img");
console.log(elemContainer)
elemContainer.addEventListener("mouseenter", ()=>{
    // alert("hehehehehehe");
    // fixedImg.style.backgroundImage = `url(${image1})`;
    fixedImg.style.display = "block";
})

var elems = document.querySelectorAll(".elem");
elems.forEach((e)=>{
    e.addEventListener("mouseenter", ()=>{
        var image = e.getAttribute("data-image");
        fixedImg.style.backgroundImage = `url(${image})`;
    })
})

// var ids = document.querySelectorAll('.elem');
// console.log(ids)

console.log('hello')

var elem1 = document.getElementById("elem1");
var elem2 = document.getElementById("elem2");
var elem3 = document.getElementById("elem3");
var elem4 = document.getElementById("elem4");
var elem5 = document.querySelector("#elem5");
var elem6 = document.querySelector("#elem6");
var elem7 = document.querySelector("#elem7");
// var image1 = elem1.getAttribute("data-image");
// console.log(image1)


elemContainer.addEventListener("mouseleave", ()=>{
    fixedImg.style.display = "none";
})

// elem1.addEventListener("mouseeneter",()=>{
//     // fixedImg.style.display= "block";
//     fixedImg.style.backgroundImage = `url(${elem1.getAttribute("data-image")})`;
// })
// // elem1.addEventListener("mouseleave", ()=>{
// //     fixedImg.style.display = "none";
// // })

// elem2.addEventListener("mouseenter", ()=>{
//     fixedImg.style.backgroundImage = `url(${elem2.getAttribute("data-image")})`;
// })

// elem3.addEventListener("mouseenter", ()=>{
//     fixedImg.style.backgroundImage = `url(${elem3.getAttribute("data-image")})`;
// })

// elem4.addEventListener("mouseenter", ()=>{
//     fixedImg.style.backgroundImage = `url(${elem4.getAttribute("data-image")})`;
// })

// elem5.addEventListener("mouseenter", ()=>{
//     fixedImg.style.backgroundImage = `url(${elem6.getAttribute("data-image")})`;
// })

// elem6.addEventListener("mouseenter", ()=>{
//     fixedImg.style.backgroundImage = `url(${elem6.getAttribute("data-image")})`;
// })

// elem7.addEventListener("mouseenter", ()=>{
//     fixedImg.style.backgroundImage = `url(${elem7.getAttribute("data-image")})`;
// })

