
// Automatic Menu Toggle 

const selectElement = function (element) {
    return document.querySelector(element);
};

let menuToggler = selectElement('.menu-toggle');
let body = selectElement('body');

menuToggler.addEventListener('click', function () {
    body.classList.toggle('open');
});

//Automatic Image Slider
const slideitem = document.querySelectorAll('.slideitem'),
         dot = document.querySelectorAll('.dot');

         let counter = 1;
         slidefun(counter);

         let timer = setInterval (autoslide, 8000);
         function autoslide(){
             counter += 1;
             slidefun(counter);
         }

         function plusSlides(n){
             counter += n;
             slidefun(counter);
             resetTimer();
         }

         function currentSlide(n){
             counter = n;
             slidefun(counter);
             resetTimer();
         }

         function resetTimer() {
             clearInterval(timer);
             timer = setInterval(autoslide, 8000);
         }

         function slidefun(n) {
             let i;
             for(i = 0;i<slideitem.length; i++){
                slideitem[i].style.display = "none";
             }
             for(i = 0;i<dot.length; i++){
                dot[i].classList.remove = ('activate');
             }
             if(n > slideitem.length){
                 counter = 1;
             }
             if( n < 1){
                 counter = slideitem.length;
             }
             slideitem[counter - 1].style.display = "block";
             dot[counter - 1].classList.add('activate');
         }
