//Task 1

var number ={};

function getNumberDitails(n) {
    if (n>=0 && n<=999) {
      var x = n%10;
      var y = n%100;
      number.sot =(n-y)/100;
      number.des = (y - x)/10;
      number.ed = x;
    }else {
      alert('Это число не из диапазона')
    }
    return number;
}

var n = prompt ('Введите число от 0 до 999',0);
console.log(getNumberDitails(n));
document.write('Ваше число = '+n+'\nОтвет выведен в консоль');


//Task 3
var qs1= {
  task: 'Сколько ног у кота?\n',
  a: '2\n',
  b: '8\n',
  c: '4\n',
  d: '0\n',
  price: 1000,
  correct: 'c'
}

var qs2= {
  task: 'Год основания Санкт-Петербурга?\n',
  a: '988\n',
  b: '1703\n',
  c: '1999\n',
  d: "его не существует\n",
  price: 5000,
  correct: 'b'
}

var qs3= {
  task: 'Какой вес у слона?\n',
  a: '7000\n',
  b: '1000\n',
  c: '5400\n',
  d: '100000\n',
  price: 10000,
  correct: 'c'
}

var qs4= {
  task: 'Почему в Париже девки ходят рыжие?\n',
  a: "Потому что им так нравится\n",
  b: "Потому что это модно\n",
  c: "Потому что родители заставили\n",
  d: "По асфальту\n",
  price: 20000,
  correct: 'd'
}

var qs5= {
  task: 'Вы готовы выиграть эту игру?\n',
  a: 'ДА\n',
  b: "Нет\n",
  c: "Подумаю\n",
  d: "Вызывайте такси, я уезжаю\n",
  price: 100000,
  correct: 'a'
}


function youLose(sum){
  alert ('Вы проиграли\nВыш выигрыш составил '+sum+'рублей');
}

var questions = [qs1,qs2,qs3,qs4,qs5];
var sum = 0;
var a = prompt('Start game\n 1- Yes,\n0-No');
if (a == 1){
  var answ= prompt(qs1.task + 'a) '+qs1.a+'b) '+qs1.b+'c) '+ qs1.c + 'd) '+ qs1.d + 'Вопрос на '+ qs1.price+ "рублей");
  if (answ == qs1.correct){
      sum += qs1.price;
      answ= prompt(qs2.task + 'a)'+qs2.a+'b)'+qs2.b+'c)'+ qs2.c + 'd)'+ qs2.d + 'Вопрос на '+ qs2.price+ "рублей");
      if (answ == qs2.correct){
          sum += qs2.price;
          answ= prompt(qs3.task + 'a)'+qs3.a+'b)'+qs3.b+'c)'+ qs3.c + 'd)'+ qs3.d + 'Вопрос на '+ qs3.price+ "рублей");
          if (answ == qs3.correct){
              sum += qs3.price;
              answ= prompt(qs4.task + 'a)'+qs4.a+'b)'+qs4.b+'c)'+ qs4.c + 'd)'+ qs4.d + 'Вопрос на '+ qs4.price+ "рублей");
              if (answ == qs4.correct){
                  sum += qs4.price;
                  answ= prompt(qs5.task + 'a)'+qs5.a+'b)'+qs5.b+'c)'+ qs5.c + 'd)'+ qs5.d + 'Вопрос на '+ qs5.price+ "рублей");
                  if (answ == qs5.correct){
                      sum += qs5.price;
                      alert ('Вы победили\nВыш выигрыш составил '+sum+'рублей');
                  }else {
                    youLose(sum);
                  }
              }else {
                youLose(sum);
              }
          }else {
            youLose(sum);
          }
      }else {
        youLose(sum);
      }
  }else {
    youLose(sum);
  }
}
