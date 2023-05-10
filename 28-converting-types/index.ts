const num = new Number(5); // классовая обертка
const numLiteral = 5; //литерал

console.log(num == numLiteral);
console.log(num === numLiteral); // не равны

let num2: Number = new Number(5);
let num3: number = 5; // примитив
let num4 = Number(5); // тоже примитив

num2 = num3; // можно number преобразуется в Number
// num3 = num2; // нельзя Number нелья преобразовать в number

////////////////////////////////////////
// преобразование примитивов
const num10 = 10;
const strNum: string = num10.toString();

const str = '5';
const numStr: number = +str;

//////////////////////////////
//    преобразование объектов

interface Department {
    name: string;
    budget: number;
}

const department = {
    name: 'web-dev',
    budget: 50000,
};

interface Project {
    name: string;
    projectBuget: number;
}

const mainProject: Project = {
    ...department,
    projectBuget: 1000,
};

console.log(mainProject);

function tranformDepartment(department: Department, amount: number): Project {
    return {
        name: department.name,
        projectBuget: amount,
    };
}

const mainProjectTransform: Project = tranformDepartment(department, 2000);
console.log(mainProjectTransform);

