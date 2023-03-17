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

  /* Hide Textbox on toggle */
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

  /* Display textbox on tablet and PC */
  if (window.innerWidth > 600 && collapse_content.style.display === "none"){
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

  /* Display textbox on tablet and PC */
  if (window.innerWidth > 600 && collapse_content.style.display === "block"){
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

