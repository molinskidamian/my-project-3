const div = document.querySelector('div');
let elementSelected = false;
let divX = 150;
let divY = 150;
let divCatchX = 0;
let divCatchY = 0;

div.style.left = `${divX}px`;
div.style.top = `${divY}px`;

function selectElement(e) {
  if (!elementSelected) {
    div.classList.add('selected');
    elementSelected = true;

    div.addEventListener('mousemove', moveElement);
    console.log(`Złapano element za współrzędne: X: ${e.offsetX} Y: ${e.offsetY}`);
    divCatchX = e.offsetX;
    divCatchY = e.offsetY;
  }
}

function unSelectElement(e) {
  if (elementSelected) {
    div.classList.remove('selected');
    elementSelected = false;
    console.log(`Nowa pozycja elementu: (${e.clientX},${e.clientY})`);
    div.removeEventListener('mousemove', moveElement);
  }
}

function moveElement(e) {
  divX = e.clientX;
  divY = e.clientY;
  div.style.left = `${divX - divCatchX}px`;
  div.style.top = `${divY - divCatchY}px`;
}

div.addEventListener('mousedown', selectElement, true);
div.addEventListener('mouseup', unSelectElement, true);
