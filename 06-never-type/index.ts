const isBirthdayData: boolean = true;
let ageData: number = 40;
const userNameData: string = 'John';

const createError = (message: string) => {
  throw new Error(message);
};

function logBrtMsg(isBirthday: boolean, userName: any, age: number): string {
  if (isBirthday) {
    //console.log(`Congrats ${userName.toUpperCase()}, age: ${age + 1}`);
    return `Congrats ${userName.toUpperCase()}, age: ${age + 1}`;
  } else {
    return createError('Error');
  }
}

logBrtMsg(isBirthdayData, userNameData, ageData);
