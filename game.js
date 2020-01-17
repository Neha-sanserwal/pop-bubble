let SCORE = 0;
const handlePop= function(event){
  const parent = document.getElementsByClassName('bubbleBox')[0];
  const audio = new Audio('./Pop-sound-effect/Pop-sound-effect.mp3');
  audio.play;
  document.getElementById('scoreCount').innerText = SCORE;
  parent.removeChild(event.target);
}
const addDimensions = function(bubble){
  bubble.style.height= 50+Math.random()*10+'px';
  bubble.style.width = bubble.style.height;
  bubble.style.left = (Math.random()*800)%800+'px';
  bubble.style.top = 200+ (Math.random()*500)%350 +'px';
}
const initBubble = function(){
  const bubble = document.createElement('div');
  bubble.className = 'bubble';
  addDimensions(bubble);
  bubble.addEventListener('mouseover',handlePop);
  return bubble;
}
const addBubbles = function(gameBoard){
  for (i=0;i<10;i++){ 
    const newBubble = initBubble();
    gameBoard.append(newBubble);
  }
}
main = function(){
  const gameBoard = document.getElementsByClassName('bubbleBox')[0];
  addBubbles(gameBoard);
  setInterval(addBubbles,3*1000,gameBoard);
}
