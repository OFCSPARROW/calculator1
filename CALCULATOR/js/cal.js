var firstvalue,secondvalue,change;

function a(input){
  let nmr=document.getElementById("t1");
  nmr.value += input;
}

function add(){
  change=1;
  firstvalue=document.getElementById("t1").value;
  let y=document.getElementById("t1");
  y.value = " ";
}
function sub(){
  change=2;
  firstvalue=document.getElementById("t1").value;
  let y=document.getElementById("t1");
  y.value = " ";
}
function mul(){
  change=3;
  firstvalue=document.getElementById("t1").value;
  let y=document.getElementById("t1");
  y.value = " ";
}
function div(){
  change=4;
  firstvalue=document.getElementById("t1").value;
  let y=document.getElementById("t1");
  y.value = " ";
}

function equal(){
  secondvalue=document.getElementById("t1").value;
  if(change==1){
    let h=Number(firstvalue)+Number(secondvalue);
    let i=document.getElementById("t1");
    i.value= h;
  }
  else if(change==2){
    let h=Number(firstvalue)-Number(secondvalue);
    let i=document.getElementById("t1");
    i.value= h;
  }
  else if(change==3){
    let h=Number(firstvalue)*Number(secondvalue);
    let i=document.getElementById("t1");
    i.value= h;
  }
  else if(change==4){
    let h=Number(firstvalue)/Number(secondvalue);
    let i=document.getElementById("t1");
    i.value= h;
  }
}