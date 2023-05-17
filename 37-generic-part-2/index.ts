interface ProcessingFn {
    <T>(data: T): T;
}

function processing<T>(data: T): T {
    return data;
}

let newFunc: ProcessingFn = processing;

type SmthType<T> = T; // generic type
const num: SmthType<number> = 5;

type User<T> = {
    login: T;
    age: number;
};
const user: User<string> = {
    login: 'Login',
    age: 20,
};

type OrNull<Type> = Type | null;
type OneOrMany<Type> = Type | Type[];

const data: OneOrMany<number[]> = [5, 3];

interface ParentsOfUser {
    mother: string;
    father: string;
}

interface IUser<ParentsData extends ParentsOfUser> {
    login: string;
    age: number;
    parants: ParentsData;
}

const userWithParants: IUser<{
    mother: string;
    father: string;
    married: boolean;
}> = {
    login: 'userName',
    age: 20,
    parants: {
        mother: 'Mother',
        father: 'no father',
        married: false,
    },
};

// const depositMoney = <T extends number | string>(amount: T): T => {
//     console.log(`req to server with amoun: ${amount}`);
//     return amount;
// };

// depositMoney(500);
// depositMoney('500');

const depositMoney = (amount: number | string): number | string => {
    console.log(`req to server with amoun: ${amount}`);
    return amount;
};

depositMoney(500);
depositMoney('500');
