///The JavaScript...
alert('Welcome to our Calculator!');

//Take input number value and show number from HTML..
var num = document.getElementById('button').value;
var blankArea = document.getElementById('showResult');

function insert(num){//Show buttons value into screen...
    blankArea.value=blankArea.value+num;
}

function equal(){//Equalize of numbers to get answer..
    var exp = blankArea.value;

    if(exp){
        blankArea.value = eval(exp);
    }
}

function clean(){//Function for clean the numbers..
    blankArea.value='Asad Anik';
}

function back(){//Clean number for one by one..
    var exp = blankArea.value;
    blankArea .value= exp.substring(0,exp.length-1);
}


