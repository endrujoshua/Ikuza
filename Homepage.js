

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
