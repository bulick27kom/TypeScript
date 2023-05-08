type Goods = 'empty' | number;

// Склад с одеждой
interface IClothesWerehouse {
    jackets: Goods;
    hats: Goods;
    socks: Goods;
    pants: Goods;
}

// Склад канцтоваров
interface IStationeryWarehouse {
    scissors: Goods;
    paper: 'empty' | boolean;
}

// склад с бытовой химией
interface IAppliancesWarehouse {
    dishwashers: Goods;
    cookers: Goods;
    mixers: Goods;
}

// общая структура данных, наследует все вышеуказанные + добовляет свои
interface ITotalWarehouse
    extends IClothesWerehouse,
        IStationeryWarehouse,
        IAppliancesWarehouse {
    deficit: boolean;
    date: Date;
}

const totalData: ITotalWarehouse = {
    jackets: 5,
    hats: 'empty',
    socks: 'empty',
    pants: 15,
    scissors: 15,
    paper: true,
    dishwashers: 3,
    cookers: 'empty',
    mixers: 14,
    deficit: false,
    date: new Date(),
};

function printReport(data: ITotalWarehouse): string {
    const result: string = Object.entries(data)
        .filter((item) => item[1] === 'empty')
        .reduce((res, item) => `${res} ${item[0]},`, '');

    if (result.trim().length) {
        return `We need this items:${result.slice(0, -1)}`;
    } else {
        return 'Everything fine';
    }
}

console.log(printReport(totalData));
