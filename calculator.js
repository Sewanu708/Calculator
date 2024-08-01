let calculation = localStorage.getItem('result');
document.querySelector('h3').innerHTML = eval(calculation)

calculation = calculation? localStorage.getIem('result') : null;
function cal_display(value){
    calculation += value;
    localStorage.setItem('result',calculation);
    console.log(value)     
}

function typing(){
    document.querySelector('h3').innerHTML = calculation
}

function output(){
    if (calculation == null) {
       document.querySelector('h3').innerHTML = undefined;
    } else {
         document.querySelector('h3').innerHTML = eval(calculation);
    };
}