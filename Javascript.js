function changeBackground() {
    var bg = ["main1.jpg", "main2.jpg", "main3.jpg", "main4.jpg"];
    var randombg = bg[Math.floor(Math.random() * bg.length)];
    document.body.background = "Images/"+randombg;}