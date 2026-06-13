let homeP = document.getElementById('homeP')
let homeI = document.getElementById("homeI")
let homeE = document.querySelectorAll("homeE")

let faceCard = document.querySelector('.faceCard')



window.addEventListener('load', () => {
   {
    setInterval(() => {
    if(document.visibilityState === "visible") {
      const shuriken =  document.createElement('img');
    shuriken.src = 'download.png'
    shuriken.classList.add('shuriken');
    shuriken.style.width = Math.floor(Math.random() * 400) + 'px';
    shuriken.style.left = Math.floor(Math.random() * window.innerWidth) + 'px';

    document.body.appendChild(shuriken);
      shuriken.addEventListener('animationend', () => {
      shuriken.remove();

    });
    }
    
    }, 600);
  
    
  }});





homeI.addEventListener("click", () => {
  homeP.style.marginTop = "100px";
})


function startCount(elementID, target) {
  let current = "+" + 0;
  let countVal = document.getElementById(elementID);
  let timer = setInterval(() => {
    current ++;
    elementID.textContent = "+" + current;
    if(current >= target) {
      clearInterval(timer);
    }
  }, 100);
  
}
function updateClock(){
  const now = new Date();
  let hours = now.getHours();
  
  hours = hours % 12 || 12;
  hours = hours.toString().padStart(2, 0);
  const minutes = now.getMinutes().toString().padStart(2, 0);
  const seconds = now.getSeconds().toString().padStart(2, 0);
  const timeString = `${hours}:${minutes}:${seconds}`;
  document.getElementById("clock").textContent = timeString;
}

updateClock();
setInterval(updateClock, 1000);


window.onload = () => {
  startCount(counter1, 2);
  startCount(counter2, 11);
  startCount(counter3, 2);
}