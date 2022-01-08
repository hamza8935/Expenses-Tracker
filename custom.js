let input = document.getElementById('input');
let input1 = document.getElementById('input1');
let result = document.getElementById('result');
let green = document.querySelector('.green');
let red = document.querySelector('.red');
let btn = document.getElementById('btn');
let text = document.getElementById('text');
let rupees = document.getElementById('rupees');
let item = document.getElementById('main-item'); 


   btn.addEventListener('click',function (event) {
     event.preventDefault()
     let  input11 = input.value;
     
     let input12 = input1.value
     if (input12 > 0 ) {
         green.innerText =`$ ${input12}`;
     } else{
         red.innerText =`$ ${input12}`;
     }
 
       let element = document.createElement('div')
       element.setAttribute('id','article')
       element.innerHTML = ` 
       
      
       <div id="text">${input11}</div>
       <div id="rupees">$${input12}</div>    

       
       `
       
       console.log(element);
       item.appendChild(element);
       result.innerText = input12;

// let arr = [];
// arr.unshift(input12);
// console.log(arr);
         

       input.value = '';
       input1.value = '';

                  
    
    //    if (input12 > 0 ) {
    //     green.innerText = input12;
    // } else{
    //     red.innerText = input12;
    // }
    // let arr = [];
    // arr.push(input12)
    // console.log(arr);

    
   })