import React, { useState } from 'react';

import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card';
import './Expenses.css'
import ExpenseFilter from './ExpenseFilter';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');

    const FilterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    }

    const filteredExpenses = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    })

    console.log(filteredExpenses);
    return (
        <Card className='expenses'>
            <ExpenseFilter items={props} selected={filteredYear} onFilterChange={FilterChangeHandler} />
            {filteredExpenses.length === 0 && <p>No Expenses found.</p>}
            {filteredExpenses.length > 0 && filteredExpenses.map(expense =>
                <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />)}
        </Card>
    )

}

export default Expenses;