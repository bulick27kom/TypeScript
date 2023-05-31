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
}; // добавляя - или + перед модификатором,
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

///////////////////////////   46   ////////////////////////////////////////////

type MyAnimation = 'fade' | 'swipe';
type DirectionAnimation = 'in' | 'out';

//type MyNewAnimation = `${MyAnimation}In`;
//type MyNewAnimation = `${MyAnimation}${DirectionAnimation}`;
type MyNewAnimation = `${MyAnimation}${Capitalize<DirectionAnimation>}`; // Capitalize работает только со строками

//////////////////////////////////////////////////////////////////

type Currencies46 = {
    usd: 'usd';
    chine: 'chy';
    ukraine: 'uah';
    kz: 'tenge';
};

type CreateCustomCurr46<T> = {
    [P in keyof T as `custom${Capitalize<string & P>}`]: string;
};

type CuestCurr46 = CreateCustomCurr46<Currencies>;
