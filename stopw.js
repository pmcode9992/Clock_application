let start = document.getElementById('start')
let stop = document.getElementById('stop')
let disp = document.getElementById('time')


start.addEventListener("click", function(){
    let otime = new Date()
    let myint = setInterval(() => {
        let ntime = new Date()
        let d = Date(ntime-otime)
        disp.innerHTML  =new Date((ntime-otime)).toISOString().slice(11, 19);
        console.log(typeof(d))

        stop.addEventListener("click", ()=>{
            clearInterval(myint)
        })
        
        reset.addEventListener("click", ()=>{
            disp.innerHTML = '00:00:00'
        })
    }, 1000);
})


