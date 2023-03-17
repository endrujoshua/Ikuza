/* Gallery Navbar */
/* Collapse Button */
function collapse_btn_gallery(){
    var collapse_content = document.getElementById("collapse-container-nav-secondary");
    var dropdown_content = document.getElementById("dropdown-content-nav-secondary-gallery");
    var dropdown_content_btn1 = document.getElementById("p1-dropdown-content-sosmed-nav-gallery");
    var dropdown_content_btn2 = document.getElementById("p2-dropdown-content-sosmed-nav-gallery");
    var dropdown_content_btn3 = document.getElementById("p3-dropdown-content-sosmed-nav-gallery");
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
function dropdown_btn_gallery(){
    var dropdown_content = document.getElementById("dropdown-content-nav-secondary-gallery");
    var dropdown_content_btn1 = document.getElementById("p1-dropdown-content-sosmed-nav-gallery");
    var dropdown_content_btn2 = document.getElementById("p2-dropdown-content-sosmed-nav-gallery");
    var dropdown_content_btn3 = document.getElementById("p3-dropdown-content-sosmed-nav-gallery");
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
function sosmed1_btn_gallery(){
    var dropdown_content = document.getElementById("dropdown-content-nav-secondary-gallery");
    var dropdown_content_btn1 = document.getElementById("p1-dropdown-content-sosmed-nav-gallery");
    var dropdown_content_btn2 = document.getElementById("p2-dropdown-content-sosmed-nav-gallery");
    var dropdown_content_btn3 = document.getElementById("p3-dropdown-content-sosmed-nav-gallery");
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
function sosmed2_btn_gallery(){
    var dropdown_content = document.getElementById("dropdown-content-nav-secondary-gallery");
    var dropdown_content_btn1 = document.getElementById("p1-dropdown-content-sosmed-nav-gallery");
    var dropdown_content_btn2 = document.getElementById("p2-dropdown-content-sosmed-nav-gallery");
    var dropdown_content_btn3 = document.getElementById("p3-dropdown-content-sosmed-nav-gallery");
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
function sosmed3_btn_gallery(){
    var dropdown_content = document.getElementById("dropdown-content-nav-secondary-gallery");
    var dropdown_content_btn1 = document.getElementById("p1-dropdown-content-sosmed-nav-gallery");
    var dropdown_content_btn2 = document.getElementById("p2-dropdown-content-sosmed-nav-gallery");
    var dropdown_content_btn3 = document.getElementById("p3-dropdown-content-sosmed-nav-gallery");
    if (dropdown_content_btn3.style.display === "none"){
      dropdown_content.style.display = "none";
      dropdown_content_btn1.style.display = "none";
      dropdown_content_btn2.style.display = "none";
      dropdown_content_btn3.style.display = "block";
    } else {
      dropdown_content_btn3.style.display = "none";
    }
}