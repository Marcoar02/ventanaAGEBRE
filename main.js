const dropdownButton = document.querySelector(".dropdown-button") 
const dropdownMenu = document.querySelector(".dropdown-menu");

const firstOption = document.querySelector(".first-option");
const secondOption = document.querySelector(".second-option");

dropdownButton.addEventListener("click",()=>{
  dropdownMenu.classList.toggle("dropdown-menu--active");
});

const options = document.querySelector(".options")

dropdownMenu?.addEventListener("click",(event)=>{
  const target = event.target;
  const li = target.closest("li");
  firstOption.style.display = "none";
  secondOption.style.display = "none";
  document.querySelectorAll("[data-result]").forEach(element=>element.style.display='none')

  let buttons = firstOption.querySelectorAll("button");
  buttons.forEach(btn=>btn.classList.remove("option--active"));
  buttons[0].classList.add("option--active")
  
  buttons = secondOption.querySelectorAll("button");
  buttons.forEach(btn=>btn.classList.remove("option--active"));
  buttons[0].classList.add("option--active")

  dropdownMenu.classList.remove("dropdown-menu--active");
  if (li.dataset["option"] === "first-option"){
    firstOption.style.display = "flex";
    document.querySelector("[data-result='inicial']").style.display="block";
  }else if(li.dataset["option"] === "second-option"){
    secondOption.style.display = "flex";
    document.querySelector("[data-result='inicial']").style.display="none";
  }
});

options.addEventListener("click",event=>{
  const target = event.target;
  const button = target.closest("button");
  if(!button) return
  const buttons = options.querySelectorAll("button");
  buttons.forEach(btn=>btn.classList.remove("option--active"));
  document.querySelectorAll("[data-result]").forEach(element=>element.style.display='none');
  button.classList.add("option--active");
  document.querySelector(`[data-result='${button.dataset['target']}']`).style.display='block';
})


// firstOption?.addEventListener("click",event=> {
//   const target = event.target;
//   const button = target.closest("button");
//   if(!button) return;
//   const buttons = firstOption.querySelectorAll("button");
//   buttons.forEach(btn=>btn.classList.remove("option--active"));
//   button.classList.add("option--active");
// });

// secondOption?.addEventListener("click",event=> {
//   const target = event.target;
//   const button = target.closest("button");
//   if(!button) return;
//   const buttons = secondOption.querySelectorAll("button");
//   buttons.forEach(btn=>btn.classList.remove("option--active"));
//   button.classList.add("option--active");
// })
