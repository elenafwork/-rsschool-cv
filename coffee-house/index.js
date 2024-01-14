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

//slider for Favorite coffee
const slider=document.querySelector('.slider');
const leftArrow=document.querySelector('.btn-left');
const rightArrow=document.querySelector('.btn-right');
const indicatorParents=document.querySelector('.slider-nav ul');
var sectionIndex=0;
leftArrow.addEventListener('click', function(){
  sectionIndex=(sectionIndex>0)? sectionIndex-1 : 2;
  document.querySelector('.slider-nav  li.selected').classList.remove('selected');
  indicatorParents.children[sectionIndex].classList.add('selected');
  slider.style.transform='translate('+ (sectionIndex) * -33 +'%)';
})
rightArrow.addEventListener('click', function(){
  sectionIndex=(sectionIndex<2)? sectionIndex+1 : 0;
  document.querySelector('.slider-nav  li.selected').classList.remove('selected');
  indicatorParents.children[sectionIndex].classList.add('selected');
  slider.style.transform='translate('+ (sectionIndex) * -33 +'%)';
})

//selectors
document.querySelectorAll('.slider-nav li').forEach(function(indicator, index){
  indicator.addEventListener('click', function(){
    sectionIndex=index;
    console.log('selected', document.querySelectorAll('.slider-nav  li'));
    
    document.querySelector('.slider-nav  li.selected').classList.remove('selected');
    indicator.classList.add('selected');
    slider.style.transform='translate('+ (sectionIndex) * -33 +'%)';
    
  })
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