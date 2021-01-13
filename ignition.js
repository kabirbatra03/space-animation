const canvas = document.getElementById('ignition');
const ctx = canvas.getContext('2d');

let numOfpartlces = 600;
let particles = [];

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
    const gradient = ctx.createLinearGradient(200, 300, 400, 0);
    gradient.addColorStop(0, '#f83600');
    gradient.addColorStop(1, '#F9D423');
    ctx.fillStyle = gradient;
    ctx.fill();
    ctx.lineWidth = this.weight;
    ctx.strokeStyle = '#fff';
    ctx.stroke();
  };

  update = () => {
    this.size += 0.1;
    this.weight -= 0.1;
    this.y += Math.random() * 15 + 5;
    if (this.weight < 0) {
      this.x = 343 + Math.floor((Math.random() * canvas.width) / 7);
      this.y = 0;
      this.size = Math.random() * 20 + 2;
      this.weight = Math.random() * 2 + 1;
    }
  };
}

init = () => {
  particles = [];
  for (let i = 0; i < numOfpartlces; i++) {
    let x = 335 + Math.floor((Math.random() * canvas.width) / 6);
    let y = 0;
    let size = Math.random() * 20 + 2;
    let weight = Math.random() * 2 + 1; //speed
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
