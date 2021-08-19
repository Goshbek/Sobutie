// const btn = document.querySelector('#btn')
// const title = document.querySelector('h1')
// const inp = document.querySelector('input')

// // let foo = () => alert(`hello`)
// // btn.addEventListener('click', function(){prompt('Введите имя')})
// // btn.addEventListener('click', foo)

// // const inp = document.querySelector('input')
// // inp.addEventListener('change', function(event){
// //     console.log(event.target.value)
// //     let e = event.target.value
// //     title.textContent = e
// // })

// // console.log(inp);


// // btn.addEventListener('click', function(event){
// //     console.log(event.target.value)
// //     let e = inp.value
// //     title.textContent = e
// // })


const input = document.querySelector('#inp')
const button = document.querySelector('#btn')
const wrapper = document.querySelector('#box')
console.log(input,button,wrapper);


button.addEventListener('click', function(){
    if(!input.value)return
    let newP = document.createElement('p')
        newP.textContent = input.value
        wrapper.append(newP)
    newP.addEventListener('click', function(){
        newP.classList.toggle('active')      
    })
    let cases = document.querySelectorAll('p')
    console.log(cases);
    let h2 = document.querySelector('h2')
    function count(){
        if(cases.length == null){
            h2.textContent = 'Задач' + " " + "0"
        }
        else{
            h2.textContent = 'Задач' + " " + cases.length
        }
    }
    count()
    let delet = document.createElement('button')
    delet.classList.add('btn2')
    delet.textContent = "delete"
    newP.append(delet)

    function count2(){
        h2.textContent = 'Задач' + " " +(cases.length - 1) 
    }
    function handleClick(){
        newP.remove('newP')
        count2()
    }
    delet.addEventListener('click', handleClick)
})

let theme = document.querySelectorAll('.them_btn')
console.log(theme);
let bodyt = document.querySelector('body')
bodyt.addEventListener('click', function(){
    bodyt.classList.add('body__them3').toggle
})