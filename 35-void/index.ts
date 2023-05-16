type voidFunc = () => void;

const retString: voidFunc = () => {
    return 'some string';
};

const s = retString();

const retNum: voidFunc = () => {
    return 5;
};

const n = retNum();

const names: string[] = ['Anna', 'John'];
const newArr = names.slice();

names.forEach( (name, i , arr) => {
  arr.push('Hey!')
} )