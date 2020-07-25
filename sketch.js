var ball,paddle,ballImage,paddleImage;


function preload() {
  
  ballImage= loadImage("ball.png");
  paddleImage = loadImage("paddle.png");
  /* preload your images here of the ball and the paddle */
}
function setup() {
  createCanvas(400, 400);
   /* create the Ball Sprite and the Paddle Sprite */
  /* assign the images to the sprites */
   paddle  = createSprite(350,250,20,70);
      paddle.addImage("paddle.png",paddleImage);
  
   ball = createSprite(50,250,20,20);
  ball.velocityX = 9;
    ball.addImage("ball.png",ballImage);
  
  
  /* give the ball an initial velocity of 9 in the X direction */
  

}

function draw() {
  background(205,153,0);
  /* create Edge Sprites here */
    edges = createEdgeSprites();
  

  ball.bounceOff(paddle);
   ball.bounceOff(edges[0]);
      ball.bounceOff(edges[2]);
     ball.bounceOff(edges[3]);
  /* Allow the ball sprite to bounceOff the left, top and bottom edges only, leaving the right edge of the canvas to be open. */
  

  /* Allow the ball to bounceoff from the paddle */
  /* Also assign a collision callback function, so that the ball can have a random y velocity, making the game interesting */
 
  /* Prevent the paddle from going out of the edges */ 
  paddle.collide(edges[2]);
    paddle.collide(edges[3]);
  
  if(keyDown(UP_ARROW)){
 paddle.velocityY= -9;
  }
   
     /* what should happen when you press the UP Arrow Key */
  
  
  if(keyDown(DOWN_ARROW))
  {
     paddle.velocityY= 9;
    /* what should happen when you press the UP Arrow Key */
  }
 randomVelocity();
  drawSprites();
  
}

function randomVelocity()
{
  /* this function gets called when the ball bounces off the paddle */
    (get.FrameCount % 20 === 0) ;

  /* assign the ball a random vertical velocity, so it bounces off in random direction */
}

