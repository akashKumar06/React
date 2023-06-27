import React,{useState} from "react";

import "./ExpenseForm.css";

const ExpenseForm = () => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState(0.0);
    const [enteredDate, setEnteredDate] = useState('');

    // const [userInput,setUserInput] = useState({
    //     enteredTitle:'',
    //     enteredAmount: '',
    //     enteredDate:''
    // })
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        // setUserInput = {
        //     ...userInput,
        //     enteredTitle:''
        // }
        // setUserInput((prevState) => {
        //     return {
        //         ...prevState,
        //         enteredTitle: event.target.value
        //     }
        // })
    }
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    }
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    }
    return (
        <form action="">
            <div className="new-expense__controls">
                <div className="new-expense__controls">
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__controls">
                    <label htmlFor="amount">Amount</label>
                    <input type="number" min="0.01" step="0.1" id="amount" onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__controls">
                    <label htmlFor="date">Date</label>
                    <input type="date" onChange={dateChangeHandler} id="date" min="2019-01-01" max="2023-12-31" />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;
