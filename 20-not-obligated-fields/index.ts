interface IUser {
    login: string;
    password: string;
    age: number;
    //addres?: string;
    addres: string | undefined;
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

const dbName = '12345';

function sendUserData(obj: IUser, db?: string): void {
    console.log(obj, db?.toLocaleLowerCase());
    console.log(obj.parents?.father?.toLocaleLowerCase());
}

sendUserData(user);
