const fetchData = (url: string, method: 'GET' | 'POST'): void => {
    console.log(method);
};

// const requestOptions: { url: string; method: 'GET' | 'POST' } = {
//     url: 'https://someurl.com',
//     method: 'GET',
// };

// const requestOptions = {
//     url: 'https://someurl.com',
//     method: 'GET' as "GET",
// };

// const requestOptions = {
//   url: 'https://someurl.com',
//   method: 'GET' as "GET",
// } as const;

const requestOptions = {
    url: 'https://someurl.com',
    method: 'GET',
};

fetchData('111', 'GET');

//fetchData(requestOptions.url, requestOptions.method as 'GET');

//fetchData(requestOptions.url, requestOptions.method );

fetchData(requestOptions.url, <'GET'>requestOptions.method);

const box = document.querySelector('.box') as HTMLElement;
box.style;
box?.classList;

const input = document.querySelector('input') as HTMLInputElement;
//const someNumber: number =  +input.value
const someNumber: number = input.value as any as number;
console.log(someNumber * 2);

const input2 = <HTMLInputElement>document.querySelector('input');

let a = 'value' as const;

let b = { f: 100 } as const;
let c = [] as const;

let value = 'value';
let arr = ['asd', 'asdda'];
let obj = { f: 100 };

// let T0 = value as const // ошибка
// let T1 = arr as const  // ошибка
// let T2 = obj as const // ошибка

// let T5 = (Math.round(Math.random() * 1) ? 'yes' : 'no') as const; // ошибка
