type Protocol = 'http' | 'https';

const serverConfigTest: BaseConfig = {
    protocol: 'http',
    port: 3000,
};

const backupConfigTest: BaseConfig = {
    protocol: 'https',
    port: 3001,
};

interface BaseConfig {
    protocol: Protocol;
    port: number;
}

const startServerTest = (config: BaseConfig) => {
    console.log(
        `Server ${config.protocol}://someserver.com start on ${config.port} port`
    );
    return 'Server started';
};

startServerTest(serverConfigTest);
startServerTest(backupConfigTest);
