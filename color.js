// const redButton = document.querySelector(".red")
// const blackButton = document.querySelector(".black")
// const blueButton = document.querySelector(".blue")
const colorButtons = document.querySelectorAll("button")

function colorChange(){
    colorButtons.forEach((button)=> {
        button.addEventListener("click", (e)=>{
        const value = e.target.value
        e.target.style.background = value
        document.body.style.background = value
        document.body.classList.add("transition")
        })
    } )
    
}
colorChange()





