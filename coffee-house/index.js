const burgerMenuBtn=document.getElementById('btn-menu-default');
const burgerMenuBlock=document.querySelector('.burger-menu-items');
const burgerMenuCloseBtn=document.getElementById('btn-menu-active');
const menu=document.querySelector('.burger-btn');
const burgerBar1=document.querySelector('.bar-1');
const burgerBar2=document.querySelector('.bar-2');
menu.addEventListener('click', ()=>{
    menu.classList.toggle('open');
    burgerBar1.classList.toggle('open');
    burgerBar2.classList.toggle('open');
    burgerMenuBlock.classList.toggle('navbar')
})

// opening burger menu function
function openBurgerMenu(){
  burgerMenuBlock.setAttribute('style', 'display:block');
  burgerMenuCloseBtn.setAttribute('style','display:block');
  burgerMenuBtn.setAttribute('style', 'display: none');

  //function for closing burger menu
  function closeBurgerMenu(){
    burgerMenuBlock.setAttribute('style', 'display:none');
    burgerMenuCloseBtn.setAttribute('style','display:none');
    burgerMenuBtn.setAttribute('style', 'display: block');
   }
   //close menu
  burgerMenuCloseBtn.addEventListener('click', closeBurgerMenu);
}


//open burger menu
//burgerMenuBtn.addEventListener('click', openBurgerMenu);