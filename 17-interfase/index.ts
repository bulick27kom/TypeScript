type Config = { protocol: 'http' | 'https'; port: 3000 | 3001 };

interface IConfig {
    protocol: 'http' | 'https';
    port: 3000 | 3001;
    log: (msg:string) => void
}

interface IRole {
  role: string;
}

interface IConfigWithRole extends IConfig, IRole{
//  test: string
}

type StartFunction = (protocol: 'http' | 'https', port: 3000 | 3001, log: Function) => string;
//type StartServer = (config :Config) => string;

// const startServer: StartServer = ({protocol, port}: Config):'Server started' => {
//     console.log(`Server ${protocol}://someserver.com start on ${port} port`);
//     return 'Server started'
// }

const serverConfig: StartFunction = (
    protocol: 'http',
    port: 3000,
    log: Function =>{

    }


const startServer: StartFunction = (
    protocol = 'http',
    port,
    
    ): 'Server started' => {
    console.log(`Server ${protocol}://someserver.com start on ${port} port`);
    return 'Server started';
};

startServer('https', 3001, serverConfig.log);
