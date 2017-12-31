let angle = 0;
let w = 30;
let angleS;
let maxD;

function setup(){
  createCanvas(400, 400, WEBGL);
  angleS = atan(1 / sqrt(2));
  maxD = dist(0,0,200,200);
}

function draw(){
  background(175);
  ortho(-300, 300, 300, -300, 0, 600);

  rotateX(QUARTER_PI);
  rotateY(angleS);

  for (let z = w; z < height; z += w){
    for (let x = w; x < width; x += w){
      push();
      let d = dist(x,z,width/2,height/2);
      let offset = map(d, 0, maxD, -3, 3);
      let a = angle + offset;
      let h = floor(map(sin(a), -1, 1, 100, 300));
      translate(x - width / 2, 0, z - height / 2);
      normalMaterial(255);
      box(w - 2, h, w - 2);
      //rect(x - width / 2,0,w - 2,h);
      pop();
    }
  }
  angle += 0.1;
}
