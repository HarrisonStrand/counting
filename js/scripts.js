$(document).ready(function() {
  $("#numbers").submit(function(event) {
    event.preventDefault();

    const number1 = $("input#countTo").val();
    const number2 = $("input#countBy").val();
    const countToInt = parseInt(number1);
    const countByInt = parseInt(number2);
    
    if (countToInt <= -1 && countByInt <= -1) {
      alert("Please enter positive number");
    }
    else if (countByInt === 0 && countByInt === 0) {
      alert("Please enter a numerical value");
    }

    for (let currentNumber = 0; currentNumber <= countToInt; currentNumber += countByInt) {
      $("#result").append(" " + currentNumber);
    }
  });
});