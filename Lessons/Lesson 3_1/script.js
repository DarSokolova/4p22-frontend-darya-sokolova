'use strict';

let someVarible = 'Hello world';
const someConstant = 'Hello World'

const circle = document.querySelector('.circle');
let isMoving = false;

document.addEventListener('mousemove' , (event) => {
    if (!isMoving) {
        return;
    }

    circle.style.left = `${event.clientX}px` ;
    circle.style.top =  `${event.clientY}px` ;
});

circle.addEventListener('click', () => {
    isMoving = !isMoving;
})

