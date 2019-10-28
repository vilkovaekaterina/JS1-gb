//Задание 1
function simpleNumber (num) {
  if( num < 2 ) return false;
  let count = 2;
  while(count < num) {
    if(num % count == 0) {
      return false;
    }
    count++;
  }
  return true;
}

function outPutSimple(number){
  let mass=[];
  let i=0;
  while (i < number) {
    if (simpleNumber(i)){
      mass.push(i);
    }
    ++i;
  }
  document.write('<p>Простые числа \n' + mass+'</p>');
}
outPutSimple(100);

//Задание 2 и 3(не поняла между ними разницу)
var goods = [];

//Пока для рандовных чисел
for (let i=0; i<10; i++){
  goods[i] = parseInt(Math.random()*49000+1000);
}

function sumOfGoods(goods){
  let sum = 0;
  for (let good of goods){
    sum += good;
  }
  document.write('<p>Сумма товаров = '+sum+' рублей</p>');
}
sumOfGoods(goods);

//Задание 4
for ( let i = -1; i < 9; i++, console.log(i)){};

//Задание 5
let x='';
for (let i = 0; i < 20; i++){
  x +='x';
  console.log(x);
}
