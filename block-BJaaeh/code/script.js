let degOfBox = 30;
let degOfNumber = -30;
let clockFace = document.querySelector('.face-clock')
for(i=1 ; i <=12 ; i++){
let div = document.createElement('div');
div.classList= "number";
div.style.transform = `translate(-50%) rotate(${degOfBox}deg)`;
let p = document.createElement('p');
p.innerText = `${i}`
p.style.transform = `rotate(${degOfNumber}deg)`
div.append(p);
clockFace.append(div);
degOfBox+=30;
degOfNumber-=30;
}

let secondHand = document.querySelector('.seconde-hand');
let minuteHand = document.querySelector('.minute-hand');
let hourHand = document.querySelector('.hour-hand');
function setDate() {
    const now  = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds /60)*360) ;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`
    const minutes = now.getMinutes();
    const minuteDegrees = ((minutes / 60) * 360) ;
    minuteHand.style.transform = `rotate(${minuteDegrees}deg)`
    const hours  = now.getHours();
    const hourDegrees = ((hours / 12) * 360) ;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`
}
setInterval(setDate , 1000)