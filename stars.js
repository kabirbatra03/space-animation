const canvas3 = document.getElementById('stars');
const ctx3 = canvas3.getContext('2d');
canvas3.height = window.innerHeight;
canvas3.width = window.innerWidth;
const numOfstars = 150;
let stars = [];

class Star {
  constructor(x3, y3, size3, weight3, boolean) {
    this.x3 = x3;
    this.y3 = y3;
    this.size3 = size3;
    this.weight3 = weight3;
    this.boolean = boolean;
  }

  draw3 = () => {
    ctx3.beginPath();
    ctx3.arc(this.x3, this.y3, this.size3, 0, Math.PI * 2);
    ctx3.fillStyle = '#fff';
    // ctx3.shadowBlur = Math.floor(Math.random() * 10 + 1);
    // ctx3.shadowColor = 'white';
    ctx3.fill();
  };

  update3 = () => {
    if (this.boolean % 13 == 0) {
      this.size3 = Math.random() * 3 + 1; ///twinkle
      this.weight3 = Math.random() * 0.2 + 0.1;
    } else if (this.boolean % 7 == 0) {
      this.size3 = Math.random() * 2 + 2;
      this.weight3 = Math.random() * 0.3 + 0.2;
    } else if (this.boolean % 3 == 0) {
      this.size3 = Math.random() * 2 + 1;
      this.weight3 = Math.random() * 0.4 + 0.3;
    } else {
      this.size3 = Math.random() * 1 + 1; ///twinkle
      this.weight3 = Math.random() + 0.3;
    }
    this.y3 += this.weight3;
    // this.weight3 += 0.01; //////acceleration
    if (this.y3 > canvas3.height - this.size3) {
      // this.weight3 *= -1; /////bounce
      this.y3 = 0;
    }
  };
}

init3 = () => {
  stars = [];
  for (let i = 0; i < numOfstars; i++) {
    let x3 = Math.random() * canvas3.width;
    let y3 = Math.random() * canvas3.height;
    let size3 = Math.random() * 10 + 2;
    let weight3 = 0.7; //////weight3 is speeddddddd
    let boolean = i;
    stars.push(new Star(x3, y3, size3, weight3, boolean));
  }
};

animate3 = () => {
  ctx3.clearRect(0, 0, canvas3.width, canvas3.height);
  for (let i = 0; i < numOfstars; i++) {
    stars[i].update3();
    stars[i].draw3();
  }
  requestAnimationFrame(animate3);
};

init3();
animate3();
