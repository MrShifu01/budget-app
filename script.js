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
sessionStorage.setItem(groceries.name + '-expense', groceriesString)
sessionStorage.setItem(rentExpense.name + '-expense', rentExpenseString)
sessionStorage.setItem(netflix.name + '-expense', netflixString)
sessionStorage.setItem(carPayment.name + '-expense', carPaymentString)
sessionStorage.setItem(studies.name + '-expense', studiesString)

// Getting the Nav Items so that I can Add a prompt to it when clicked
const incomeNav = document.getElementById("income-nav")
const expenseNav = document.getElementById("expense-nav")
const disopasableIncomeNav = document.getElementById("disposable-income-nav")

// Adding Event Listeners
incomeNav.addEventListener('click', showIncomePrompt)
expenseNav.addEventListener('click', showExpensePrompt)
disopasableIncomeNav.addEventListener('click', showDisposableIncomePrompt)

// Income
function showIncomePrompt () {

    // Looping through the sessionStorage items and converting it back to an object
    const incomeList = []
    for (let i = 0; i < sessionStorage.length; i++) {
        if(sessionStorage.key(i).includes("-income")) {
            const tempObj = JSON.parse(sessionStorage.getItem(sessionStorage.key(i)))
            incomeList.push(tempObj)
        }
    }

    // Formatting the IncomeList
    let formattedIncomeList = 'Name       Amount       Recurring\n'
    formattedIncomeList += '------------------------------------\n'
    incomeList.forEach(income => {
        formattedIncomeList += `${income.name}: R${income.amount}---${income.recurring}\n`
    })

    // Adding the Income Inforamtion to the prompt and asking for more income
    const moreIncome = prompt(`${formattedIncomeList}\nAdd Another Income? y/n`)

    // Logic to ask a user for all the information of the new income
    const incorrectResponse = "You gave an incorrect response, try again!"
    const emptyResponse = "Value can't be empty, please try again!"
    if (moreIncome === 'n') {
        alert("Click back on Income on the page to add more another income")
    } else if (moreIncome === 'y') {
        const newIncome = prompt("What is the name of the new income?")
            if (newIncome === null || newIncome === "") {
                alert(emptyResponse)
                return
            }
        const newAmount = Number(prompt("What is the amount of that income? (R)"))
            if (newAmount === null || newAmount === "") {
                alert(emptyResponse)
                return
            } else if (isNaN(newAmount)) {
                alert(incorrectResponse)
                return
            }
        let newRecurring = prompt("Is the income recurring? y/n")
            if (newRecurring === null || newRecurring === "") {
                alert(emptyResponse)
                return
            }
        if (newRecurring === 'n') {
            newRecurring = false
        } else if (newRecurring === 'y') {
            newRecurring = true
        } else if (newRecurring != 'n' || newRecurring != 'y' || newRecurring != null || newRecurring != '') {
            alert(incorrectResponse)
            return
        }

        // creating the new object and adding it to sessionStorage via JSON
        const addedIncome = new Income(newIncome, newAmount, newRecurring)
        const addedIncomeString = JSON.stringify(addedIncome)
        sessionStorage.setItem(addedIncome.name + '-income', addedIncomeString )
    } else if (moreIncome === null || moreIncome === "") {
        return
    } else {
        alert(incorrectResponse)
        return
    }
}

// Expenses
function showExpensePrompt () {

    // Looping through the sessionStorage items and converting it back to an object
    const expenseList = []
    for (let i = 0; i < sessionStorage.length; i++) {
        if(sessionStorage.key(i).includes("-expense")) {
            const tempObj = JSON.parse(sessionStorage.getItem(sessionStorage.key(i)))
            expenseList.push(tempObj)
        }
    }

    // Formatting the expenseList
    let formattedExpenseList = 'Name       Amount       Recurring\n'
    formattedExpenseList += '------------------------------------\n'
    expenseList.forEach(expense => {
        formattedExpenseList += `${expense.name}: R${expense.amount}---${expense.recurring}\n`
    })

    // Adding the expense Inforamtion to the prompt and asking for more expense
    const moreExpense = prompt(`${formattedExpenseList}\nAdd Another expense? y/n`)

    // Logic to ask a user for all the information of the new expense
    const incorrectResponse = "You gave an incorrect response, try again!"
    const emptyResponse = "Value can't be empty, please try again!"
    if (moreExpense === 'n') {
        alert("Click back on Income on the page to add more another expense")
    } else if (moreExpense === 'y') {
        const newExpense = prompt("What is the name of the new expense?")
            if (newExpense === null || newExpense === "") {
                alert(emptyResponse)
                return
            }
        const newAmount = Number(prompt("What is the amount of that expense? (R)"))
            if (newAmount === null || newAmount === "") {
                alert(emptyResponse)
                return
            } else if (isNaN(newAmount)) {
                alert(incorrectResponse)
                return
            }
        let newRecurring = prompt("Is the expense recurring? y/n")
            if (newRecurring === null || newRecurring === "") {
                alert(emptyResponse)
                return
            }
        if (newRecurring === 'n') {
            newRecurring = false
        } else if (newRecurring === 'y') {
            newRecurring = true
        } else if (newRecurring != 'n' || newRecurring != 'y' || newRecurring != null || newRecurring != '') {
            alert(incorrectResponse)
            return
        }

        // creating the new object and adding it to sessionStorage via JSON
        const addedExpense = new Expenses(newExpense, newAmount, newRecurring)
        const addedExpenseString = JSON.stringify(addedExpense)
        sessionStorage.setItem(addedExpense.name + '-expense', addedExpenseString )
    } else if (moreExpense === null || moreExpense === "") {
        return
    } else {
        alert(incorrectResponse)
    }
}

// Disposable Income
function showDisposableIncomePrompt () {

    // Looping through the sessionStorage items and converting it back to an object
    const incomeList = []
    for (let i = 0; i < sessionStorage.length; i++) {
        if(sessionStorage.key(i).includes("-income")) {
            const tempIncObj = JSON.parse(sessionStorage.getItem(sessionStorage.key(i)))
            incomeList.push(tempIncObj)
        }
    }

    // Calculate total income
    let totalIncome = 0
    incomeList.forEach(income => {
        totalIncome += income.amount
    })

    // Looping through the sessionStorage items and converting it back to an object
    const expenseList = []
    for (let i = 0; i < sessionStorage.length; i++) {
        if(sessionStorage.key(i).includes("-expense")) {
            const tempExpObj = JSON.parse(sessionStorage.getItem(sessionStorage.key(i)))
            expenseList.push(tempExpObj)
        }
    }

    // Calculate total Expenses
    let totalExpenses = 0
    expenseList.forEach(expense => {
        totalExpenses += expense.amount
    })

    // Calculate and Display equation for disposable Income
    const savings = prompt(`Disposable Income = Total Income: R${totalIncome} - Total Expenses: R${totalExpenses} = R${totalIncome - totalExpenses}\nHow much of you disposable income do you want to put into savings?`)

    if (savings === 0 || savings === null || savings === "") {
        alert(`Disposable Income Left: R${totalIncome - totalExpenses - savings}`)
        return
    } else if (isNaN(savings)) {
        alert("Please try again, but this time enter a number")
        return
    } else if (savings > totalIncome - totalExpenses) {
        alert("You can't save more than you have!")
    } else {
        alert(`Disposable Income Left: R${totalIncome - totalExpenses - savings}`)
        return
    }
}