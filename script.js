const display = document.getElementById('display');
const keys = ['0','1','2','3','4','5','6','7','8','9','+', '-', '*', '/', '.'];

function appendToDisplay(value) { 
  display.value += value; 
}

function clearDisplay() { 
  display.value = ""; 
}

function calculate() { 
  try { 
    display.value = eval(display.value); 
    
  }
  catch (error) { 
    display.value = 'Error'; 
  }
}




document.addEventListener('keydown', function(event) { 
  const key = event.key; 
  if (key === 'Enter'){ 
    calculate(); 
    event.preventDefault();
  }
  if (keys.includes(key)) { 
    this.appendToDisplay(key);
  event.preventDefault(); 
  
  }
  if(key === 'Backspace'){ 
    display.value = display.value.slice(0, -1); 
    event.preventDefault(); 
   
  }

  event.preventDefault();
  
})
