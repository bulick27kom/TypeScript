let id: symbol = Symbol('id');

const data = {
    [id]: 1,
};

console.log('data[id] :>> ', data[id]);

const numBig1: bigint = 1n; // bigint
const numBig2: bigint = 2n; // bigint

console.log(numBig1 + numBig2);
// console.log(numBig1 + 8); // нельзя складывать bigint с обычным числом
