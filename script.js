function toggleNav() {
  /* classList returns the list of classes attached to certain element. here, I grabbed the list of all the classes 
  and applies toggle method on them. toggle takes a token as a parameter and checks if it is in the list. if it is, then removes it and if not 
  then insert it into the list. this is how we can turn something on and off by toggling a special class into it using toggle method
  
  this expandedNavBar class just declares the position of navbar into grid-template but showing navbar is done in next step*/
  const grabOuterGrid = document.querySelector(".outer-grid");
  grabOuterGrid.classList.toggle("expandedNavBar");

  // this is showing navbar
  const navElementGrabber = document.querySelector("nav");
  navElementGrabber.classList.toggle("hideNav");
}
