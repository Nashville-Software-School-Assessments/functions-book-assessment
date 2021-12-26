const { calculateYearlyExpenses, calculateExpensesPercentage, isQualified } = require("../../main.js")


const applicant = { id: 1, name: "James Runolfsdottir", monthlyExpenses: 343.7, salary: 49938.68, mortgage: {}, address: "866 Weissnat Forks", city: "South Dario" }

test('Calculates James Runolfsdottir\'s yearly expenses', () => {
    expect(calculateYearlyExpenses(applicant)).toBe(4124.4);
});

test('Determines percent of expenses to salary', () => {
    const expenses = calculateYearlyExpenses(applicant)
    expect(parseFloat(calculateExpensesPercentage(applicant, expenses).toFixed(2))).toBe(8.26);
});

test('Should be qualified', () => {
    const expenses = calculateYearlyExpenses(applicant)
    const percent = calculateExpensesPercentage(applicant, expenses)
    const person = isQualified(applicant, percent)

    expect(person.mortgage.qualified).toBe(true);
    expect(person.mortgage.amount).toBe(249693.4);
});

