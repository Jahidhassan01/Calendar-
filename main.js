const monthNameEl = document.getElementById("month-name");
const dayNameEl = document.getElementById("day-name");
const dayNumberEl = document.getElementById("day-number");
const yearEl = document.getElementById("year");
const timeEl = document.getElementById("time");


const date = new Date();

monthNameEl.innerHTML = date.toLocaleString("en",{
        month:"long"
});

dayNameEl.innerHTML = date.toLocaleString("en",{
        weekday:"long"
});

dayNumberEl.innerText = date.getDate();

yearEl.innerText = date.getFullYear();


const hour = document.getElementById("time-hour");
const minute = document.getElementById("time-minute");
const second = document.getElementById("time-second");
const session = document.getElementById("time-am-pm");

function updateClock (){
        hour.innerText = date.getHours();
        minute.innerText = date.getMinutes();
        second.innerText = date.getUTCSeconds();
        session.innerText = "AM";
        
        if(hour > 12){
                session.innerText = "PM";
                hour = hour - 12 ;
        }
        else{
                session.innerText = "AM";
        }
        setTimeout(()=>{
                updateClock ()
        },1000)     
        

}
updateClock();





