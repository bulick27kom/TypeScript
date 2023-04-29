let salary; //тип any
salary = 5000;

const userData =
  '{"isBirthdayData": true, "ageData": 40, "userNameData": "John"}';

const userObj: {
  isBirthdayData: boolean;
  ageData: number;
  userNameData: string;
} = JSON.parse(userData); //JSON.parse возвращает тип any

//console.log(userObj.smt()); // будет ошибка из за типизации объекта выше

function logBrtMsg(isBirthday: boolean, userName: any, age: number): string {
  if (isBirthday) {
    return `Congrats ${userName.toUpperCase()}, age: ${age + 1}`;
  } else {
    return 'error';
  }
}
