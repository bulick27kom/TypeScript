interface ICompany {
    name: string;
    debit: number;
}

type CompanyKeys = keyof ICompany;

const keys: CompanyKeys = 'debit';

function printDebts<T, K extends keyof T, S extends keyof T>(
    company: T,
    name: K,
    debit: S
): void {
    console.log(`Company ${company[name]}, debts: ${company[debit]} `);
}

const hh: ICompany = {
    name: 'HH',
    debit: 100,
};

printDebts(hh, 'name', 'debit');
