import React,{useState} from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState(0.0);
    const [enteredDate, setEnteredDate] = useState('');

    // const [userInput,setUserInput] = useState({
    //     enteredTitle:'',
    //     enteredAmount: '',
    //     enteredDate:''
    // })

    // const inputChangeHandler = (identifier,value) => {
    //     if(identifier === "title"){
    //         setEnteredTitle(value);
    //     }
    //     else if(identifier === 'amount'){
    //         setEnteredAmount(value);
    //     }
    //     else{
    //         setEnteredDate(value);
    //     }
    // }

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

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }

        props.onSaveExpenseData(expenseData);
        setEnteredAmount('');
        setEnteredTitle('');
        setEnteredDate('');

    }

    return (
        <form action="" onSubmit = {submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__controls">
                    <label htmlFor="title">Title</label>
                    <input value={enteredTitle} type="text" id="title" onChange={titleChangeHandler}/>
                    {/* <input type="text" onChange={(event) => {inputChangeHandler('title',event.target.value)}} /> */}
                </div>
                <div className="new-expense__controls">
                    <label htmlFor="amount">Amount</label>
                    <input value={enteredAmount} min="0.01" step="0.1" type="number" onChange={amountChangeHandler}/>
                    {/* <input type="number" min="0.01" step="0.1" id="amount" onChange={(event) => {inputChangeHandler('amount',event.target.value)}}/> */}
                </div>
                <div className="new-expense__controls">
                    <label htmlFor="date">Date</label>
                    <input value={enteredDate} type="date" onChange={dateChangeHandler}/>
                    {/* <input type="date" onChange={(event) => {inputChangeHandler('date',event.target.value)}} id="date" min="2019-01-01" max="2023-12-31" /> */}
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;
