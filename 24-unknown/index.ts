// let smth: any;
let smth: unknown;

smth = 'str';

// let data: string[] = smth;
// data.find((e) => e);

// const someValue: any = 10;
// someValue.method();
//const someValue: unknown = 10;
//someValue.method();

function fetchData(data: unknown): void {
    if (typeof data === 'string') {
        console.log(data.toLowerCase());
    }
}

const userData =
    '{"isBurthdayData": true, "ageData": 40, "userNameData": "John"}';

function safePars(s: string): unknown {
    return JSON.parse(s);
}

const data = safePars(userData);

function transferData(d: unknown): void {
    if (typeof d === 'string') {
        console.log(d.toLowerCase());
    } else if (typeof d === 'object' && d) {
        console.log(d);
    } else {
        console.error('Some error');
    }
}

transferData(data);

try {
    if (1) {
        throw new Error('error message');
    }
} catch (e) {
    if (e instanceof Error) {
        console.log(e.message);
    } else if (typeof e === 'string') {
        console.log(e);
    }
}

type T0 = any | unknown;
type T1 = number | unknown; // при пересечениитипов, тип unknown перекрывает все типы кроме any

type T2 = any & unknown;
type T3 = number & unknown; //// при объедитенеии, тип unknown перекрывается любым типом
