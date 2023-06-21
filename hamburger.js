const myFunction = (navba)=> {
    const navUl = document.querySelector('.nav-ul')
    const bar =document.querySelector('.hamburger')
   
    const bars = bar.children 
    for(i=0; i<bars.length; i++){
        bars[i].style.backgroundColor = "red"
    } 

    // const navbar = document.querySelector('.hamburger')
    if(navba.classList.toggle('change')){
        navUl.style.display='flex'
    }
    else{
        navUl.style.display=''
    }
}

// SET ACTIVE CLASS

const setActive = (e) =>{
    const activeClass = document.querySelectorAll(".active");
    [].forEach.call(activeClass, function(item) {
        item.classList.remove("active");
    });
    e.target.className = "active";
}



// FORM VALIDATION
// const checkBox = document.querySelector(".check");
// console.log(checkBox);

function validateForm(e){
    const name = document.form.name.value
    const password = document.form.password.value
    const email = document.form.email.value
    let message = document.querySelector(".message")
    const form = document.querySelector("form")
    
    e.preventDefault()
    
    if(name =="" || email == "" || password ==""){
        // alert("cant be blank")
        message.innerText="Please, check if all boxes are filled"
    }
     if(name.length<7){
        message.innerText= `${name} must be more than seven characters`  
     }
    
    else if(password.length<6){
        message.innerText="Password must be more than six characters"
       
    }


    else{
        message.innerText="Congratulations! You're registered!"
    
        message.style.color="green"
        // localStorage.setItem("Users", name, password)
        // localStorage.clear()
        form.reset()

    }


    
}



// PASSWORD TYPE SWITCH

    function viewPassword(e){
        const password = document.querySelector('.password')
        const icon = e
        console.log(icon);
        if(password.type ==='password'){
            password.type = 'text'
            icon.name ="eye-off-outline"
        }
        else{
            // console.log(icon.name ="")
            password.type = 'password'
            
        }
    }



const addNumber = (x, y)=> {
    console.log(x, y);
}
addNumber(9+3)





// class Person{

//     constructor(firstName, email, address){
//         Person.firstName = this.name
//     }
// }


const listOfFarmers = {
    id: 1, 
    name: "James",
    location: "lafia",
    farmTools: ["cutlass", "hole", "manpowere"]
}
// const list = document.getElementsByClassName("list")

console.log(listOfFarmers.farmTools.map(function(el,id){
    console.log(el, " has an id number of " , id);
}))


























