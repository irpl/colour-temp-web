var temp = 0;
console.log("testing");
setInterval(getTemp, 1000);
// document.addEventListener("keydown", logKey);

// function logKey(e) {
//   console.log(e.keyCode);
//   if (e.keyCode == 37) {
//     temp -= 10;
//   }
//   if (e.keyCode == 39) {
//     temp += 10;
//   }
//   colourTemp();
// }

function getTemp() {
  fetch("https://colour-temp-web.vercel.app/api/temp")
    .then((response) => response.json())
    .then((data) => (temp = data.temp));
}

function colourTemp() {
  var reds = [
    "#ffffff", // 13
    "#ffebeb", // 12
    "#ffd8d8", // 11
    "#ffc4c4", // 10
    "#ffb1b1", // 9
    "#ff9d9d", // 8
    "#ff8989", // 7
    "#ff7676", // 6
    "#ff6262", // 5
    "#ff4e4e", // 4
    "#ff3b3b", // 3
    "#ff2727", // 2
    "#ff1414", // 1
  ];
  // var cols = ["#ee7752, #e73c7e, #23a6d5, #23d5ab", "#ee0052, #e73c00, #00a6d5, #2005ab"];
  document.querySelector("body").style.background = `linear-gradient(-45deg, ${parseInt(reds[temp / 10])} ${temp}%, #23d5ab)`;
}
