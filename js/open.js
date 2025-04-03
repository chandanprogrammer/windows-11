const windowsImgElement = document.querySelector(".windows-img");

windowsImgElement.addEventListener("click", () => {
  const openWindowsElement = document.getElementById("open-windows");
  console.log("click", openWindowsElement.style.display);
  document.querySelector(".start").style.display = "none";
  if (openWindowsElement.style.display === "") {
    openWindowsElement.style.display = "inline";
  } else if (openWindowsElement.style.display === "none") {
    openWindowsElement.style.display = "inline";
  } else {
    openWindowsElement.style.display = "none";
  }
});
