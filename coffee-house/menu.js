const burgerMenuBtn=document.getElementById('btn-menu-default');
const burgerMenuBlock=document.querySelector('.burger-menu-items');
const burgerMenuCloseBtn=document.getElementById('btn-menu-active');
const menu=document.querySelector('.burger-btn');
const burgerBar1=document.querySelector('.bar-1');
const burgerBar2=document.querySelector('.bar-2');
//menu
menu.addEventListener('click', ()=>{
    menu.classList.toggle('open');
    burgerBar1.classList.toggle('open');
    burgerBar2.classList.toggle('open');
    burgerMenuBlock.classList.toggle('navbar')
})

//------------------MENU PAGE-------------------
var menuSelectedType;
document.querySelectorAll('.tab-item').forEach(function(indicator,index){
   

    indicator.addEventListener('click', function(){
        document.querySelector('#menu-offer .active').classList.remove('active');
        indicator.classList.add('active');
      menuSelectedType= document.querySelectorAll('.tab-item')[index].type;
      console.log(menuSelectedType);
      document.querySelector('.selected').classList.remove('selected');
      document.getElementById(menuSelectedType).classList.add('selected');
      
    })
  
  })