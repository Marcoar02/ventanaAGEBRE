const dropdownButton = document.querySelector(".dropdown-button") 
const dropdownMenu = document.querySelector(".dropdown-menu");

const firstOption = document.querySelector(".first-option");
const secondOption = document.querySelector(".second-option");
const threeOption = document.querySelector(".three-option");

dropdownButton.addEventListener("click",()=>{
  dropdownMenu.classList.toggle("dropdown-menu--active");
});

dropdownMenu?.addEventListener("click",(event)=>{
  const target = event.target;
  const li = target.closest("li");
  firstOption.style.display = "none";
  secondOption.style.display = "none";
  threeOption.style.display = "none";
  
  if (li.dataset["option"] === "first-option"){
    firstOption.style.display = "flex";

  }else if(li.dataset["option"] === "second-option"){
    secondOption.style.display = "flex";
  }else{
    threeOption.style.display = "flex";
  }
})

firstOption?.addEventListener("click",event=> {
  console.log("asdasd")
  const target = event.target
  const button = target.closest("button")
  if(!button) return
  const buttons = firstOption.querySelectorAll("button")
  buttons.forEach(btn=>btn.classList.remove("option--active"))
  button.classList.add("option--active")
})

secondOption?.addEventListener("click",event=> {
  const target = event.target
  const button = target.closest("button")
  if(!button) return
  const buttons = secondOption.querySelectorAll("button")
  buttons.forEach(btn=>btn.classList.remove("option--active"))
  button.classList.add("option--active")
})

threeOption?.addEventListener("click",event=> {
  const target = event.target
  const button = target.closest("button")
  if(!button) return
  const buttons = threeOption.querySelectorAll("button")
  buttons.forEach(btn=>btn.classList.remove("option--active"))
  button.classList.add("option--active")
})