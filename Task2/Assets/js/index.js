function checkAll() {
    let inputs = document.querySelectorAll('.box');
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].checked = true;
    }
}
function reverse(){
    let inputs=document.querySelectorAll('.box');
    for(let i=0; i< inputs.length; i++){
    if(inputs[i].checked==true){
        inputs[i].checked=false;
    }
    else{
        inputs[i].checked=true;
    }
   }
}
