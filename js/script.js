" use strict ";

var display = document.getElementById("display");

function oneToTen(){
  var sum = "";
  for(let i=1; i<11; i++) {
    sum += i + " " + "<br/>" ;
  }
  display.innerHTML = sum;
}

function oddNumbers() {
  var oddNumbers = "";
  for(let i=1; i<20; i++) {
    if(i%2 == 1) {
      oddNumbers += i + "<br/>";
    }
    display.innerHTML = oddNumbers;
  }
}

  function squares() {
    var squares = "";
    for(let i =1; i*i<=100; i++) {
      squares += i*i + "</br>";
    }
    display.innerHTML = squares;
  }

  function random4() {
    var random4 = "";
    for(let i=0; i<4; i++) {
      var temp = (Math.random()*100+1) + "";
      random4 += parseInt(temp) + "</br>";
    }
    display.innerHTML = random4;
  }

  function even(num) {
    var string = "";
    for(let i=num; i>1; i--) {
      if(i % 2 == 0) {
        string += i + "</br>";
      }
    }
    display.innerHTML = string;
  }

  function powers(num) {
    var string = "";
    for(let i=1 ;i<=num; i++) {
      string = Math.pow(2,i) + "</br>";
    }
    display.innerHTML = string;
  }

  function areWeThereYet() {
    var input = "";
    while (input != "Yes") {
      input = prompt("Are we there yet?");
    }
  }

  function triangle() {
    var string ="";
    for(var i=1; i<6; i++) {
      for(var j=0; j<i; j++) {
        string += "*";
      }
      string +=  "</br>";
    }
    display.innerHTML = string;
  }

  function tableSquare() {
    var str = "";
    for(var i=1; i<5; i++) {
      str += i + " | " + 2*i + " | " + 3*i + " | " + 4*i + "</br>";
    }
    display.innerHTML = str;
  }

  function tableSquares() {
    var str = "";
    var num = prompt("please enter a number:");
    for(var i=1; i<=num; i++) {
      for(var j=1; j<=num; j++){
        str += i*j + " | ";
      }
      str += "</br>";
    }
    display.innerHTML = str;
  }
