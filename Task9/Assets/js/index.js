function validate(){
    var date = new Date();
    document.getElementById("year").innerHTML=date.getFullYear();
    document.getElementById("month").innerHTML=date.getMonth()+1;
    document.getElementById("date").innerHTML=date.getDate();
    document.getElementById("hour").innerHTML=date.getHours();
    document.getElementById("minute").innerHTML=date.getMinutes();
    document.getElementById("seconds").innerHTML=date.getSeconds();
    document.getElementById("milisec").innerHTML=date.getMilliseconds();
    document.getElementById("dateAndtime").innerHTML=date.getDate()+"-"+(date.getMonth()+1)+"-"+date.getFullYear()+" "+date.toLocaleTimeString();
    document.getElementById("utc").innerHTML=date.toUTCString();
    document.getElementById("utcmillisec").innerHTML=date.getTime();
}
function resetAll(){
    document.getElementById("year").innerHTML='';
    document.getElementById("month").innerHTML='';
    document.getElementById("date").innerHTML='';
    document.getElementById("hour").innerHTML='';
    document.getElementById("minute").innerHTML='';
    document.getElementById("seconds").innerHTML='';
    document.getElementById("milisec").innerHTML='';
    document.getElementById("dateAndtime").innerHTML='';
    document.getElementById("utc").innerHTML='';
    document.getElementById("utcmillisec").innerHTML='';
}