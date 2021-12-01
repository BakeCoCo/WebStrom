document.addEventListener("DOMContentLoaded",function(){
   const
       headB = document.querySelector('.headBoard'),
       navB = document.querySelector('.navBoard'),
       secB = document.querySelector('.secBoard'),
       footB = document.querySelector('.footBoard'),
       mainBody = document.querySelector('.mainBody'),
       kill = document.getElementById('KILL');

   kill.addEventListener('click',function (e){
      killHealthMan();
   });
   mainBody.addEventListener('click',window.ex = function(e){
      plusStar(e.x,e.y);
   });

//    mainBody = document.getElementsByClassName('mainBody')
//    HTMLCollection [body.mainBody]
//    mainBody = mainBody[0]
//        <body class=​"mainBody">​…​</body>​
// window.ex
//    ƒ (e){
//       plusStar(e.x,e.y);
//    }
//    mainBody.removeEventListener('click', window.ex)
//    undefined
   setInterval(healthBoy, 100);

   buildHead();
   buildNav();
   buildSec();
   buildFoot();
});

function plusStar(x,y){
   let star = "";
   let test = document.getElementById('test');
   let bg_colour = Math.floor(Math.random() * 16777215).toString(16);

   //bg_colour = "#" + ("000000" + bg_colour).slice(-6);
   //star += `<div class="star a${x}${y} fire" style="top: ${y}px; left: ${x}px; background-color: ${bg_colour}"  ></div>`;

   star += `<div><img src="practicePNG/babel2.gif" class="star a${x}${y} fire" style="position: absolute; top: ${y-100}px; left: ${x-50}px; width: 200px; height: 300px;"></div>`;

   test.innerHTML += star;
   setTime(x,y);
}
function setTime(x,y){
   const changeTime = document.querySelector('.a'+x+y);
   const ran = Math.random()+0.5;
   changeTime.style.setProperty('animation-duration',ran+'s');
}

function healthBoy(){
   const test = document.querySelectorAll('.fire');
   let k = "";
   for(let i=0; i<test.length; i++){
      k = test[i].getAttribute('src');
      if(k.indexOf('babel1.gif')>0){
         k = k.replace('babel1.gif','babel2.gif');
      }else{
         k = k.replace('babel2.gif','babel1.gif');
      }
      test[i].setAttribute('src',k);
   }
}

function killHealthMan(){
   document.getElementById('test').innerHTML='';
   document.querySelector('.mainBody').removeEventListener('click',window.ex);
}

function buildHead(){

}

function buildNav(){

}

function buildSec(){

}

function buildFoot(){

}

