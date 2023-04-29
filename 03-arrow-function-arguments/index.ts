const isBirthdayData: boolean = true;
let ageData: number = 40;
const userNameData: string = 'John';

function logBrtMsg(isBirthday: boolean, userName: any, age: number): string {
  if (isBirthday) {
    //console.log(`Congrats ${userName.toUpperCase()}, age: ${age + 1}`);
    return `Congrats ${userName.toUpperCase()}, age: ${age + 1}`;
  } else {
    return 'error';
  }
}

// logBrtMsg(); // не запустится без аргументов
logBrtMsg(isBirthdayData, userNameData, ageData);

const rez = logBrtMsg(true, 'Vasya', 34);
console.log(rez);
