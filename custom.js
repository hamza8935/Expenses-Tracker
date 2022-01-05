let input = document.getElementById('input');
let input1 = document.getElementById('input1');
let result = document.getElementById('result');
let green = document.querySelector('.green');
let red = document.querySelector('.red');
let article1 = document.querySelector('.article');
let btn = document.getElementById('btn');
let text = document.getElementById('text');
let rupees = document.getElementById('rupees');
let article = document.getElementById('article');
let article2 = document.getElementById('article2');



   btn.addEventListener('click',function () {
     let  input11 = input.value;
     let input12 = input1.value;
     
     if (input12 > 0 ) {
         green.innerText = input12;
     } else{
         red.innerText = input12;
     }
 
       let element = document.createElement('article')
      // element.setAttribute('class','pizza')
       element.innerHTML = ` 
       <div id="article2">
      
       <div id="text">${input11}</div>
       <div id="rupees">${input12}</div> 
       
       </div>
        `
       console.log(element);

      // element.appendChild(article);
      // article.appendChild(rupees)


    
    //    if (input12 > 0 ) {
    //     green.innerText = input12;
    // } else{
    //     red.innerText = input12;
    // }
    // let arr = [];
    // arr.push(input12)
    // console.log(arr);

    
   })