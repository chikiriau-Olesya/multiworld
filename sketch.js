
function setup() {
  createCanvas(1440, 800, WEBGL);
}

function draw() {
  background(0);
  let radius = width * 0.95;

  //drag to move the world.
  orbitControl();

  let locX = mouseX - height / 1.2;
  let locY = mouseY - width / 1.2;

  ambientLight(60, 60, 60);
  pointLight(255, 255, 255, locX, locY, 100);

  ambientMaterial(250);
  noStroke();
  translate(0, 0, -600);

  push();
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  fill(250);
  torus(250);
  pop();

   push();
  rotateZ(frameCount * -0.01);
  rotateX(frameCount * -0.01);
  rotateY(frameCount * -0.01);
  fill(250);
  torus(250);
  pop();

  push();
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  fill(250);
  box(200);
  pop();

  for (let i = 0; i <= 12; i++) {
    for (let j = 0; j <= 12; j++) {
      push();
      let a = (j / 12) * PI;
      let b = (i / 12) * PI;
      translate(
        sin(2 * a) * radius * sin(b),
        (cos(b) * radius) / 2,
        cos(2 * a) * radius * sin(b)
      );
      if (j % 2 === 0) {
        cone(30, 30);
      } else {
        box(30, 30, 30);
      }
      pop();
    }
  }
}
