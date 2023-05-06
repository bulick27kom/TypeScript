var msg = 'Hello';
var msg2 = 'Hello';
var port3000 = 3000;
var port3001 = 3001;
function startServer(protocol, port) {
    if (port === port3000 || port === port3001) {
        console.log("Server started on ".concat(protocol, "://server:").concat(port));
    }
    else {
        console.error('Invalid port');
    }
    return 'Server started';
}
startServer('http', 3001);
function createAnimation(id, animationName, timingFunction, duration, iterationCount) {
    if (timingFunction === void 0) { timingFunction = 'ease'; }
    // const elem = document.querySelector(`#${id}`) as HTMLElement;
    // if (elem) {
    console.log("".concat(animationName, " ").concat(timingFunction, " ").concat(duration, " ").concat(iterationCount));
    //    elem.style.animation = `${animationName} ${timingFunction} ${duration} ${iterationCount}`;
    // }
}
createAnimation('1', 'rotation', 'ease-in', 3, 'infinite');
