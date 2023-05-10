interface ICar {
    name: 'car';
    engine: string;
    wheels: string;
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

interface IComplexVechile {
    name: 'car' | 'ship' | 'airplane';
    engine: string;
    wheels?: number;
    sale?: string;
    wings?: string;
}

type TVechicle = ICar | IShip | IAirplane ;

function isCar(car: TVechicle): car is ICar {
    return 'wheels' in car;
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

function repairVehicle(viehicle: IComplexVechile): void {
    switch (viehicle.name) {
        case 'car':
            console.log(viehicle.wheels! * 2);
            break;
        case 'ship':
            console.log(viehicle.sale);
            break;
        case 'airplane':
            console.log(viehicle.wings);
            break;      
        default:
          //  const smth: never = viehicle;
            console.log('Ouuups');
    }
}

repairVehicle({ name: 'ship', engine: 'engine', sale: 'sale' });
