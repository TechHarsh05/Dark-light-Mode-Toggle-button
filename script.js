let c = document.querySelector('body')
let btn1 = document.getElementById('day')
let btn2 = document.getElementById('night')

btn1.addEventListener('click',function () {
    c.style.cssText = "background-color:black;"
    btn2.style.cssText = "position:absolute"
})
btn2.addEventListener('click',function () {
    c.style.cssText = "background-color:white;"
    btn2.style.cssText = "position:none"
})