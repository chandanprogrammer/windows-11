const newTabBgElement = document.querySelector("#new-tab");
const openWindowsElement = document.querySelector("#open-windows");
const windowsImgElement = document.querySelector(".windows-img");
const searchImgElement = document.querySelector(".search-img");
const settingsImgElement = document.querySelector(".settings-img");
const calculatorImgElement = document.querySelector(".calculator-img");

// move hover events
windowsImgElement.addEventListener("mouseenter", () => {
  if (openWindowsElement.style.display != "inline") {
    document.querySelector(".start").style.display = "inline";
  }
});
windowsImgElement.addEventListener("mouseout", () => {
  document.querySelector(".start").style.display = "none";
  document.querySelector("#search-bar-input").value = "";
});
searchImgElement.addEventListener("mouseenter", () => {
  if (openWindowsElement.style.display != "inline") {
    document.querySelector(".search").style.display = "inline";
  }
});
searchImgElement.addEventListener("mouseout", () => {
  document.querySelector(".search").style.display = "none";
});
settingsImgElement.addEventListener("mouseenter", () => {
  if (openWindowsElement.style.display != "inline") {
    document.querySelector(".settings").style.display = "inline";
  }
});
settingsImgElement.addEventListener("mouseout", () => {
  document.querySelector(".settings").style.display = "none";
});
calculatorImgElement.addEventListener("mouseenter", () => {
  if (openWindowsElement.style.display != "inline") {
    document.querySelector(".calculator").style.display = "inline";
  }
});
calculatorImgElement.addEventListener("mouseout", () => {
  document.querySelector(".calculator").style.display = "none";
});

windowsImgElement.addEventListener("click", () => {
  document.querySelector(".start").style.display = "none";
  if (openWindowsElement.style.display === "") {
    openWindowsElement.style.display = "inline";
  } else if (openWindowsElement.style.display === "none") {
    openWindowsElement.style.display = "inline";
  } else {
    openWindowsElement.style.display = "none";
    document.querySelector("#search-bar-input").value = "";
  }
});

newTabBgElement.addEventListener("click", () => {
  if (openWindowsElement.style.display === "inline") {
    openWindowsElement.style.display = "none";
    document.getElementById("search-bar-input").value = "";
  } else {
    openWindowsElement.style.display = "inline";
  }
  console.log("rr");
});
openWindowsElement.addEventListener("click", () => {
  openWindowsElement.style.display = "none";
  
});
