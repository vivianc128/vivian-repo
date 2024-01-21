const myImage = document.querySelector("img");

// Click on image of Vivian to change it to an image of a squirrel 
myImage.onclick = () => { 
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/squirrel.jpeg") {
    myImage.setAttribute("src", "images/squirrel.jpeg");
  } else {
    myImage.setAttribute("src", "images/squirrel.jpeg");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
  }

  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Welcome to Vivian Chong's website, ${storedName}`;
  }

  myButton.onclick = () => {
    setUserName();
  };