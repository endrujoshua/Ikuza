/* Navbar */
/* Collapse Button */
var collapse_content = document.getElementById("collapse-container-nav-secondary");
var dropdown_content = document.getElementById("dropdown-content-nav-secondary");
var dropdown_content_btn1 = document.getElementById("p1-dropdown-content-sosmed-nav");
var dropdown_content_btn2 = document.getElementById("p2-dropdown-content-sosmed-nav");
var dropdown_content_btn3 = document.getElementById("p3-dropdown-content-sosmed-nav");
function collapse_btn(){
  if (collapse_content.style.display === "none"){
    collapse_content.style.display = "block";
  } else {
    collapse_content.style.display = "none";
    dropdown_content.style.display = "none";
    dropdown_content_btn1.style.display = "none";
    dropdown_content_btn2.style.display = "none";
    dropdown_content_btn3.style.display = "none";
  }
}

/* Dropdown Button */
function dropdown_btn(){
  if (dropdown_content.style.display === "none"){
    dropdown_content.style.display = "block";
    dropdown_content_btn1.style.display = "none";
    dropdown_content_btn2.style.display = "none";
    dropdown_content_btn3.style.display = "none";
  } else {
    dropdown_content.style.display = "none";
  }
}

/* Sosmed Button 1 */
function sosmed1_btn(){
  if (dropdown_content_btn1.style.display === "none"){
    dropdown_content.style.display = "none";
    dropdown_content_btn1.style.display = "block";
    dropdown_content_btn2.style.display = "none";
    dropdown_content_btn3.style.display = "none";
  } else {
    dropdown_content_btn1.style.display = "none";
  }
}

/* Sosmed Button 2 */
function sosmed2_btn(){
  if (dropdown_content_btn2.style.display === "none"){
    dropdown_content.style.display = "none";
    dropdown_content_btn1.style.display = "none";
    dropdown_content_btn2.style.display = "block";
    dropdown_content_btn3.style.display = "none";
  } else {
    dropdown_content_btn2.style.display = "none";
  }
}

/* Sosmed Button 3 */
function sosmed3_btn(){
  if (dropdown_content_btn3.style.display === "none"){
    dropdown_content.style.display = "none";
    dropdown_content_btn1.style.display = "none";
    dropdown_content_btn2.style.display = "none";
    dropdown_content_btn3.style.display = "block";
  } else {
    dropdown_content_btn3.style.display = "none";
  }
}
/* Navbar End */

const images = [
    "Images/main1.jpg","Images/main2.jpg", "Images/main3.jpg", "Images/main4.jpg"
  ];

  var i = 0;
  /*setInterval(function() {
        document.body.style.backgroundImage="url("+images[i]+")";
        i = i + 1;
        if (i == images.length) {
          i =  0;
        }
  }, 4000);*/
  var Y = document.documentElement.clientHeight 
function myFunction() {
  const scrollPosition = this.scrollY;
const body = document.body;

const backgroundImage = scrollPosition < 2000
  ? (scrollPosition > 1000 ? "url(Images/main2.jpg)" : "url(Images/main1.jpg)")
  : (scrollPosition > 3000 ? "url(Images/main4.jpg)" : "url(Images/main3.jpg)");

body.style.backgroundImage = backgroundImage;
var meter = document.getElementsByClassName("meter");
var i = 0;
if (this.scrollY < 4000) {
  const i = Math.floor(this.scrollY / 1000);
  for (let x = 0; x < meter.length; x++) {
    meter[x].style.backgroundColor = i === x ? "rgba(247, 164, 164, 1 )" : "rgba(247, 164, 164, 0.25 )";
  }
} else {
  const i = Math.floor(this.scrollY / 1000);
  for (let x = 0; x < meter.length; x++) {
    meter[x].style.backgroundColor = i === x ? "rgba(247, 164, 164, 1 )" : "rgba(247, 164, 164, 0.25 )";
  }
}
};

window.addEventListener("scroll", myFunction , false);