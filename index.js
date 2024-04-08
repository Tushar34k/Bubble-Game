var hitrn=0;

var score=0;
function increseScore()
{
  score+=10;
  document.querySelector("#sco").textContent=score;
}

function hit()
{
      hitrn=Math.floor(Math.random()*10);

     document.querySelector("#hitt").textContent=hitrn;
}

function bubbles()
{
    var clusetr=" ";

for(var i=1;i<=700;i++)
{
       var ran=Math.floor(Math.random()*10);
  clusetr+=`<div class="bubble">${ran}</div>`;

}

  document.querySelector("#pbtm").innerHTML=clusetr;
}

var time = 60;

function timerr() {
    var interval=setInterval(function() {

      if(time>0)
      {

        time--;
        document.querySelector("#seconds").textContent = time;
      }
      else{
            clearInterval(interval);
            document.querySelector("#pbtm").innerHTML=`<h1>time is over!!!!  youre score is  ${score}<h1>`
      }
    }, 1000);
}
document.querySelector("#pbtm").addEventListener("click",function(em)
{
  var clickNum=Number(em.target.textContent);
  console.log(clickNum)
  console.log(hitrn)
    if(clickNum==hitrn)
    {
          increseScore();
          bubbles();
          hit();

    }
})
bubbles();
timerr();
// increseScore();
hit();




