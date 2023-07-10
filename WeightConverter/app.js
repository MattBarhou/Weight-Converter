let kg = document.querySelector('#kg');
let ibs = document.querySelector('#ibs');
let weight = document.querySelector('#weight');
let submitBtn = document.querySelector('.btn');
let result =  document.querySelector( 'h4');
let calculations = "";



submitBtn.addEventListener('click', function(e) { 
    e.preventDefault();
   
    if (kg.checked) {  
        calculations = weight.value / 2.20462;
        result.innerHTML = `Your weight in KG is ${calculations}`;
    }
    else if (ibs.checked) { 
        calculations = weight.value * 2.20462;
        result.innerHTML = `Your weight in Ibs is ${calculations}`;
    }
})


//Disable either KG or Ibs if checked

kg.addEventListener('change', function() {
    if (this.checked) {
      ibs.disabled = true;
    } else {
      ibs.disabled = false;
    }
  });
  
  ibs.addEventListener('change', function() {
    if (this.checked) {
      kg.disabled = true;
    } else {
      kg.disabled = false;
    }
  });
