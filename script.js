let watch = document.querySelector('.watch_text')

let play = document.getElementById('play');
let pause = document.getElementById('pause');
let reset = document.getElementById('reset');
let lap = document.getElementById('lap');
let lap_cont = document.querySelector('.laps');

let sec = 0;
let min = 0;
let hrs = 0;
let mili = 0;
let timer = false
let laps = false
let count = 0
let milistr=0
let secstr=0
let minstr=0
let hrstr = 0
clicked = 0

play.addEventListener('click',()=>{
    if(!timer){
        timer = true
        
        startTimer()
    }

})

pause.addEventListener('click',()=>{
    timer = false;
})

lap.addEventListener('click',()=>{
    if(hrstr=='00'&& minstr=='00' && secstr=='00'&& minstr=='00'){
        console.log('not allowed')
    }
    else{

        let lapdiv= document.createElement('div')
        lap_cont.appendChild(lapdiv)
        lapdiv.innerHTML=`
            <span class='flags'>${count+=1} <i class="ri-flag-2-fill"></i></span>
                <span>${hrstr}:${minstr}:${secstr}:${milistr}</span>
            `
    }
})

reset.addEventListener('click',()=>{
    timer = false
    hrstr = '00'
    minstr= '00'
    secstr= '00'
    milistr= '00'
    displaytimer(hrstr,minstr,secstr,milistr)

    while(lap_cont.firstChild){
        lap_cont.removeChild(lap_cont.firstChild)
    }
    
})



function startTimer(){
   
    if(timer){
        mili++
        if(mili==100){
            sec++
            mili = 0;
        }
        if(sec==60){
            sec=0
            min++
        }
        if(min==60){
            min = 0
            hrs++
        }
        milistr = mili
        secstr = sec
        minstr = min
        hrstr = hrs

        if(milistr<10){
            milistr='0'+milistr
        }

        if(secstr<10){
            secstr= '0'+secstr
        }
        if(minstr<10){
            minstr= '0'+minstr
        }
        if(hrstr<10){
            hrstr= '0'+hrstr
        }
        displaytimer(hrstr,minstr,secstr,milistr)
        setTimeout(startTimer,10)

    }
    
}



 function displaytimer(hr,min,sec,mil){
    watch.innerHTML= `${hr}:${min}:${sec}:${mil}`
 }