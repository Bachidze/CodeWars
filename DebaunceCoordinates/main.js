function mouseCoordinates(delay, cb) {
    let timer;

    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            cb(...args);
        }, delay);
    };
}

function catchMouseCoordinate(event) {
    console.log(` X - ${event.clientX}, Y - ${event.clientY}`);
}

const debouncedMouseCoordinates = mouseCoordinates(100, catchMouseCoordinate);

document.addEventListener('mousemove', debouncedMouseCoordinates);
