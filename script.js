const h1 = document.querySelector("h1")
const button = document.querySelector("button")
const butt = document.querySelector(".butt")
const div = document.querySelector(".menu")
const inputEL = document.querySelector("input")



butt.addEventListener("click", addItem)
inputEL.addEventListener("input", getValue)




const items = []


let newValue;

function getValue(e){
    newValue = e.target.value
    items.push(newValue)
}

function addItem(){

   
   const list = document.createElement("li")
   list.classList.add("make")
    items.map(item =>{

        list.innerHTML= item
    })
       inputEL.value=""
      
   div.appendChild(list)
}





