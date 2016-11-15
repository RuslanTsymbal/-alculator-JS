var field = document.getElementById('display');
var myNum = document.getElementsByClassName('num');
var plus  = document.getElementById('plus');
var minus = document.getElementById('minus');
var divide = document.getElementById('divide');
var multiply  = document.getElementById('multiply');
var value = document.getElementById('value');
var percent = document.getElementById('percent');
var root = document.getElementById('root');
var degree = document.getElementById('degree');
var factorial = document.getElementById('factorial');
var equally = document.getElementById('equally');

field.innerHTML = "0";
var myVal = [];
var myVal2 = [];
var active;
var val;
var val2;

/*------------- equally.onclick -------------*/

equally.onclick = function(){
    if(active == "minus") {
        var myRes = myMinus(val, val2);
        field.innerHTML = myRes;
    } else if(active == "plus") {
        var myRes = myPlus(val, val2);
        field.innerHTML = myRes;
    } else if(active == "divide") {
        var myRes = myDivide(val, val2);
        field.innerHTML = myRes;
    } else  if(active == "multiply") {
        var myRes = myMultiply(val,val2);
        field.innerHTML = myRes;
    } else if (active == "root") {
        var myRes = myRoot(val);
        field.innerHTML = myRes;
    }  else if (active == "factorial") {
        var myRes = myFactorial(val);
        field.innerHTML = myRes;
    } else if (active == "degree") {
        var myRes = myDegree(val, val2);
        field.innerHTML = myRes;
    } else if (active == "percent") {
        var myRes = myPercent(val, val2);
        field.innerHTML = myRes;
    }
};

/*------------function Plus---------------*/

function myPlus(val,  val2){
    var myRes = val + val2;
    return myRes;
};

plus.onclick = function (){
    active = "plus";
    cleanField();
};

/*------------function Minus-------------*/

function myMinus(val, val2){
    var myRes = val2 - val;
    return myRes;
};

minus.onclick = function (){
    active = "minus";
    cleanField();
};

/*------------function Divide--------------*/

function myDivide(val, val2){
    var myRes = val2 / val;
    return myRes;
};

divide.onclick = function (){
    active = "divide";
    cleanField();
};

/*----------- function Multiply---------------*/

function myMultiply(val, val2){
    var myRes = val2 * val;
    return myRes;
};

multiply.onclick = function (){
    active = "multiply";
    cleanField();
};

/*----------- function Value---------------*/

value.onclick = function(){
    active = "value";
    val = "-" + val;
    val = + val;
    myVal.length = 0;
    field.innerHTML = val;
};

/*----------- function Root---------------*/

function myRoot(val){
    var myRes = val * val;
    return myRes;
};

root.onclick = function (){
    active = "root";
    field.innerHTML = val;
};

/*----------- function Degree---------------*/

function myDegree(val, val2){
    if ( val > 0){
        var myRes = 1;
        for (var i = 0; i < val ; i++ ){
            myRes = myRes * val2  ;
        }
        return myRes;
    }
};

degree.onclick = function (){
    active = "degree";
    cleanField();
};

/*----------- function factorial---------------*/

function myFactorial(val){
    var myRes  =  (val != 1) ? val * myFactorial (val - 1) : 1;
    return myRes;
};

factorial.onclick = function (){
    active = "factorial";
    field.innerHTML = "";
};

/*----------- function Percent %  -----------------*/

function myPercent(val, val2){
    var val3 = val / 100;
    var myRes = val3 * val2;
    return myRes;
};

percent.onclick = function (){
    active = "percent";
    cleanField();
};

/*------------------Click---------------------*/

for (var i = 0; i < myNum.length; i++) {
    myNum[i].onclick = onNumClick.bind(null, i + 1);
}

function onNumClick(num) {
    myVal.push(num);

    if(myVal.length >= 10){
        myVal.splice(10);
    }

    var resultClick = myVal.join('',3);
    var result = +resultClick;
    field.innerHTML = result;
    val = result;

}

myNum[9].onclick = function() {
    num = "0";
    myVal.push(num);
    var resultClick = myVal.join('');
    field.innerHTML = resultClick;
    val = 0;
};

myNum[10].onclick = function() {
    myVal.length = 0;
    field.innerHTML = 0;
    active = undefined;
};

/*---------------- clean field -----------------*/

function cleanField(){
    debugger;
    val2 = val;
    myVal2 = myVal;
    val = undefined;
    myVal.length = 0;
    field.innerHTML = "";
};
