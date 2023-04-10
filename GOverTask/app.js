const container = document.getElementById('container');
const image = document.getElementById('image');
const gameOverArea = document.getElementById('game-over-area');

const containerRect = container.getBoundingClientRect();
const containerWidth = containerRect.width;
const containerHeight = containerRect.height;

let imageX = containerWidth / 2;
let imageY = containerHeight / 2;

image.style.left = imageX + 'px';
image.style.top = imageY + 'px';

document.addEventListener('keydown', (event) => {
  switch (event.keyCode) {
    case 37: // Left arrow
      imageX = Math.max(imageX - 10, 0);
      break;
    case 38: // Up arrow
      imageY = Math.max(imageY - 10, 0);
      break;
    case 39: // Right arrow
      imageX = Math.min(imageX + 10, containerWidth - image.width);
      break;
    case 40: // Down arrow
      imageY = Math.min(imageY + 10, containerHeight - image.height);
      break;
  }

  image.style.left = imageX + 'px';
  image.style.top = imageY + 'px';

  const imageRect = image.getBoundingClientRect();
  const imageCenterX = imageRect.left + imageRect.width / 2;
  const imageCenterY = imageRect.top + imageRect.height / 2;

  const gameOverAreaRect = gameOverArea.getBoundingClientRect();
  const gameOverAreaLeft = gameOverAreaRect.left;
  const gameOverAreaRight = gameOverAreaRect.right;
  const gameOverAreaTop = gameOverAreaRect.top;
  const gameOverAreaBottom = gameOverAreaRect.bottom;

  if (imageCenterX >= gameOverAreaLeft && imageCenterX <= gameOverAreaRight &&
      imageCenterY >= gameOverAreaTop && imageCenterY <= gameOverAreaBottom) {
    alert('GAME OVER');
  }
});
