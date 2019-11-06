//task 3
var a=-9,b=2;
if (a>=0 && b>=0){
    let x=a-b;
    alert('a,b положительные, их разность ='+ x);
}else if (a<0 && b<0){
    let x= a*b;
    alert('a,b отрицательные, произвеение= '+ x);
}else {
    let x=a+b;
    alert ('a,b разных знаков, сумма= ' + x);
}

//task 4
a=parseInt(Math.random()*15);
console.log('a='+a);
switch (a-1) {
    case -1:
        console.log(++a);
    case 0:
        console.log(++a);
    case 1:
        console.log(++a);
    case 2:
        console.log(++a);
    case 3:
        console.log(++a);
    case 4:
        console.log(++a);
    case 5:
        console.log(++a);
    case 6:
        console.log(++a);
    case 7:
        console.log(++a);
    case 8:
        console.log(++a);
    case 9:
        console.log(++a);
    case 10:
        console.log(++a);
    case 11:
        console.log(++a);
    case 12:
        console.log(++a);
    case 13:
        console.log(++a);
}

//task5
function sum(a,b) {
    let p= +a + +b;
    return p;
}

function ras(a,b) {
    let p=a-b;
    return p;
}

function umnozhenie(a,b) {
    let p=a*b;
    return p;
}

function del(a,b) {
    if (b!== 0){
        let p=a/b;
        return p;
    } else{
        alert('Ошибка! Второй элемент не должен быть равен 0')
    }
}

//task 6
var x=prompt('Первое значение', '0');
var y= prompt('Второе значение','0');
var f = prompt('Выберите опрецию \n сумма, \n разность, \n умножение,\n деление');
function mathOperation(arg1, arg2, oper){
    switch (oper) {
        case 'сумма':{
            return sum(arg1,arg2);
            break;
        };
        case 'разность' :{
            return ras(arg1,arg2);
            break;
        };
        case 'умножение':{
            return umnozhenie(arg1,arg2);
            break;
        };
        case 'деление':{
            return del(arg1,arg2);
            break;
        };
    }
}
alert(mathOperation(x,y,f));