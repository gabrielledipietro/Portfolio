// video source: https://vimeo.com/90312869
let img;
let vid;
let theta = 0;

function setup() {
  let myCanvas = createCanvas(75, 75, WEBGL);
  myCanvas.parent("myContainer");

  img = loadImage("/images/3d/orange2.jpg");
}

function draw() {
  background(220, 222, 226);
  translate(0, 0, 0);
  push();
  rotateZ(theta * mouseX * 0.001);
  rotateX(theta * mouseX * 0.001);
  rotateY(theta * mouseX * 0.001);
  //pass image as texture
  texture(img);
  sphere(30);
  pop();
  // translate(100, 0, 0);
  // push();
  // rotateX(theta * 0.1);
  // rotateY(theta * 0.1);
  // rotateZ(theta * 0.1);
  // texture(img);
  // box(100, 100, 100);
  // pop();
  theta += 0.05;
}
