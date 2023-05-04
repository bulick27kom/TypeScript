const testNull: null = null;
const testAny: any = null;
const testUndefined = undefined;

let something; // type is any

function getRandomData() {
    if (Math.random() > 0.5) {
        return null;
    } else {
        return '  Some string  ';
    }
}

const data = getRandomData();
const trimmedData = data ? data.trim() : null;
console.log('trimmedData :>> ', trimmedData);
