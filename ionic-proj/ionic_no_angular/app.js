const reasonInput = document.querySelector('#input-reason');
const reasonExpense = document.querySelector('#input-amount');
const cancelBtn = document.querySelector('#btn-cancel');
const confirmBtn = document.querySelector('#btn-addExpense');
const expensesList = document.querySelector('#expenses-list');
const totalExpenses = document.querySelector('#total-expenses');
let totalexpensevalue = 0;
const clear = () =>{
    reasonInput.value = '';
    reasonExpense.value = '';
};

confirmBtn.addEventListener('click', () => {
    const enteredReason = reasonInput.value;
    const enteredExpense = reasonExpense.value;
    if (
        enteredExpense.trim().length<=0 ||
        enteredExpense <= 0 ||
        enteredReason.trim().length<=0
    ){
    return;}
    else{
        console.log(enteredReason, enteredExpense)
        const newItem = document.createElement('ion-item');
        newItem.textContent = enteredReason+': $ ' +enteredExpense;
        expensesList.appendChild(newItem);
        totalexpensevalue += +enteredExpense;
        totalExpenses.textContent = totalexpensevalue;
        clear();
    }
})

cancelBtn.addEventListener('click', clear);