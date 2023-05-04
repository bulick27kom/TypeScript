const electricityUserData = {
    readings: 95,
    units: 'kWt',
    mode: 'double',
};

const waterUserData = {
    readings: 3,
    units: 'm3',
};

const elRate: number = 0.45;
const wRate: number = 2;

const monthPayments: number[] = [0, 0]; // [electricity, water]

const calculatePaymentsDecompose = (
    { elReadings, elMode }: { elReadings: number; elMode: string },
    { wReadings }: { wReadings: number; wUnits: string },
    elRate: number,
    wRate: number
): void => {
    if (elMode === 'double' && elReadings < 50) {
        monthPayments[0] = elReadings * elRate * 0.7;
    } else {
        monthPayments[0] = elReadings * elRate;
    }

    monthPayments[1] = wReadings * wRate;
};

const calculatePayments = (
    elData: { readings: number; units: string; mode: string },
    wData: { readings: number; units: string },
    elRate: number,
    wRate: number
): void => {
    if (elData.mode === 'double' && elData.readings < 50) {
        monthPayments[0] = elData.readings * elRate * 0.7;
    } else {
        monthPayments[0] = elData.readings * elRate;
    }

    monthPayments[1] = wData.readings * wRate;
};

calculatePayments(electricityUserData, waterUserData, elRate, wRate);

const sendInvoiceDecompose = (
    monthPayments: number[],
    { elReadings, elUnits }: { elReadings: number; elUnits: string },
    { wReadings, wUnits }: { wReadings: number; wUnits: string }
): string => {
    const text: string = `    Hello!
  This month you used ${elReadings} ${elUnits} of electricity
  It will cost: ${monthPayments[0]}€
  
  This month you used ${wReadings} ${wUnits} of water
  It will cost: ${monthPayments[1]}€`;

    return text;
};

const sendInvoice = (
    monthPayments: number[],
    electricityUserData: { readings: number; units: string; mode: string },
    waterUserData: { readings: number; units: string }
): string => {
    const text: string = `    Hello!
    This month you used ${electricityUserData.readings} ${electricityUserData.units} of electricity
    It will cost: ${monthPayments[0]}€
    
    This month you used ${waterUserData.readings} ${waterUserData.units} of water
    It will cost: ${monthPayments[1]}€`;

    return text;
};

console.log(sendInvoice(monthPayments, electricityUserData, waterUserData));
