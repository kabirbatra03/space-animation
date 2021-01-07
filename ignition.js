const canvas = document.getElementById('ignition');
const ctx = canvas.getContext('2d');

let numOfpartlces = 600;
let particles = [];

setInterval(() => {
  x = undefined; //canvas.width = undefined and set to false/true using button for start/stop
  y = undefined;
}, 200);

class Particle {
  constructor(x, y, size, weight) {
    this.x = x;
    this.y = y;
    this.size = size;
    // this.color = color;
    this.weight = weight;
  }

  draw = () => {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = 'crimson';
    ctx.fill();
  };

  update = () => {
    // this.size -= 0.005;
    // if (this.size < 0) {
    //   // this.x = mouse.x + Math.random() * 20 - 10;
    //   // this.y = mouse.y + Math.random() * 20 - 10;
    //   this.size = Math.random() * 5 + 2;
    //   this.weight = Math.random() * 20 - 0.5;
    // }
    this.size = Math.random() * 5 + 2;
    this.weight = Math.random() * 20 + 5;
    this.y += this.weight;
    // this.weight += 0.00001; //speed

    if (this.y > canvas.height - this.size) {
      // this.weight *= -1;
      this.y = 0;
    }
  };
}

init = () => {
  particles = [];
  for (let i = 0; i < numOfpartlces; i++) {
    let x = Math.floor((Math.random() * canvas.width) / 8 + 358); // ignition width
    let y = 0;
    let size = Math.random() * 5 + 2;
    let weight = 1; //speed
    // let color = '#fff';
    particles.push(new Particle(x, y, size, weight));
  }
};

animate = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < numOfpartlces; i++) {
    particles[i].update();
    particles[i].draw();
  }
  requestAnimationFrame(animate);
};

init();
animate();
