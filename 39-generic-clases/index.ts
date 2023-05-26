class User<T, S> {
    name: T;
    age: S;
    constructor(name: T, age: S) {
        this.name = name;
        this.age = age;
    }

    sayMyFullName<T>(surname: T): string {
        if (typeof surname !== 'string') {
            return `I have only name ${this.name}`;
        } else {
            return `${this.name} ${surname}`;
        }
    }
}

class AdminUser<T> extends User<string, number> {
    rules: T;
    constructor(name: string, age: number, rules: T) {
        super(name, age);
        this.rules = rules;
    }
}

const ivan = new User('Ivan', 25);
console.log('ivan :>> ', ivan);

const nameData = 'Alex';
const ageData = 25;
const alex = new User<string, number>(nameData, ageData);

console.log(alex.sayMyFullName('Pupkin'));
