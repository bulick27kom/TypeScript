type Animal = 'cat' | 'dog' | 'bird';

enum AnimalStatus {
    Available = 'available',
    NotAvailable = 'not available',
}

interface IAnimalData {
    animal: Animal;
    breed: string;
    sterilized?: string;
}

interface IAnimalAvailableData extends IAnimalData {
    location: string;
    age?: number;
}

interface IAnimalNotAvailableData {
    message: string;
    nextUpdateIn: Date;
}

interface IAnimalAvailableResponse {
    status: AnimalStatus.Available;
    data: IAnimalAvailableData;
}

interface IAnimalNotAvailableResponse {
    status: AnimalStatus.Available;
    data: IAnimalNotAvailableData;
}

type Resp = IAnimalAvailableResponse | IAnimalNotAvailableResponse;

function isAvailable(responce: Resp): responce is IAnimalAvailableResponse {
    if (responce.status === AnimalStatus.Available) {
        return true;
    } else {
        return false;
    }
}

function checkAnimalData(animal: Resp): IAnimalAvailableData | string {
    if (isAvailable(animal)) {
        return animal.data;
    } else {
        return `${animal.data}, you can try in ${animal.data.nextUpdateIn}`;
    }
}
