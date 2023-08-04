

// smmoth scoll
var NavMenu = document.querySelectorAll('.header-list a');
for(var i=0;i<NavMenu.length;i++){
    NavMenu[i].addEventListener('click',function(event){
        event.preventDefault();
       var targetSection = this.textContent.trim().toLowerCase();
       var target = document.getElementById(targetSection);
       var Interval = setInterval(function(){
        var targetCoordinates = target.getBoundingClientRect();
        
         if(targetCoordinates.top <= 0){
            clearInterval(Interval);
            return;
         }
         window.scrollBy(0,20);
        },20);
        
    });

}

// skill section

var progressbar = document.querySelectorAll('.display-progress > div');
var skillContainer = document.getElementById('skill-container');
window.addEventListener('scroll' , checkScroll);
var annidone = false;

function initailiseBars(){
    for(var bar of progressbar){
        bar.style.width= 0 + '%';
    }
}
initailiseBars();

function fillBars(){
    for(let bar of progressbar){
       var targetwidth = bar.getAttribute('data-bar-width');
       let currentwidth =0;
       let interval = setInterval(function(){
         if(currentwidth > targetwidth){
            clearInterval(interval);
            return;
         }
         currentwidth++;
         bar.style.width= currentwidth + '%';
       },5)
    }
}
function checkScroll(){
    var Coordinates = skillContainer.getBoundingClientRect();
    if(!annidone && Coordinates.top < window.innerHeight){
        console.log("got it");
        annidone=true;
       fillBars();  
    }
    else if(Coordinates.top > window.innerHeight){
        annidone=false;
        initailiseBars();
    }
}   
