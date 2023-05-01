// Creating an Income Class
class Income {
    constructor (name, amount, recurring) {
        this.name = name;
        this.amount = amount;
        this.recurring = recurring
    }
}

// Creating 5 Income Objects
const salary = new Income("salary", 25000, true)
const rentIncome = new Income("rentIncome", 7000, true)
const blackJack = new Income("blackJack", 10000, false)
const investment = new Income("investment", 2000, true)
const commission = new Income("commission", 4000, false)

// Creating an Expense Class
class Expenses {
    constructor (name, amount, recurring) {
        this.name = name;
        this.amount = amount;
        this.recurring = recurring
    }
}

// Creating 5 Expense Objects
const groceries = new Expenses("groceries", 2000, false)
const rentExpense = new Expenses("rentExpense", 8000, true)
const netflix = new Expenses("netflix", 150, true)
const carPayment = new Expenses("carPayment", 5000, true)
const studies = new Expenses("studies", 3000, true)

// Converting each object to a JSON file, in order to storage it in sessionStorage
// Incomes
const salaryString = JSON.stringify(salary)
const rentIncomeString = JSON.stringify(rentIncome)
const blackJackString = JSON.stringify(blackJack)
const investmentString = JSON.stringify(investment)
const commissionString = JSON.stringify(commission)

// Expenses
const groceriesString = JSON.stringify(groceries)
const rentExpenseString = JSON.stringify(rentExpense)
const netflixString = JSON.stringify(netflix)
const carPaymentString = JSON.stringify(carPayment)
const studiesString = JSON.stringify(studies)

// Saving all this information in the sessionStorage
// Income
sessionStorage.setItem(salary.name + '-income', salaryString)
sessionStorage.setItem(rentIncome.name + '-income', rentIncomeString)
sessionStorage.setItem(blackJack.name + '-income', blackJackString)
sessionStorage.setItem(investment.name + '-income', investmentString)
sessionStorage.setItem(commission.name + '-income', commissionString)

// Expenses
sessionStorage.setItem(groceries.name, groceriesString)
sessionStorage.setItem(rentExpense.name, rentExpenseString)
sessionStorage.setItem(netflix.name, netflixString)
sessionStorage.setItem(carPayment.name, carPaymentString)
sessionStorage.setItem(studies.name, studiesString)

// Getting the Nav Items so that I can Add a prompt to it when clicked
const incomeNav = document.getElementById("income-nav")
const expenseNav = document.getElementById("expense-nav")
const disopasableIncomeNav = document.getElementById("disposable-income-nav")

// Adding Event Listeners
incomeNav.addEventListener('click', showIncomePrompt)
// expenseNav.addEventListener('click', showExpensePrompt)
// disopasableIncomeNav.addEventListener('click', showDisposableIncomePrompt)

// Income
function showIncomePrompt () {

    const incomeList = []
    for (let i = 0; i < sessionStorage.length; i++) {
        if(sessionStorage.key(i).includes("-income")) {
            const tempObj = JSON.parse(sessionStorage.getItem(sessionStorage.key(i)))
            for (let key in tempObj) {
                let value = tempObj[key]
                incomeList.push(value)
            }
        }
    }

    // Adding the Income Inforamtion to the prompt and asking for more income
    const moreIncome = prompt(`${incomeList}\nAdd Another Income? y/n`)

    // Logic to ask a user for all the information of the new income
    const incorrectResponse = "You gave an incorrect response, try again!"
    if (moreIncome === 'n') {
        alert("Click back on Income on the page to add more another income")
    } else if (moreIncome === 'y') {
        const newIncome = prompt("What is the name of the new Income?")
        const newAmount = prompt("What is the amount of that income? (R)")
        let newRecurring = prompt("Is the income recurring? y/n")
        if (newRecurring === 'n') {
            newRecurring = false
        } else if (newRecurring === 'y') {
            newRecurring = true
        } else {
            alert(incorrectResponse)
        }
        const addedIncome = new Income(newIncome, newAmount, newRecurring)
        const addedIncomeString = JSON.stringify(addedIncome)
        sessionStorage.setItem(addedIncome.name + '-income', addedIncomeString )
    } else {
        alert(incorrectResponse)
    }
}