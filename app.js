let btn = document.querySelectorAll(".title")
let cont = document.querySelectorAll(".content")

for (let a = 0; a < btn.length; a++) {
  btn[a].addEventListener('click',()=>{

    for (let m = 0; m < cont.length; m++) {
  
       cont[m].classList.remove("active")
    
    }

    cont[a].classList.add("active");
  })
    
}