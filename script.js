const display=document.getElementById('text');
function appandnumber(input){
    display.value+=input;
}
function cleardisplay(){
    display.value="";
}
function calculate(){
  try{
    display.value=eval(display.value)
  }
  catch(error){
    display.value="ERROR"
  }
}