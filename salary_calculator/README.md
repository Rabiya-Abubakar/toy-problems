# TOY PROBLEMS

## Coding Challenges

### Net Salary Calculation in JavaScript

This project implements a JavaScript program to calculate an individual’s Net Salary by getting the inputs of basic salary and benefits. The program calculates the payee (i.e., Tax), NHIF Deductions, NSSF Deductions, gross salary, and net salary using the rates provided by the Kenya Revenue Authority (KRA).

## Table of Contents

- [Net Salary Calculation in JavaScript](#net-salary-calculation-in-javascript)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Examples](#examples)
  - [Contributing](#contributing)
  - [License](#license)

## Introduction
This project provides a JavaScript function that calculates an individual’s Net Salary. The function takes the basic salary and benefits as inputs and computes the following:

- Gross Salary
- PAYE (Tax) based on KRA rates
- NHIF Deductions
- NSSF Deductions
- Net Salary

Links
Payroll:   https://www.aren.co.ke/payroll/taxrates.htm

KRA:       https://www.kra.go.ke/en/individual/calculate-tax/calculating-tax/paye

External:  https://www.aren.co.ke/payroll/taxrates.htm

## Example
Basic salary: The base salary amount before deductions. Benefits: Additional benefits received by the individual. The program calculates the following:

Gross salary: The total salary before deductions. PAYE (Pay As You Earn): Income tax deducted from the salary based on tax brackets. NHIF (National Hospital Insurance Fund): Health insurance deductions. NSSF (National Social Security Fund): Retirement benefits deductions. Net salary: The final amount the individual receives after all deductions. Example Suppose an individual's basic salary is Ksh 100,000 and they receive benefits worth Ksh 20,000.

Input: Basic salary = Ksh 100,000, Benefits = Ksh 20,000 Output: Gross salary: Ksh 120,000 PAYE: Ksh 15,000 (hypothetical example) NHIF Deductions: Ksh 1,200 (hypothetical example) NSSF Deductions: Ksh 1,000 (hypothetical example) Net salary: Ksh 102,800 (after deducting taxes and deductions) Usage To use this program:

Input the basic salary and benefits when prompted. The program will calculate and display the gross salary, deductions, and net salary based on the provided inputs. Implementation Details The program uses tax rates and deduction rules applicable in the jurisdiction where it is implemented.


## Installation

To use the net salary calculation function, clone the repository and include the `netSalary.js` file in your project.

```bash
git clone https://github.com/Rabiya-Abubakar/toy_assignment.git
