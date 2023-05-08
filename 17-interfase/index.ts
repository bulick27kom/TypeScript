type Config = { protocol: 'http' | 'https'; port: 3000 | 3001 };
interface IConfig {
    protocol: 'http' | 'https';
    port: 3000 | 3001;
    log: (msg: string) => void;
}

type Role = { role: string };
interface IRole {
    role: string;
}

// type Config = {
//     date: Date;
// };
interface IConfig {
    date: Date;
}

type ConfigWithRole = Config & Role;
interface IConfigWithRole extends IConfig, IRole {
    // extraValue: string;
}

const serverConfig: IConfigWithRole = {
    protocol: 'http',
    port: 3000,
    role: 'admin',
    date: new Date(),
    log: (msg: string): void => {
        console.log(msg);
    },
};

type StartFunction = (
    protocol: 'http' | 'https',
    port: 3000 | 3001,
    // log: Function
    log: (msg: string) => void
) => string;

const startServer: StartFunction = (
    protocol: 'http' | 'https',
    port: 3000 | 3001,
    log: (msg: string) => void
): 'Server started' => {
    log(`Server ${protocol}://someserver.com start on ${port} port`);
    return 'Server started';
};

startServer('https', 3001, console.log);

startServer(serverConfig.protocol, serverConfig.port, serverConfig.log);

interface Styles {
    [key: string]: string;
}

const styles: Styles = {
    position: 'absolute',
    top: '20px',
    left: '50px',
};
