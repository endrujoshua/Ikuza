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

  function changebg() {
    switch (scrollY){
      case 1000:
        document.body.style.backgroundImage= "url(Images/main4.jpg)"
        break;
        case 2000:
        document.body.style.backgroundImage= "url(Images/main2.jpg)"
        break;
        case 3000:
        document.body.style.backgroundImage= "url(Images/main3.jpg)"
        break;
        default:
          document.body.style.backgroundImage= "url(Images/main1.jpg)"
    }
  };
  window.addEventListener("scroll", changebg , false);