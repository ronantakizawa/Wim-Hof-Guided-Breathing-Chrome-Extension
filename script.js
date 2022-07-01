var container = document.getElementById('container');
var text = document.getElementById('text');
var number= document.getElementById('number');
var circle1 = document.getElementsByClassName('circle');
var container = document.getElementById("container");
var breathing;
var counter = 0;
const totalTime = 7500;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime /5;
var seconds = 59;
var clock="00:"+seconds;
var ticking;
var hold = false;
number.innerHTML="START";
text.innerText="";


container.addEventListener("click",start);


function start(){
  document.getElementById("circle").classList.remove("hover");
  fadeout();
  container.className = 'container shrink';
  setTimeout(changeText,1000);
  breathing = setInterval(breathAnimation, totalTime);
  setTimeout(fadein,5000);

}

function changeText()
{
  number.style.top="0px";
  number.style.bottom="35px";
  number.style.right="5px";
  number.style.fontSize="90px";
  number.innerText = counter;
  text.innerText='BREATHE IN';
}

function grow()
{
  container.className = 'container grow';
}

function breathAnimation() {
  counter++;
  if(counter==31)
  {
    clearInterval(breathing);
    grow();
    setTimeout(timer,4000);
  }
  else
  {
    if(counter==30)
    {
      setTimeout(fadeout,6000);
    }
    number.innerText = counter;
    text.innerText='BREATHE IN';
    container.className = 'container grow';
  
    setTimeout(() => {
      text.innerText = 'BREATHE IN';
  
      setTimeout(() => {
        text.innerText = 'BREATHE OUT';
        container.className = 'container shrink';
      }, holdTime);
    }, holdTime);
  }
}

function fadeout()
{
    text.style.opacity="0";
    number.style.opacity="0";

}
function fadein()
{
  text.style.opacity="1";
  number.style.opacity="1";

}
function timer()
{
  number.innerText= clock;
  text.innerText="TIME LEFT";
  fadein();
  ticking = setInterval(countdown, 1000);
}
function countdown()
{
  if(!hold)
  {
    container.className = 'container shrink2';
  }
  seconds-=1;
  if(seconds>=10)
  {
    clock="00:"+seconds;
  }
  else
  {
    clock="00:0"+seconds;
  }
  number.innerText= clock;
  if(seconds==0)
  {
    clearInterval(ticking);
    if(!hold)
    {
      hold=true;
      fadeout();
      setTimeout(fadein,1000);
      setTimeout(lastBreath1,1000);
    }
    else
    {
      container.className = 'container shrink';
      setTimeout(fadeout,4000);
      text.innerText="AND LET IT GO";
      setTimeout(restart,7000);
      
    }
  }
  
}
function lastBreath1()
{
  text.innerText="BREATHE IN";
  seconds=15;
  clock="00:"+seconds;
  number.innerText= clock;
  container.className = 'container grow';
  setTimeout(lastBreath2,4000);
}
function lastBreath2()
{
  countdown();
  text.innerText="HOLD";
  ticking = setInterval(countdown, 1000);
}

function restart()
{
  document.getElementById("circle").classList.add("hover");
  container.className = 'container grow';
  setTimeout(fadein,4000);
  number.innerHTML="&#10227;";
  text.innerText="";
  counter = 0;
  seconds = 59;
  hold = false;
  container.addEventListener("click",start);

}
