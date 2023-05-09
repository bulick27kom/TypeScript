const TOP = 'Top';
const RIGHT = 'Right';

enum Directions {
    TOP,
    RIGHT,
    LEFT,
    BOTTOM,
}

enum TimingFunction {
    EASE = 'ease',
    EASE_IN = `${EASE}-in`,
    LINEAR = 'linear',
}

enum TimingFunctionN {
    EASE = 3,
    EASE_IN = 5,
    LINEAR = EASE * 2,
}

function frame(element: string, dir: Directions, tFunc: TimingFunction): void {
    if (dir === Directions.RIGHT) {
        console.log(tFunc, dir);
    }
}

frame('id', Directions.RIGHT, TimingFunction.LINEAR);
