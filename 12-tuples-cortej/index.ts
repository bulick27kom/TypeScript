const userData = {
    isBirthdayData: true,
    ageData: 40,
    userNameData: 'John',
    messages: {
        error: 'Error',
    },
};

const userDataTuple: [boolean, number, ...string[]] = [true, 40, 'John', 'Alex', 'Anna'];
const userDataTuple2: [...boolean[], number, string] = [true,true, 40, 'John'];
const [birth, data, userName] = userDataTuple;

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
