/* Homepage Navbar */
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

  /* Hide Textbox on toggle P1 */
  if (window.innerWidth < 600 && collapse_content.style.display === "block"){
    var title_textbox_p1 = document.getElementById("title-textbox-p1");
    var title_textbox_p2 = document.getElementById("title-textbox-p2");
    var title_textbox_p3 = document.getElementById("title-textbox-p3");
    var title_textbox_p4 = document.getElementById("title-textbox-p4");
    var description_textbox_p1 = document.getElementById("description-textbox-p1");
    var description_textbox_p2 = document.getElementById("description-textbox-p2");
    var description_textbox_p3 = document.getElementById("description-textbox-p3");
    var description_textbox_p4 = document.getElementById("description-textbox-p4");

    title_textbox_p1.style.display = "none";
    title_textbox_p2.style.display = "none";
    title_textbox_p3.style.display = "none";
    title_textbox_p4.style.display = "none";
    description_textbox_p1.style.display = "none";
    description_textbox_p2.style.display = "none";
    description_textbox_p3.style.display = "none";
    description_textbox_p4.style.display = "none";
  } 
  /* Unhide Textbox on toggle */
  if (window.innerWidth < 600 && collapse_content.style.display === "none"){
    var title_textbox_p1 = document.getElementById("title-textbox-p1");
    var title_textbox_p2 = document.getElementById("title-textbox-p2");
    var title_textbox_p3 = document.getElementById("title-textbox-p3");
    var title_textbox_p4 = document.getElementById("title-textbox-p4");
    var description_textbox_p1 = document.getElementById("description-textbox-p1");
    var description_textbox_p2 = document.getElementById("description-textbox-p2");
    var description_textbox_p3 = document.getElementById("description-textbox-p3");
    var description_textbox_p4 = document.getElementById("description-textbox-p4");

    title_textbox_p1.style.display = "block";
    title_textbox_p2.style.display = "block";
    title_textbox_p3.style.display = "block";
    title_textbox_p4.style.display = "block";
    description_textbox_p1.style.display = "block";
    description_textbox_p2.style.display = "block";
    description_textbox_p3.style.display = "block";
    description_textbox_p4.style.display = "block";
  }

}

/* Dropdown Button */
function dropdown_btn(){
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
  
  let i =0;
  var body = document.body;
  var currentPosition = window.pageYOffset;
  var maxHeight = screen.availHeight;
  var meter = document.getElementsByClassName("meter");
  console.log(maxHeight);
  if (currentPosition < maxHeight*0.75) {
    body.style.backgroundImage = "url('Images/main1.jpg')";
    i = 0;
  } else if (currentPosition >= maxHeight*0.75 && currentPosition <= maxHeight*1.5) {
    body.style.backgroundImage = "url('Images/main2.jpg')";
    i=1;
  } else if (currentPosition >= maxHeight*1.5 && currentPosition <= maxHeight*2.25) {
    body.style.backgroundImage = "url('Images/main3.jpg')";
    i=2;
  }
  else{
    body.style.backgroundImage = "url('Images/main4.jpg')"
    i=3;
  }
  for(let x = 0; x <meter.length; x++){
    if(x==i){
      meter[x].style.backgroundColor = "rgba(247, 164, 164, 1)"
    }
    else{
      meter[x].style.backgroundColor = "rgba(247, 164, 164, 0.25)"
    }
  }
};
window.addEventListener("scroll", ChangeBackground , false);
