function printMessage(mes: string[] | number | boolean): void {
    if (Array.isArray(mes)) {
        mes.forEach((element) => {
            console.log(element);
        });
    } else if (isNumber(mes)) {
        console.log(mes.toFixed());
    } else {
        console.log(mes);
    }
}

printMessage(4);

// function isNumber(n: string[] | number | boolean): n is number {
//     return typeof n === 'number';
// }

function isNumber(n: unknown): n is number {
    return typeof n === 'number';
}

interface ICar {
    name: 'car';
    engine: string;
    wheels: {
        number: number;
        type: string;
    };
    color: string;
}

interface IShip {
    name: 'ship';
    engine: string;
    sale: string;
}

interface IAirplane {
    name: 'airplane';
    engine: string;
    wings: string;
}

interface ISuperAirplane {
    name: 'superairplane';
    engine: string;
    wings: string;
}

type TVechicle = ICar | IShip | IAirplane | ISuperAirplane;

function isCar(car: TVechicle): car is ICar {
    // return 'wheels' in car;
    return (car as ICar).wheels?.number !== undefined;
}

function isShip(ship: TVechicle): ship is IShip {
    // return 'sale' in ship;
    return (ship as IShip).sale !== undefined;
}

// function repairVehicle(viehicle: TVechicle): void {
//     if (isCar(viehicle)) {
//         console.log('viehicle is car');
//     } else if (isShip(viehicle)) {
//         console.log('viehicle is ship');
//     } else {
//         console.log(viehicle.wings);
//     }
// }
function repairVehicle(viehicle: TVechicle): void {
    switch (viehicle.name) {
        case 'car':
            console.log(viehicle.wheels);
            break;
        case 'ship':
            console.log(viehicle.sale);
            break;
        case 'airplane':
            console.log(viehicle.wings);
            break;
        case 'superairplane':
            console.log(viehicle.wings);
            break;
        default:
            const smth: never = viehicle;
            console.log('Ouuups');
    }
}

repairVehicle({ name: 'ship', engine: 'engine', sale: 'sale' });
