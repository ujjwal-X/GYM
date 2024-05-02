//Main.js


// Js for custom cursor
let loadingDiv=document.querySelector(".loading-bar");


// Js for loading bar
function getScrollPercent() {
  var h = document.documentElement, 
      b = document.body,
      st = 'scrollTop',
      sh = 'scrollHeight';
  return (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;
}
window.addEventListener('scroll',()=>{
  let a=getScrollPercent();
  loadingDiv.style.width=`${a}%`;
})






let body = document.getElementsByTagName("body")[0]
body.setAttribute("oncontextmenu", "return true")

