const button = document.querySelector(".btn")
const massage = document.querySelector(".check")
const submited = document.querySelector(".submited")
const container = document.querySelector(".container")
const dissmiss = document.querySelector(".submited-btn")


button.addEventListener('click',() =>{

    const input = document.querySelector(".email").value;

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input))
    {
      submited.style.display = "flex"
      container.style.display = "none"

    }
    else{
      const red = document.querySelector(".email")

        massage.style.display = "block"
        red.className = "active"
    }
    const mail = document.querySelector(".submited-mail")
    
    mail.innerHTML = input
})

dissmiss.addEventListener("click",()=>{

    window.open("index.html")
})