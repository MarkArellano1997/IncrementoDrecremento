const value = document.querySelector('.value')
const btns = document.querySelectorAll('.btn')
// const increment = document.querySelector('.increment')
// const reset = document.querySelector('.reset')
// const decrement = document.querySelector('.decrement')
let count = 0
btns.forEach(btn=>{
    btn.addEventListener('click',(btn)=>{        
        if(btn.currentTarget.classList[1]==='increment'){
            count+=1
            value.textContent = count
        }else if(btn.currentTarget.classList[1]==='decrement'){
            count-=1
            value.textContent = count
        }else{
            value.textContent = 0
        };
        
        if (+value.textContent<0) {
            value.style.color = 'red'
        }else if (+value.textContent>0) {
            value.style.color = 'green'
        }else{
            value.style.color = 'black'
        }
    })
})

// increment.addEventListener('click', ()=>{
//     count+=1
//     value.textContent = count
//     if (count>0) {
//         value.style.color = 'green'
//     }else if(count===0){
//         value.style.color = 'black'
//     }
// })

// reset.addEventListener('click',()=>{
//     count = 0
    
// })

// decrement.addEventListener('click',()=>{
//     count= count-1
//     value.textContent = count
//     if (count<0) {
//         value.style.color = 'red'
//     }else if(count===0){
//         value.style.color = 'black'
//     }
// })