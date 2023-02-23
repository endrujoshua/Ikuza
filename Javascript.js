const cats = [
    "Images/main1.jpg","Images/main2.jpg", "Images/main3.jpg", "Images/main4.jpg"
  ]
  
  const node = document.getElementsbyId("content");
  
  var i = 0;
  setInterval(function() {
        imageHead.style.backgroundImage = "url(" + images[i] + ")";
        i = i + 1;
        if (i == images.length) {
          i =  0;
        }
  }, 1000);s