const slides = document.querySelectorAll(".slides img");
let slideindex =0;
let intervalid = null;

document.addEventListener("DOMContentLoaded" , inicializeslider);

function inicializeslider(){

  if(slides.length >0){
  slides[slideindex].classList.add("displayslide");
  intervalid = setInterval(nextsslide,2000);
}

};

function showslide(index){

  if(index >= slides.length){
    slideindex = 0;
  }
  else if ( index <0){
    slideindex = slides.length -1;
  }
  slides.forEach(slide =>{
    slide.classList.remove("displayslide")
  });
  slides[slideindex].classList.add("displayslide");


};

function prevslide(){
  clearInterval(intervalid);
  slideindex--;
  showslide(slideindex);
};

function nextsslide(){
slideindex++;
showslide(slideindex);
};