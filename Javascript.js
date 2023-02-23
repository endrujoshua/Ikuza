const images = [
    "Images/main1.jpg","Images/main2.jpg", "Images/main3.jpg", "Images/main4.jpg"
  ];
for(x=0; x++; x<images.length){
    preloadImage(images[i]);
}
function preloadImage(url)
{
    var img=new Image();
    img.src=url;
}

  var i = 0;
  setInterval(function() {
        document.body.style.backgroundImage="url("+images[i]+")";
        i = i + 1;
        if (i == images.length) {
          i =  0;
        }
  }, 4000);

  window.onload = function () {
    console.log('Loaded');
  }