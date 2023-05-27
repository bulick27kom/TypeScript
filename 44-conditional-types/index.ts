// Condition ? true : false
// SomeType extends OterType ? TrueType : FalseType
type Excample = 'string' extends 'Hello' ? string : number; //false

type Excample2 = 'Hello' extends string ? string : number; //true

type FromUserOrFromBase<T extends string | number> = T extends string
    ? IDataFromUser
    : IDataFromBase;

interface User<T extends 'created' | Date> {
    created: T extends 'created' ? 'created' : Date;
}
const user: User<'created'> = {
    created: 'created',
};

interface IDataFromUser {
    weight: string;
}

interface IDataFromBase {
    calories: number;
}
