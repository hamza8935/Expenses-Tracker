let arr = [] ;
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
   let arr1 ;
   let input12 ;
     
      input12 = parseInt(input1.value);
    //  if (input12 > 0 ) {
    //      //result.innerText = input12;
    //    green.innerText =`$ ${arr1}`;
    //  } else{
    //     // result.innerText = input12;
    //      red.innerText =`$ ${arr1}`;
    //  }
     let  input11 = input.value;
     

      arr.push(input12)
     console.log(arr);  
  //  let a1 =   arr.map(function(Number){
  //      return Number
  //    })
  //    console.log(a1);
   //---------------------------------------------- CREATE ELEMENT ---------------------------       
   let element = document.createElement('div')
   element.setAttribute('id','article')
   element.innerHTML = ` 
   
  
   <div id="text">${input11}</div>
   <div id="rupees">$${input12}</div>    

   
   `
   
   console.log(element);
   item.appendChild(element);
//------------------------------------------------------------------------------------------------------       


    // ----------------------------------- RESULT VALUE ------------------------------------
   arr1 = arr.reduce(function (prev , curr){
       return prev + curr ;
     })
     result.innerText =`$${arr1}.00` ;
  //-------------------------------------- INCOME VALUE --------------------------------------
     let arr2 = arr.filter(function (num){
            return num > 0
     })
     console.log("positive " + arr2);
  let arr3  =   arr2.reduce(function( prev , curr ){
              return prev + curr ;
     })
        green.innerText = arr3;      

//---------------------------------------------EXPENSE VALUE --------------------------------
     let arr4 = arr.filter(function(num){
         return num < 0 ;
     })   
     let arr5 = arr4.reduce(function( prev ,curr ){
         return prev + curr ;
     } )
      
     red.innerText = arr5 ;
     console.log('negative array' + arr4);




     //    if (input12 > 0 ) {
    //     //result.innerText = input12;
    //   green.innerText =`$ ${arr1}`;
    // } else{
    //    // result.innerText = input12;
    //     red.innerText =`$ ${arr1}`;
    // }
      //  result.innerText = input12;

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