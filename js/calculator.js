// let caclculator = document.getElementsByClassName("calculator"); 
let display = document.getElementById("display");
// select all the buttons
const buttons = document.querySelectorAll('button');
// calculate function
const calculate = (event)=> {
    // current clicked buttons value
    const clickedButtonValue = event.target.value;
    console.log(clickedButtonValue); 
  
    if (clickedButtonValue === '=') {
      // check if the display is not empty then only do the calculation
      if (display.value !== '') {
        // calculate and show the answer to display
        display.value = eval(display.value);
      }
    } else if (clickedButtonValue === 'C') {
      // clear everything on display
      display.value = '';
    } else {
      // otherwise concatenate it to the display
      display.value += clickedButtonValue;
    }
  }
// add eventListener to each button
buttons.forEach(function(button) {
    button.addEventListener('click', calculate);
  });
