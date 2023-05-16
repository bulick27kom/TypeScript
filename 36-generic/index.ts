function processingData<T>(data: T): T {
    return data;
}

let res1 = processingData(1);
let res2 = processingData('1');

const num = 10;
const res3 = processingData<number>(num);

interface PrintUK {
    design: number;
}

interface PrintEs {
    design: string;
}

interface Print<T> {
    design: T;
}

const somePrint: Print<string> = {
    design: 'ten',
};
const somePrintNum: Print<number> = {
    design: 10,
};

function processingDataTwoTypes<T, S>(data: T, options: S): T {
    return data;
}

// function processingDataTwoTypes<T, S>(data: T[], options: S): T { //data: T[] - массив
//   return data;
// }
// const rezTmp = processingDataTwoTypes<number, string>([10], 'fast')

const res4 = processingDataTwoTypes<number, string>(10, 'slow');

function processingDataSwitch<T, S>(data: T, options: S): string {
    switch (typeof data) {
        case 'string':
            return `data speed ${data}`;
            break;
        case 'number':
            return `${data.toFixed()}, speed: ${options}`;
            break;
        default:
            return 'not valid';
            break;
    }
}

function processing<T>(data: T): T {
    return data;
}

interface IDataSaver {
    processing: <T>(data: T) => T; // метод оъбекта с дженериком

    //  processing : typeof processing   берем тип из уже объявленой функции
}

const saver: IDataSaver = {
    // 1й вариант записи
    // processing(data) {
    //     console.log(data);
    //     return data;
    // },

    // 2й вариант записи
    // processing: <T>(data: T) => {
    //     return data;
    // },

    // 3й вариант записи
    processing: (data) => {
        return data;
    },

    // 4й вариант
    // processing: processing,
};
