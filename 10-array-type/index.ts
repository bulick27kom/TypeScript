const userData = {
    isBirthdayData: true,
    ageData: 40,
    userNameData: 'John',
    messages: {
        error: 'Error',
    },
};

const createError = (msg: string) => {
    throw new Error(msg);
};

function logBrtMsg({
    isBirthdayData,
    userNameData,
    ageData,
    messages: { error },
}: {
    isBirthdayData: boolean;
    userNameData: any;
    ageData: number;
    messages: { error: string };
}): string {
    if (isBirthdayData) {
        return `Congrats ${userNameData.toUpperCase()}, age: ${ageData + 1}`;
    } else {
        return createError(error);
    }
}

console.log(logBrtMsg(userData));

const departments: string[] = ['dev', 'design', 'marketing'];
const department = departments[0];
departments.push('test');

const report = departments
    .filter((d: string) => d !== 'dev')
    .map((d: string) => `${d} - done`)

const nums: number[] = [1, 2, 3, 4, 5];
const matrix: number[][] = [[1, 2, 3], [4, 5, 6], [7]];


const [first] = report
console.log('first :>> ', first);