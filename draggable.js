
let draggingElement;

function onMouseDown(event) {
    event.preventDefault();
    if(event.target.matches('.draggable-item')) {
        draggingElement = event.target
        console.log('mousedown', event)
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    }
}

function onMouseMove(event) {
    draggingElement.style.top = `${event.clientY}px`
    draggingElement.style.left = `${event.clientX}px`
    draggingElement.style.color = 'blue';
    draggingElement.style.position = 'absolute';
    draggingElement.style.top = '20px';

    console.log('mousemove', event)
}

function onMouseUp(event) {
    console.log('mouseup', event)
    document.removeEventListener('mousemove', onMouseMove)
    document.removeEventListener('mouseup', onMouseUp)
}

document.addEventListener('mousedown', onMouseDown);

