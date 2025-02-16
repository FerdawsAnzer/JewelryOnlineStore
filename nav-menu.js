const menuBar=document.querySelector(".menu-bar");
const menuIcon=document.querySelector("#menu");
menuIcon.addEventListener('click',()=>{
  menuBar.classList.toggle('menu-active');
})