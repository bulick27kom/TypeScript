//interface тоже работает
type Currencies = {
    usd: 'usd';
    chine: 'chy';
    ukraine: 'uah';
    kz: 'tenge';
};
// тут только type
type CreateCustomCurr<T> = {
    readonly [P in keyof T]?: string; //можно добавить readonly для свойств и опциональность ?
};                                    // добавляя - или + перед модификатором, 
                                     //позволяет снимать или добовлять их к набору свойств
                                     // -readonly [P in keyof T]+?
type CustomCurrencies = CreateCustomCurr<Currencies>;

type CustomCurrenciesHardcode = {
    usd: string;
    chine: string;
    ukraine: string;
    kz: string;
};

// type СопоставимыйТип = {
//     [произвольныйИдентификатор in Множество]: ПроизвольныйТипДанных;
// };

type Keys = 'name' | 'age' | 'role';

type User = {
    [K in Keys]: string;
};

const user1: User = {
    name: 'Alex',
    age: '25',
    role: 'user',
};
