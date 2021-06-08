'use strict'
window.onscroll=function(){
  if (document.documentElement.scrollTop >200) {
    document.querySelector('.navbar').classList.add('bgcolor');
  } else {
    document.querySelector('.navbar').classList.remove('bgcolor');
  }
};
for(let i=0;i<6;i++){
  let x=document.querySelector(".card-hidden"+i);
  x.addEventListener('mouseover',function(){
    document.querySelector('.card-text'+i).classList.toggle('hidden');
})

   x.addEventListener('mouseout',function(){
     document.querySelector('.card-text'+i).classList.toggle('hidden');

   })

}
for(let i=0;i<3;i++){
  let x=document.querySelector(".team-image"+i);
  x.addEventListener('mouseover',function(){
    document.querySelector('.card-img-overlay-team'+i).classList.toggle('hidden');
})

   x.addEventListener('mouseout',function(){
     document.querySelector('.card-img-overlay-team'+i).classList.toggle('hidden');

   })

}

for(let j=0;j<2;j++){
  let x=document.querySelector(".question"+j);
  x.addEventListener('mouseover',function(){
    document.querySelector('.questions'+j).classList.toggle('hidden1');
    document.querySelector('.abc'+j).classList.add('ans-icon');
})

   x.addEventListener('mouseout',function(){
     document.querySelector('.questions'+j).classList.toggle('hidden1');
     document.querySelector('.abc'+j).classList.remove('ans-icon');
   })

}
