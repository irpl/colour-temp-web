var temp = 0;
console.log("testing");
setInterval(() => {
  getTemp();
  colourTemp();
}, 500);
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
    .then((data) => {
      temp = parseFloat(data.temp).toFixed(2);
      // console.log(data.temp);
    });
}

function colourTemp() {
  // var reds = [
  //   "#ff4000", //7
  //   "#ff2b00", // 6
  //   "#ff1500", // 5
  //   "#ff0000", // 4
  //   "#ff0015", // 3
  //   "#ff002b", // 2
  //   "#ff0040", // 1
  // ];
  // var reds = [
  //   "#ff8000", //8
  //   "#ff6b00", //7
  //   "#ff5500", //6
  //   "#ff4000", //5
  //   "#ff2b00", //4
  //   "#ff1500", //3
  //   "#ff0000", //2
  //   "#ff0000", //1
  // ];
  var reds = [
    "#ffc000", //1
    "#ffab00", //2
    "#ff9500", //3
    "#ff8000", //4
    "#ff6b00", //5
    "#ff5500", //6
    "#ff4000", //7
    "#ff4000", //8
    "#ff4000", //9
    "#ff4000", //10
  ];
  var pIndex = Math.round(parseFloat(temp / 10));
  // console.log(pIndex);
  // document.querySelector("body").style.background = `linear-gradient(-45deg, ${reds[pIndex]}, rgb(121,9,57) ${temp}%, #89cff0)`;
  document.querySelector("body").style.background = `linear-gradient(-45deg, #ff4000, rgb(121,9,57) ${temp}%, #89cff0)`;
  document.querySelector(".temp-val").innerHTML = `${temp}&#176;C`;
}
