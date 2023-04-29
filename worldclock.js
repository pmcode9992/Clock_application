function addZero(i) {
    if (i < 10) {i = "0" + i}
    return i;
  }
let countries = {'India':000, 'NewYork':-930, 'Canada':-0930, 'Australia' :430, 'Warwick' :-430 , 'Russia' :-230}

for ( i in countries){
    let time = document.getElementById(`${i}`)
    let hoffset = parseInt(countries[i]/100);
    let toffset = parseInt(countries[i]%100);
    console.log(i + ' : ' + parseInt(countries[i]))
    setInterval(function(){
        const d = new Date();
        let h = ((addZero(d.getHours()) + hoffset) + 24)%24;
        let m = ((addZero(d.getMinutes()) + toffset)+60)%60;
        let s = addZero(d.getSeconds());
        time.innerHTML =h + ":" + m + ":" + s}, 1000)   
}