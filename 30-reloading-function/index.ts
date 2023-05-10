interface ISquare {
    side: number;
    area: number;
}

interface IRectangle {
    a: number;
    b: number;
    area: number;
}

function calculateArea(side: number): ISquare;
function calculateArea(a: number, b: number): IRectangle;
function calculateArea(a: number, b?: number): ISquare | IRectangle {
    if (b) {
        const rect: IRectangle = {
            a,
            b,
            area: a * b,
        };
        return rect;
    } else {
        const squere: ISquare = {
            side: a,
            area: a * a,
        };
        return squere;
    }
}

console.log(calculateArea(5));
console.log(calculateArea(4, 56));
