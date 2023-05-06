let msg: 'Hello' = 'Hello';
let msg2: 'Hello' | 'world' = 'Hello';

const port3000: number = 3000;
const port3001: number = 3001;

type Config = { protocol: 'http' | 'https'; port: 3000 | 3001 };

type Role = { role: string };

type ConfigWithRole = Config & Role;

type StartFunction = (protocol: 'http' | 'https', port: 3000 | 3001) => string;

const serverConfig: Config = {
    protocol: 'https',
    port: 3001,
};

const serverConfigWithRole: ConfigWithRole = {
    protocol: 'https',
    port: 3001,
    role: 'user',
};

const backupConfig: Config = {
    protocol: 'http',
    port: 3001,
};

const startServer: StartFunction = (
    protocol: 'http' | 'https',
    port: 3000 | 3001
): 'Server started' => {
    console.log(`Server started on ${protocol}://server:${port}`);
    return 'Server started';
};

startServer(serverConfig.protocol, serverConfig.port);

type AnimationTimingFunction = 'ease' | 'ease-out' | 'ease-in'; // type alias
type AnimationId = string | number;

function createAnimation(
    id: AnimationId,
    animationName: string,
    timingFunction: AnimationTimingFunction = 'ease',
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
