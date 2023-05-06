let msg: 'Hello' = 'Hello';

let msg2: 'Hello' | 'world' = 'Hello';

const port3000: number = 3000;
const port3001: number = 3001;

function startServer(
    protocol: 'http' | 'https',
    port: 3000 | 3001
): 'Server started' {
    if (port === port3000 || port === port3001) {
        console.log(`Server started on ${protocol}://server:${port}`);
    } else {
        console.error('Invalid port');
    }
    return 'Server started';
}

startServer('http', 3001);

function createAnimation(
    id: string | number,
    animationName: string,
    timingFunction: 'ease' | 'ease-out' | 'ease-in' = 'ease',
    duration: number,
    iterationCount: number | 'infinite'
): void {
    // const elem = document.querySelector(`#${id}`) as HTMLElement;
    // if (elem) {
    console.log(
        `${animationName} ${timingFunction} ${duration} ${iterationCount}`
    );

    //    elem.style.animation = `${animationName} ${timingFunction} ${duration} ${iterationCount}`;
    // }
}

createAnimation('1', 'rotation', 'ease-in', 3, 'infinite');
