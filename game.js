const handlePop= function(event){
  const id = event.target.id;
  const element = document.getElementById(id);
  const parent = document.getElementsByClassName('bubbleBox')[0];
  parent.removeChild(element);
}

const addBubbles = function(gameBoard){
  for (i=0;i<20;i++){ 
    const bubble = document.createElement('div');
    bubble.className = 'bubble';
    posX =650;
    posY =650;
    bubble.style.height= Math.random()*100+'px';
    bubble.style.width = bubble.style.height;
    bubble.style.left = Math.random()*1000+'px';
    bubble.setAttribute('id',i);
    bubble.addEventListener('mouseover',handlePop);
    gameBoard.append(bubble);
  }
}
main = function(){
  const gameBoard = document.getElementsByClassName('bubbleBox')[0];
  console.log(gameBoard);
  setInterval(addBubbles, 5*1000,gameBoard)
  
}
