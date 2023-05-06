const message: string | number = 5;
const messages: string[] | number[] = ['a', 'b'];

// function printMessage(mes: string | number): void {
//     if (typeof mes === 'string') {
//         console.log(mes.toLowerCase());
//     } else {
//         console.log(mes.toExponential());
//     }
// }

function printMessage(mes: string[] | number | boolean): void {
    if (Array.isArray(mes)) {
        mes.forEach((element) => {
            console.log(element);
        });
    } else if (typeof mes === 'number') {
        console.log(mes.toFixed());
    } else {
        console.log(mes);
    }
}

printMessage(4);

const printReadings = (a: number | string, b: number | boolean) => {
  if (a === b){
    console.log(`${a} eqals ${b}`);
  }
};

const printReadings2 = (a: number[] | string) => {
  console.log(a.slice(0,3));
};

function checkReadings ( readings: {system: number} | {user:number}):void{
   if ('system' in readings){
    console.log(readings.system);
   }else{
    console.log(readings.user);
    
   }
}

function logValue(x : string | Date){
  if (x instanceof Date){
    console.log(x.getDate);
  }else{
    console.log(x.trim());
  }
}