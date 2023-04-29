const isBirthdayData: boolean = true;
let ageData: number = 40;
const userNameData: string = 'John';


function logBrtMsg(isBirthday, userName, age){
    if (isBirthday) {
        console.log(`Congrats ${userName.toUpperCase()}, age: ${age + 1}`);
      }
      
}

