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

function myFunction() {
  if(this.scrollY <2000){
  document.body.style.backgroundImage = this.scrollY > 1000
     ? "url(Images/main1.jpg)"
     : "url(Images/main2.jpg)";
  }
  else{
    document.body.style.backgroundImage = this.scrollY > 3000
     ? "url(Images/main3.jpg)"
     : "url(Images/main4.jpg)";
  }
};

window.addEventListener("scroll", myFunction , false);