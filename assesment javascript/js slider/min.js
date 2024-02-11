const container=document.querySelector(".slider-container");
const slider=document.querySelector(".slider");
const slides=document.querySelectorAll(".slide");
const prevBtn=document.querySelector(".prevBtn");
const nextBtn=document.querySelector(".nextBtn");

let SlideIndex=0;
// console.log(SlideIndex);
slides[SlideIndex].classList.add("active");

// add or call eventListener
prevBtn.addEventListener("click",prevSlide);
nextBtn.addEventListener("click",nextSlide);

// click to  prev
function prevSlide()
{
    slides[SlideIndex].classList.remove("active");
    // console.log(SlideIndex);

    SlideIndex =(SlideIndex ===0) ? slides.length -1 : SlideIndex -1; 
    slides[SlideIndex].classList.add("active");
    slider.style.transform=`translateX(-${SlideIndex *100 }%)`;



}

// click to next 
function nextSlide()
{
    slides[SlideIndex].classList.remove("active");
    
    SlideIndex =(SlideIndex === slides.length -1) ? 0 : SlideIndex +1; 
    slides[SlideIndex].classList.add("active");
    slider.style.transform=`translateX(-${SlideIndex *100 }%)`;
}