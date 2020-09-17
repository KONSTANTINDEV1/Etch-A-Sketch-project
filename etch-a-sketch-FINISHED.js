// Todo: Select the elements on the page - canvas, shake button

const canvas = document.querySelector('#etch-a-sketch');

const shakebutton = document.querySelector('.shake');

const ctx = canvas.getContext('2d');

const MOVE_AMOUNT = 10;

// Todo: 2 Setup our canvas for drawing
// Todo: 3 Make a variable called width and hieght from the same properties on our canvas
const { width, height } = canvas;

// Todo: 4 create random x and y tarting points on the canvas
let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = MOVE_AMOUNT;

ctx.beginPath(); // start the drawing
ctx.lineTo(x, y);
ctx.moveTo(x, y);
ctx.stroke();
// Todo: 3 Write draw function
function draw({ key }) {
  console.log(key);
  // start the path
  ctx.beginPath();
  ctx.moveTo(x, y);
  // move x and y values depending on what the user has done
  switch (key) {
    case 'ArrowUp':
      y -= MOVE_AMOUNT;
      break;
    case 'ArrowRight':
      x += MOVE_AMOUNT;
      break;
    case 'ArrowDown':
      y += MOVE_AMOUNT;
      break;
    case 'ArrowLeft':
      x -= MOVE_AMOUNT;
      break;
    default:
      break;
  }
  ctx.lineTo(x, y);
  ctx.stroke();
}

// Todo: 4write a handler for the keys
function handleKey(e) {
  if (e.key.includes('Arrow')) {
    e.preventDefault();
    draw({ key: e.key });
  }
}
// Todo: 5clear/shke function
function clearCanvas() {
  canvas.classList.add('shake');
  ctx.clearRect(0, 0, width, height);
  canvas.addEventListener(
    'animationend',
    function() {
      canvas.classList.remove('shake');
    },
    { once: true }
  );
}
// Todo: 6 listen for arrow keys
window.addEventListener('keydown', handleKey);
shakebutton.addEventListener('click', clearCanvas);
