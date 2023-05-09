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

let dbNameTemp: string;

sendUserData(user, 'qsqwewqwe')
console.log(dbNameTemp!);


const dbName = '12345';

function sendUserData(obj: IUser, db?: string): void {
  dbNameTemp = '123123'
    console.log(obj, db?.toLocaleLowerCase());
    console.log(obj.parents!.father?.toLocaleLowerCase(), db!); // ! not null-undefined operator
}

sendUserData(user);
