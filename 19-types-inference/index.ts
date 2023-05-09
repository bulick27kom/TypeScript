let a = 'string';
let salary;
salary = 400;

interface IUserData {
    isBurthdayData: boolean;
    ageData: number;
    userNameData: string;
}

const userData =
    '{"isBurthdayData": true, "ageData": 40, "userNameData": "John"}';

const userDataObject = {
    isBurthdayData: true,
    ageData: 40,
    userNameData: 'John',
};

const array = ['str', 5];

const userObj: IUserData = JSON.parse(userData);
console.log(userObj);

const isOkay: boolean = true; // переменная с типом boolean
const isOkayLiteral = true; // литерал со значеним true

let movement: boolean | string = false;

if (isOkay) {
    movement = 'moving';
}
