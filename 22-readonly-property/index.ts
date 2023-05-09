interface IUser {
    readonly login: string;
    password: string;
    age: number;
    readonly addres?: string;
    parents?: {
        mother?: string;
        father?: string;
    };
}

const user: IUser = {
    login: 'first',
    password: 'qwerty',
    age: 20,
    addres: '',
};

const userFreeze: Readonly<IUser> = {
    login: 'first',
    password: 'qwerty',
    age: 20,
};
// userFreeze.age = 10
// userFreeze.password = ''

//user.login = 'newLogin'; // Can't change readonly property

class Animal {
    readonly name: string = 'name';
}

const basicPorts: readonly number[] = [3000, 3001, 5555];
//basicPorts[1] = 5;
//basicPorts.push(3)

const basicPortsTupl: readonly [number, ...string[]] = [3000, '3001', '5555'];
//basicPortsTupl[1] = 5;
//basicPortsTupl.push(3)

const basicPortsReadonlyArray: ReadonlyArray<number> = [3000, 3001, 5555];