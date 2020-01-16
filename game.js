const handlePop= function(event){
  const id = event.target.id;
  const parent = document.getElementsByClassName('bubbleBox')[0];
  const bubblePop = document.getElementById('pop');
  bubblePop.play();
  parent.removeChild(event.target);
}

const addBubbles = function(gameBoard){
  for (i=0;i<10;i++){ 
    const bubble = document.createElement('div');
    bubble.className = 'bubble';
    bubble.style.height= 50+Math.random()*10+'px';
    bubble.style.width = bubble.style.height;
    bubble.style.left = (Math.random()*800)%800+'px';
    bubble.style.top = 200+ (Math.random()*500)%350 +'px';
    bubble.setAttribute('id',i);
    bubble.addEventListener('mouseover',handlePop);
    gameBoard.append(bubble);
  }
}
main = function(){
  const gameBoard = document.getElementsByClassName('bubbleBox')[0];
  addBubbles(gameBoard);
  setInterval(addBubbles,3*1000,gameBoard);
}
