const arr: Array<number> = [1, 2, 3];

const arr1: number[] = [1, 2, 3];

const roarr: ReadonlyArray<string> = ['dfgdf', 'dfgdfg', 'dfgdfg'];
//roarr[0] = 'qweqwe' //будет ошибка

interface IState {
    data: {
        name: string;
    };
    tag?: string;
}

const state: Partial<IState> = {
    data: {
        name: 'John',
    },
};

const strictState: Required<IState> = {
    data: {
        name: 'asdasd',
    },
    tag: 'asas',
};

function action(state: Readonly<IState>) {
    // state.data = 'aasdasdasd';
    state.data.name = 'asdasd';
    // state.tag = 'tag';
}
