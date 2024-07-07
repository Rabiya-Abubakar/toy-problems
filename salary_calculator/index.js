// Solution.js
function calculateNetSalary(basicSalary, benefits) {
    // Constants for tax rates and deduction rates
    const taxRates = [
        { min: 0, max: 288000, rate: 10 },
        { min: 288001, max: 388000, rate: 25 },
        { min: 388001, max: 6000000, rate: 30 },
        { min: 6000001, max: 9600000, rate: 32.5 },
        { min: 9600001, max: Infinity, rate: 35 }
    ];

    const nhifRates = [
        { min: 0, max: 5999, deduction: 150 },
        { min: 6000, max: 7999, deduction: 300 },
        { min: 8000, max: 11999, deduction: 400 },
        { min: 12000, max: 14999, deduction: 500 },
        { min: 15000, max: 19999, deduction: 600 },
        { min: 20000, max: 24999, deduction: 750 },
        { min: 25000, max: 29999, deduction: 850 },
        { min: 30000, max: 34999, deduction: 900 },
        { min: 35000, max: 39999, deduction: 950 },
        { min: 40000, max: 44999, deduction: 1000 },
        { min: 45000, max: 49999, deduction: 1100 },
        { min: 50000, max: 59999, deduction: 1200 },
        { min: 60000, max: 69999, deduction: 1300 },
        { min: 70000, max: 79999, deduction: 1400 },
        { min: 80000, max: 89999, deduction: 1500 },
        { min: 90000, max: 99999, deduction: 1600 },
        { min: 100000, max: Infinity, deduction: 1700 }
    ];

    const nssfRate = 0.12; // NSSF rate as a decimal (12%)

    // Calculate gross salary
    const grossSalary = basicSalary + benefits;

    // Calculate PAYE (Tax)
    let tax = 0;
    for (let i = 0; i < taxRates.length; i++) {
        if (grossSalary > taxRates[i].min && grossSalary <= taxRates[i].max) {
            tax = (grossSalary - taxRates[i].min) * (taxRates[i].rate / 100);
            break;
        }
    }

    // Calculate NHIF Deduction
    let nhif = 0;
    for (let i = 0; i < nhifRates.length; i++) {
        if (grossSalary > nhifRates[i].min && grossSalary <= nhifRates[i].max) {
            nhif = nhifRates[i].deduction;
            break;
        }
    }

    // Calculate NSSF Deduction
    const nssf = grossSalary * nssfRate;

    // Calculate Net Salary
    const netSalary = grossSalary - (tax + nhif + nssf);

    // Return an object with all calculated values
    return {
        grossSalary,
        tax,
        nhif,
        nssf,
        netSalary
    };
}

// Example usage:
const basicSalary = 59000; // Example basic salary
const benefits = 4500; // Example benefits

const result = calculateNetSalary(basicSalary, benefits);

// Print the results
console.log("Net Salary Calculation Results:");
console.log("Gross Salary:", result.grossSalary);
console.log("Tax (PAYE):", result.tax);
console.log("NHIF Deductions:", result.nhif);
console.log("NSSF Deductions:", result.nssf);
console.log("Net Salary:", result.netSalary);
