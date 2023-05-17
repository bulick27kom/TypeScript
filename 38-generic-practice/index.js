var player1 = {
    game: 'CS-Go',
    hours: 300,
    server: 'basic',
};
var player2 = {
    game: 2048,
    hours: '300 h',
    server: 'arcade',
};
var player3 = {
    game: 'chess',
    hours: {
        total: 500,
        inMenu: 50,
    },
    server: 'chess',
};
var FiguresNames;
(function (FiguresNames) {
    FiguresNames["Rectangle"] = "rect";
    FiguresNames["Triangle"] = "triangle";
    FiguresNames["Line"] = "line";
    FiguresNames["Circle"] = "circle";
})(FiguresNames || (FiguresNames = {}));
function calculateAmountOfFigures(figure) {
    var rez = {
        squares: 0,
        circles: 0,
        triangles: 0,
        others: 0,
    };
    figure.forEach(function (element) {
        switch (element.name) {
            case FiguresNames.Circle:
                rez.circles += 1;
                break;
            case FiguresNames.Line:
                rez.others += 1;
                break;
            case FiguresNames.Rectangle:
                rez.others += 1;
                break;
            case FiguresNames.Triangle:
                rez.triangles += 1;
                break;
        }
    });
    return rez;
}
var data = [
    {
        name: 'rect',
        data: { a: 5, b: 10 },
    },
    {
        name: 'rect',
        data: { a: 6, b: 11 },
    },
    {
        name: 'triangle',
        data: { a: 5, b: 10, c: 14 },
    },
    {
        name: 'line',
        data: { l: 15 },
    },
    {
        name: 'circle',
        data: { r: 10 },
    },
    {
        name: 'circle',
        data: { r: 5 },
    },
    {
        name: 'rect',
        data: { a: 15, b: 7 },
    },
    {
        name: 'triangle',
    },
];
console.log(calculateAmountOfFigures(data));
