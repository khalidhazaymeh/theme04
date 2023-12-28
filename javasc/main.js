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






// ----------------------------------------------------------------------------------
// change background for landing page 
let landingPage = document.querySelector(".landing-page");

//get all img bg landing

let imgArray = [ "bg_landing_02.jpg",
    "bg_landing_03.jpg", "bg_landing_04.jpg", "bg_landing_05.jpg",
    "bg_landing_06.jpg", "bg_landing_07.jpg" , "bg_landing_08.jpg"];

//change url background img


//Get Random number

setInterval(() => {
    let randomNumber = Math.floor(Math.random() * imgArray.length);
    landingPage.style.backgroundImage = 'url("img/' + imgArray[randomNumber] + '")';

}, 3000);

// ----------------------------------------------------------------------------------------------------

