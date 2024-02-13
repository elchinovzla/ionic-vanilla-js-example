document.addEventListener('DOMContentLoaded', () => {
  const reasonInput = document.querySelector('#input-reason');
  const reasonAmount = document.querySelector('#input-amount');
  const cancelButton = document.querySelector('#btn-cancel');
  const addButton = document.querySelector('#btn-add');
  const expensesList = document.querySelector('#expenses-list');
  const totalExpensesSpan = document.querySelector('#total-expenses');
  const alert = document.querySelector('ion-alert');

  let totalExpenses = 0;

  const clear = () => {
    reasonInput.value = '';
    reasonAmount.value = '';
  };

  addButton.addEventListener('click', () => {
    const enteredReason = reasonInput.value;
    const enteredAmount = reasonAmount.value;

    if (
      enteredReason.trim().length < 1 ||
      enteredAmount <= 0 ||
      enteredAmount.toString().length <= 0
    ) {
      alert.header = 'Invalid entry';
      alert.buttons = ['Gotcha'];
      alert.message = 'Please enter a valid reason and amount';

      return;
    }

    const newItem = document.createElement('ion-item');
    newItem.textContent = enteredReason + ': $' + enteredAmount;

    expensesList.appendChild(newItem);

    totalExpenses += +enteredAmount;
    totalExpensesSpan.textContent = totalExpenses;
    clear();
  });

  cancelButton.addEventListener('click', clear);
});
