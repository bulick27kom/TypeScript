const isBirthdayData: boolean = true;
let ageData: number = 40;
const userNameData: string = 'John';

const createError = (message: string) => {
    throw new Error(message);
};

function logBrtMsg(isBirthday: boolean, userName: any, age: number): string {
    if (isBirthday === true) {
        return `Congrats ${userName.toUpperCase()}, age: ${age + 1}`;
    } else if (isBirthday === false) {
        return 'Too bad';
    }
    return createError('Error');
}

logBrtMsg(isBirthdayData, userNameData, ageData);
