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


  var scroll = 0;
  var conponent = document.body.style.backgroundImage;
  var windowHeight = window.innerHeight;
  window.onscroll = myFunction();

function myFunction() {
  window.alert("start");
};