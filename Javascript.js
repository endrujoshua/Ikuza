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
function myFunction() {
  if(this.scrollY <2000){
  document.body.style.backgroundImage = this.scrollY > 1000
     ? "url(Images/main2.jpg)"
     : "url(Images/main1.jpg)";
  }
  else{
    document.body.style.backgroundImage = this.scrollY > 3000
     ? "url(Images/main4.jpg)"
     : "url(Images/main3.jpg)";
  }
var meter = document.getElementsByClassName("meter");
var i = 0;
  if(this.scrollY<1000){
    i= Math.floor(this.scrollY/1000);
        for(let x=0;x<meter.length;x++){
            if(i== x){
              meter[x].style.backgroundColor= "rgba(247, 164, 164, 1 )";
            }
            else{
              meter[x].style.backgroundColor= "rgba(247, 164, 164, 0.25 )";
            }
        }
  }
  else if (1000<this.scrollY<2000){
    i= Math.floor(this.scrollY/1000);
    for(let x=0;x<meter.length;x++){
      if(i== x){
        meter[x].style.backgroundColor= "rgba(247, 164, 164, 1 )";
      }
      else{
        meter[x].style.backgroundColor= "rgba(247, 164, 164, 0.25 )";
      }
  }
}
   else if(2000<this.scrollY<3000){
    i= Math.floor(this.scrollY/1000);
    for(let x=0;x<meter.length;x++){
      if(i== x){
        meter[x].style.backgroundColor= "rgba(247, 164, 164, 1 )";
      }
      else{
        meter[x].style.backgroundColor= "rgba(247, 164, 164, 0.25 )";
      }
  }
   }
    else{

      i= Math.floor(this.scrollY/1000);
      for(let x=0;x<meter.length;x++){
        if(i== x){
          meter[x].style.backgroundColor= "rgba(247, 164, 164, 1 )";
        }
        else{
          meter[x].style.backgroundColor= "rgba(247, 164, 164, 0.25 )";
        }
    } 

  }
};

window.addEventListener("scroll", myFunction , false);