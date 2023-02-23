const cats = [
    "Images/main1","Images/main2", "Images/main3", "Images/main4"
  ]
  
  const node = document.getElementsByTagName("BODY");
  
  const cycleImages = (images, container, step) => {
      images.forEach((image, index) => (
      setTimeout(() => {
          container.style.backgroundImage = `url(${image})`  
      }, step * (index + 1))
    ))
    setTimeout(() => cycleImages(images, container, step), step * images.length)
  }
  
  cycleImages(cats, node, 1000)