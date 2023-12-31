
// check if local storege color option 
let mainColors = localStorage.getItem("color-option");
if (mainColors !== null) {
    // console.log(mainColors);
    document.documentElement.style.setProperty('--main-text--color', localStorage.getItem("color-option"));
    // Check for active class
   document.querySelectorAll(".colors-list li").forEach(element => {
       element.classList.remove("active");
       // add active class to the element to local storge selected
       if (element.dataset.color === mainColors) {
           element.classList.add("active");
       }

   });
    
}
// background option 

let backgroundOption=true;

// varible to control the interval 
let backgroundInterval ;


// check if there local storge for random background 
let backgroundLocalItem =localStorage.getItem("background_option");

// check if random background local storage not empty
if (backgroundLocalItem !== null){

   
    if(backgroundLocalItem ==='true'){

        backgroundOption=true;

    }else{

        backgroundOption=false;
    }

//    remove active class from all spans(yes // no)
document.querySelectorAll(".random-backgrounds span").forEach(element =>{

element.classList.remove("active")



});

if (backgroundLocalItem==='true'){
    document.querySelector(" .random-backgrounds .yes").classList.add("active");
}else{
    document.querySelector(" .random-backgrounds .no").classList.add("active");
}


}




// Toggle Spin Class On Icon
document.querySelector(".tiggle-setting .setting-icon").onclick = function () {
    // for icon itself
    this.classList.toggle("fa-spin");
    // on Setting area show that area
    document.querySelector(".setting-box").classList.toggle("open");
 
    
};

// Switch Colors
const colorsLi = document.querySelectorAll(".setting-box .option-box .colors-list li");

colorsLi.forEach(li => {
    li.addEventListener("click", (e) => {
        // console.log(e.target.dataset.color);
        //Set Color on root
        document.documentElement.style.setProperty('--main-text--color', e.target.dataset.color);
           // Set color on local storege
        localStorage.setItem("color-option", e.target.dataset.color);
        // remove active class from all
        e.target.parentElement.querySelectorAll(".active").forEach(element => {
            element.classList.remove("active");

        });
        // Add active on selected
        e.target.classList.add("active");
    });
});



// Random Background
const randomBackEl = document.querySelectorAll(".setting-box .option-box .random-backgrounds span");
// loop on all spans
randomBackEl.forEach(span => {
    span.addEventListener("click", (e) => {
      
       
        // remove active class from all
        e.target.parentElement.querySelectorAll(".active").forEach(element => {
            element.classList.remove("active");

        });
        // Add active on selected
        e.target.classList.add("active");

if (e.target.dataset.background ==='yes'){

  backgroundOption=true;
  randomImgs();
  localStorage.setItem("background_option" ,true);


}else{
    backgroundOption=false;
    clearInterval(backgroundInterval);
    localStorage.setItem("background_option" ,false);
 
}




    });

});





// ----------------------------------------------------------------------------------
// change background for landing page 
let landingPage = document.querySelector(".landing-page");

//get all img bg landing

let imgArray = [ "bg_landing_02.jpg",
    "bg_landing_03.jpg", "bg_landing_04.jpg", "bg_landing_05.jpg",
    "bg_landing_06.jpg", "bg_landing_07.jpg" , "bg_landing_08.jpg"];



// function to random imges
function randomImgs(){
    if(backgroundOption===true){
        //Get Random number + change url background img


        backgroundInterval= setInterval(() => {
    let randomNumber = Math.floor(Math.random() * imgArray.length);
    landingPage.style.backgroundImage = 'url("img/' + imgArray[randomNumber] + '")';

}, 1000);
    }
}

randomImgs();




// ----------------------------------------------------------------------------------------------------

// Skills selectors

let ourSkills=document.querySelector(".skills");



window.onscroll=function(){

//  Skills offsite top
let skillsoffsetTop= ourSkills.offsetTop;

// outer Height 
let skillsOuterHeight= ourSkills.offsetHeight;
// window height

let windowHeight=this.innerHeight;

// window scroll Top

let windowScrollTop=this.scrollY;

let allSkills = document.querySelectorAll(".skill-box .skill-progress span");

if(windowScrollTop > (skillsoffsetTop +innerHeight)-skillsOuterHeight ){
    // console.log("");
  
    allSkills.forEach(skill =>{
        skill.style.width=skill.dataset.progress;
     });
 


};


};

// ////////////////////////////////////////////////////////


// Create Pop-up with the Images
let ourGallery =document.querySelectorAll(".gallery .images-box img");
ourGallery.forEach(img =>{
    img.addEventListener("click",(e)=>{

// Create overlay element
let overlay =document.createElement("div");
// Add clss to overlay
overlay.className='popup-overlay';

// Append overlay to body
document.body.appendChild(overlay);

// Creat popup itself box
let popupBox=document.createElement('div');

// add class to the popup box

popupBox.className='popup-box';

if(img.alt !== null){
    //create Heading
    let imgHeading=document.createElement('h3');
    // create text for heading 
    let imgText = document.createTextNode(img.alt);
    // append the text to the heading
    imgHeading.appendChild(imgText);
    // append the text to the popup box
    popupBox.appendChild(imgHeading);

}


// create image 

let popupImage=document.createElement('img');

// set image src

popupImage.src=img.src;

// add image to popup box

popupBox.appendChild(popupImage);

// append popup box to body

document.body.appendChild(popupBox);

// create close span

let closeBtn=document.createElement('span');
// creat close span text
let closeBtnText=document.createTextNode('X');
// append text close to close btn
closeBtn.appendChild(closeBtnText);
// add class to close btn

closeBtn.className='close-btn';

// append close btn to popup box

popupBox.appendChild(closeBtn);









    });
});

// close popup
document.addEventListener('click' , function (e){
if(e.target.className=='close-btn'){
    // remove the current popup
    // e.target.parentElement.remove(); this is right also and there seconde method to remove the popup box
 document.querySelector('.popup-box').remove();

    // remove overlay
    document.querySelector(".popup-overlay").remove();

}
});



// Select All Bullets

const allBullets = document.querySelectorAll(".nav-bullets .bullet");
allBullets.forEach(bullet => {
    bullet.addEventListener("click", (e) => {
        
        document.querySelector(e.target.dataset.section).scrollIntoView({
            behavior: 'smooth'
        });
    });
});