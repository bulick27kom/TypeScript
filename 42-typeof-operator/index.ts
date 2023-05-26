interface ICompanySmall {
    name: string;
    debit: number;
}

interface ICompany {
    name: string;
    debit: number;
    departments: IDepartment;
    management: {
        owner: string;
    };
}

interface IDepartment {
    [ket: string]: string;
}

type CompanyDebitType = ICompany['debit'];

type CompanyKeys = keyof ICompany;

const keys: CompanyKeys = 'debit';

function printDebts<T, K extends keyof T, S extends keyof T>(
    company: T,
    name: K,
    debit: S
): void {
    console.log(`Company ${company[name]}, debts: ${company[debit]} `);
}

const hh: ICompanySmall = {
    name: 'HH',
    debit: 100,
};

printDebts(hh, 'name', 'debit');

const google = {
    name: 'Goole',
    debit: 100500,
};

type GoogleKeys = keyof typeof google;
const keys2: GoogleKeys = 'debit';

const bigCompany: ICompany = {
    name: 'Goole',
    debit: 100500,
    departments: {
        depart1: 'dep 1',
        depart2: 'dep 2',
        depart3: 'dep 3',
    },
    management: {
        owner: 'owner',
    },
};

type CompanyOwnerType = ICompany['management']['owner']
type CompanyDepartmentsType = ICompany['departments']
type Test = ICompany[keyof ICompany]