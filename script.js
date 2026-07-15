const display = document.getElementById("display");

function append(value){
    display.value += value;
}

function clearDisplay(){
    display.value = "";
}

function deleteLast(){
    display.value = display.value.slice(0,-1);
}

function calculate(){
    try{
        display.value = eval(display.value);
    }catch{
        display.value = "Error";
    }
}

function sqrt(){
    display.value = Math.sqrt(eval(display.value));
}

function square(){
    display.value = Math.pow(eval(display.value),2);
}

function cube(){
    display.value = Math.pow(eval(display.value),3);
}

function power(){
    display.value += "**";
}

function sin(){
    display.value = Math.sin(eval(display.value)*Math.PI/180).toFixed(8);
}

function cos(){
    display.value = Math.cos(eval(display.value)*Math.PI/180).toFixed(8);
}

function tan(){
    display.value = Math.tan(eval(display.value)*Math.PI/180).toFixed(8);
}

function log(){
    display.value = Math.log10(eval(display.value)).toFixed(8);
}

function ln(){
    display.value = Math.log(eval(display.value)).toFixed(8);
}

function pi(){
    display.value += Math.PI;
}

function eValue(){
    display.value += Math.E;
}
