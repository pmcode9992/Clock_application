function addZero(i) {
    if (i < 10) {i = "0" + i}
    return i;
  }
let time = document.getElementById('Time')

const d = new Date();
let t = d.getTime();
let h = addZero(d.getHours());
let m = addZero(d.getMinutes());
let s = addZero(d.getSeconds());
setInterval(function(){
    const d = new Date();
    let t = d.getTime();
    let h = addZero(d.getHours());
    let m = addZero(d.getMinutes());
    let s = addZero(d.getSeconds());
    time.innerHTML =h + ":" + m + ":" + s}, 1000)