// change background for landing page 
let landingPage = document.querySelector(".landing-page");

//get all img bg landing

let imgArray = ["bg_landing_1.jpg" , "bg_landing_2.jpg",
    "bg_landing_3.jpg", "bg_landing_4.jpg", "bg_landing_5.jpg",
    "bg_landing_6.jpg", "bg_landing_7.jpg"];

//change url background img


//Get Random number

setInterval(() => {
    let randomNumber = Math.floor(Math.random() * imgArray.length);
    landingPage.style.backgroundImage = 'url("img/' + imgArray[randomNumber] + '")';

},3000);