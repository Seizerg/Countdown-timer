function timer(){ 
    const time= new Date("1 Jan 2050")
    const currentTime = new Date()
    const timeLeft= (time-currentTime)/1000;
    const days= Math.floor(timeLeft/(60*60*24));
    const hours= Math.floor((timeLeft%(60*60*24))/3600);
    const mins= Math.floor(((timeLeft%(60*24*60))%3600)/60);
    const seconds= Math.floor(((timeLeft%(60*24*60))%3600)%60);
   
    
    console.log(seconds, mins, days, hours);
    document.getElementById("days").innerHTML=days;
document.getElementById("hours").innerHTML=timeFormat(hours);
document.getElementById("mins").innerHTML=timeFormat(mins);
document.getElementById("seconds").innerHTML=timeFormat(seconds);
}
timer();
setInterval(timer,1000);
function timeFormat(time){
    return time<10 ? `0${time}`: time;
}