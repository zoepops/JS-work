let button = document.getElementById("btn")
button.addEventListener("click", ()=>{
    document.body.style.background = "yellow"
})

const input = document.getElementById("input")
const put = document.getElementById("put")

input.addEventListener("input", ()=>{
    put.textContent = input.value
})

let button1 = document.getElementById("btn2")
button1.addEventListener("click", ()=>{
    alert("welcome to javascript events")
})