var blackFigs1 = [ '&#9820;','&#9822;','&#9821;','&#9819;','&#9818;','&#9821;','&#9822;','&#9820;'],
whiteFigs1 = ['&#9814;','&#9816;','&#9815;','&#9813;','&#9812;','&#9821;','&#9815;','&#9814;'],
blackFigs2 = [ '&#9823;','&#9823;','&#9823;','&#9823;','&#9823;','&#9823;','&#9823;','&#9823;'],
whiteFigs2 = [ '&#9817;','&#9817;','&#9817;','&#9817;','&#9817;','&#9817;','&#9817;','&#9817;'];
function creatChess(){
  var name = ['8','7','6','5','4','3','2','1','A','B','C','D','E','F','G','H'];
  var newTable = document.createElement('table');
  for (var i = 0; i <10; i++) {
    var tr = document.createElement('tr');
    tr.className = "square";
    for (var j = 0; j < 10; j++) {
        var td = document.createElement('td');
        if ((i == 0 && j == 0) || (i == 0 && j == 9) || (i == 9 && j==0) || (i == 9 && j ==9)) {
          td.className="angle";
        }else if( i == 0 ){
          td.className = "lettersUp";
          td.innerHTML = `${name[j+7]}`;
        }else if ( j == 0){
          td.className = "NumbersLeft";
          td.innerText =`${name[i-1]}`;
        }else if ( j == 9){
          td.className = "NumbersRight";
          td.innerText =`${name[i-1]}`;
        }else if ( i == 9){
          td.className = "lettersDown";
          td.innerText =`${name[j+7]}`;
        }else if ( i % 2 == j % 2) {
            td.className = "white";
        } else {
            td.className = "black";
        };
        tr.appendChild(td);
    };
    newTable.appendChild(tr);
  };
document.body.appendChild(newTable);
}

function addFigures(allTr,allTd) {
  for (var row in allTr) {
    for (var column in allTd) {
      if ( row == 1 && (column >= 11 && column<=18)){
        allTd[column].innerHTML = blackFigs1[column-11];
        allTd[column].style.textAlign = "center";
      } else if ( row == 2 && column <= 28 && column >= 21){
        allTd[column].innerHTML = blackFigs2[column-21];
        allTd[column].style.textAlign = "center";
      }else if ( row == 8 && column <= 78 && column >= 71 ){
        allTd[column].innerHTML = whiteFigs2[column-71];
        allTd[column].style.textAlign = "center";
      }else if ( row == 9 && column <= 88 && column >= 81 ){
        allTd[column].innerHTML = whiteFigs1[column-81];
        allTd[column].style.textAlign = "center";
      };
    };
  };
}


creatChess();
if (document.querySelector('td') && document.querySelector('tr')){
   var allTd = document.querySelectorAll('td');
   var allTr = document.querySelectorAll('tr');
   addFigures(allTr,allTd);
}
