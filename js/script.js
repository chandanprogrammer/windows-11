const timeElement = document.getElementById("time");
const dateElement = document.getElementById("date");

// move hover events
const startImgElement = document.querySelector(".windows-img");
const searchImgElement = document.querySelector(".search-img");
const settingsImgElement = document.querySelector(".settings-img");
const calculatorImgElement = document.querySelector(".calculator-img");

startImgElement.addEventListener("mouseenter", () => {
  document.querySelector(".start").style.display = "inline";
});
startImgElement.addEventListener("mouseout", () => {
  document.querySelector(".start").style.display = "none";
});
searchImgElement.addEventListener("mouseenter", () => {
  document.querySelector(".search").style.display = "inline";
});
searchImgElement.addEventListener("mouseout", () => {
  document.querySelector(".search").style.display = "none";
});
settingsImgElement.addEventListener("mouseenter", () => {
  document.querySelector(".settings").style.display = "inline";
});
settingsImgElement.addEventListener("mouseout", () => {
  document.querySelector(".settings").style.display = "none";
});
calculatorImgElement.addEventListener("mouseenter", () => {
  document.querySelector(".calculator").style.display = "inline";
});
calculatorImgElement.addEventListener("mouseout", () => {
  document.querySelector(".calculator").style.display = "none";
});

// time and date display
function dateTimeUpdate() {
  const now = new Date();
  let hours = now.getHours() % 12 || 12;
  hours = hours < 10 ? `0${hours}` : `${hours}`;
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const ampm = now.getHours() < 12 ? "AM" : "PM";
  timeElement.textContent = `${hours}:${minutes} ${ampm}`;

  const currentDate = now.toLocaleDateString();
  dateElement.innerText = `${currentDate}`;
}

// battery percentage level update
function batteryLevelUpdate() {
  const batteryLevelElement = document.getElementById("battery-level");
  let imageName = "";
  if (navigator.getBattery) {
    navigator
      .getBattery()
      .then(function (battery) {
        let batteryLevel = Math.floor(battery.level * 100);
        if (batteryLevel >= 80) imageName = "full-battery.png";
        if (batteryLevel < 80 && batteryLevel >= 50)
          imageName = "half-battery.png";
        if (batteryLevel < 50 && batteryLevel >= 20)
          imageName = "low-battery.png";
        if (batteryLevel < 20) imageName = "low-battery-red.png";
        batteryLevelElement.innerHTML = `
        <p class="hover-battery">Battery status: ${batteryLevel}% remaining</p>
        <div class="battery-img">
        <img src="./images/${imageName}" alt="" />
        <span>${batteryLevel}%</span>
        </div>
        `;

        // battery hover text logic
        const batteryImgElement = document.querySelector(".battery-img");
        batteryImgElement.addEventListener("mouseenter", () => {
          document.querySelector(".hover-battery").style.display = "inline";
        });
        batteryImgElement.addEventListener("mouseout", () => {
          document.querySelector(".hover-battery").style.display = "none";
        });
      })
      .catch(function (e) {
        console.error(e);
      });
  } else {
    console.log("battery API is not working");
  }
}

setInterval(dateTimeUpdate, 1000);
setInterval(batteryLevelUpdate, 60 * 1000);

dateTimeUpdate();
batteryLevelUpdate();
