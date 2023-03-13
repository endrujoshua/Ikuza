/* Navbar */
/* Collapse Button */
function collapse_btn(){
  var collapse_content = document.getElementById("collapse-container-nav-secondary");
  var dropdown_content = document.getElementById("dropdown-content-nav-secondary");
  var dropdown_content_btn1 = document.getElementById("p1-dropdown-content-sosmed-nav");
  var dropdown_content_btn2 = document.getElementById("p2-dropdown-content-sosmed-nav");
  var dropdown_content_btn3 = document.getElementById("p3-dropdown-content-sosmed-nav");
  if (collapse_content.style.display === "none"){
    collapse_content.style.display = "block";
  } else {
    collapse_content.style.display = "none";
    dropdown_content.style.display = "none";
    dropdown_content_btn1.style.display = "none";
    dropdown_content_btn2.style.display = "none";
    dropdown_content_btn3.style.display = "none";
  }

  /* Hide Textbox on toggle */
  if (window.innerWidth < 600 && collapse_content.style.display === "block"){
    var title_textbox = document.getElementById("title-textbox");
    var description_textbox = document.getElementById("description-textbox");

    title_textbox.style.display = "none";
    description_textbox.style.display = "none";
  } 
  if (window.innerWidth < 600 && collapse_content.style.display === "none"){
    var title_textbox = document.getElementById("title-textbox");
    var description_textbox = document.getElementById("description-textbox");

    title_textbox.style.display = "block";
    description_textbox.style.display = "block";
  }
}

/* Dropdown Button */
function dropdown_btn(){
  var collapse_content = document.getElementById("collapse-container-nav-secondary");
  var dropdown_content = document.getElementById("dropdown-content-nav-secondary");
  var dropdown_content_btn1 = document.getElementById("p1-dropdown-content-sosmed-nav");
  var dropdown_content_btn2 = document.getElementById("p2-dropdown-content-sosmed-nav");
  var dropdown_content_btn3 = document.getElementById("p3-dropdown-content-sosmed-nav");
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
  var collapse_content = document.getElementById("collapse-container-nav-secondary");
  var dropdown_content = document.getElementById("dropdown-content-nav-secondary");
  var dropdown_content_btn1 = document.getElementById("p1-dropdown-content-sosmed-nav");
  var dropdown_content_btn2 = document.getElementById("p2-dropdown-content-sosmed-nav");
  var dropdown_content_btn3 = document.getElementById("p3-dropdown-content-sosmed-nav");
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
  var collapse_content = document.getElementById("collapse-container-nav-secondary");
  var dropdown_content = document.getElementById("dropdown-content-nav-secondary");
  var dropdown_content_btn1 = document.getElementById("p1-dropdown-content-sosmed-nav");
  var dropdown_content_btn2 = document.getElementById("p2-dropdown-content-sosmed-nav");
  var dropdown_content_btn3 = document.getElementById("p3-dropdown-content-sosmed-nav");
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
  var collapse_content = document.getElementById("collapse-container-nav-secondary");
  var dropdown_content = document.getElementById("dropdown-content-nav-secondary");
  var dropdown_content_btn1 = document.getElementById("p1-dropdown-content-sosmed-nav");
  var dropdown_content_btn2 = document.getElementById("p2-dropdown-content-sosmed-nav");
  var dropdown_content_btn3 = document.getElementById("p3-dropdown-content-sosmed-nav");
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
function ChangeBackground() {
  var body = document.body;
  var currentPosition = window.pageYOffset;
  var maxHeight = screen.availHeight;
  console.log(maxHeight);
  if (currentPosition < maxHeight) {
    body.style.backgroundImage = "url('Images/main1.jpg')";
  } else if (currentPosition >= maxHeight && currentPosition <= maxHeight*2) {
    body.style.backgroundImage = "url('Images/main2.jpg')";
  } else if (currentPosition >= maxHeight*2 && currentPosition <= maxHeight*3) {
    body.style.backgroundImage = "url('Images/main3.jpg')";
  }
  else{
    body.style.backgroundImage = "url('Images/main4.jpg')"
  }

};

window.addEventListener("scroll", ChangeBackground , false);