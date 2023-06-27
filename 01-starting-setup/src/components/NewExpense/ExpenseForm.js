import React from "react";

import "./ExpenseForm.css";

const ExpenseForm = () => {
  return (
    <form action="">
      <div className="new-expense__controls">
        <div className="new-expense__controls">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" />
        </div>
        <div className="new-expense__controls">
          <label htmlFor="amount">Amount</label>
          <input type="number" min="0.01" step="0.1" id="amount" />
        </div>
        <div className="new-expense__controls">
          <label htmlFor="date">Date</label>
          <input type="date" id="date" min="2019-01-01" max="2023-12-31" />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
