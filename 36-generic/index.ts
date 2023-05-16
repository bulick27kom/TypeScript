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
