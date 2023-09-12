let x=0, y=0
function setup() {
  createCanvas(1000, 1000);
 
}

function draw() {
  background(109,59,168);
  for (let i =0;i<1000;i+=10){
  noFill();
  stroke(59,165,168);
  strokeWeight(4);
  ellipse(600,350,i-200,i-200);
    
  square(x,320,350-i,450 + i);
  stroke('rgb(214,122,138)');
    
  ellipse(50,200,i,i)
  noFill();
  stroke(i+31,131,206);
  strokeWeight(2);
    
  if (y>height) {y=1
  } else{ y+2
        }
    
  strokeWeight(2)
   
  stroke('grey')  
  strokeWeight(3)
  ellipse(x,250,500-i,500-i);
}
  if (x>width){
    x=1
  } else{
    x=x+3
  }
}