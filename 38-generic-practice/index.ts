interface IPlayerData<Game, Hours> {
    game: Game;
    hours: Hours;
    server: string;
}

const player1: IPlayerData<string, number> = {
    game: 'CS-Go',
    hours: 300,
    server: 'basic',
};

const player2: IPlayerData<number, string> = {
    game: 2048,
    hours: '300 h',
    server: 'arcade',
};

//const player3: IPlayerData<string, { total: number; inMenu: number }> = {
const player3: IPlayerData<string, object> = {
    game: 'chess',
    hours: {
        total: 500,
        inMenu: 50,
    },
    server: 'chess',
};

//////////////////////////////////////////////////////////

interface AmountOfFigures {
    squares: number;
    circles: number;
    triangles: number;
    others: number;
}

enum FigureNames {
    Rectangle = 'rect',
    Triangle = 'triangle',
    Line = 'line',
    Circle = 'circle',
}

interface IFigure {
    name: FigureNames;
}

function calculateAmountOfFigures<T extends IFigure>(
    figure: T[]
): AmountOfFigures {
    const rez = {
        squares: 0,
        circles: 0,
        triangles: 0,
        others: 0,
    };
    figure.forEach((element) => {
        switch (element.name) {
            case FigureNames.Circle:
                rez.circles += 1;
                break;
            case FigureNames.Rectangle:
                rez.squares += 1;
                break;
            case FigureNames.Triangle:
                rez.triangles += 1;
                break;
            default:
                rez.others++;
        }
    });
    return rez;
}

const data = [
    {
        name: FigureNames.Rectangle,
        data: { a: 5, b: 10 },
    },
    {
        name: FigureNames.Rectangle,
        data: { a: 6, b: 11 },
    },
    {
        name: FigureNames.Triangle,
        data: { a: 5, b: 10, c: 14 },
    },
    {
        name: FigureNames.Line,
        data: { l: 15 },
    },
    {
        name: FigureNames.Circle,
        data: { r: 10 },
    },
    {
        name: FigureNames.Circle,
        data: { r: 5 },
    },
    {
        name: FigureNames.Rectangle,
        data: { a: 15, b: 7 },
    },
    {
        name: FigureNames.Triangle,
    },
];

console.log(calculateAmountOfFigures(data));

//////////////////////////////////////////////////
