import React, { useState } from "react";
import './ExpenseForm.css';

function ExpenseForm (props) {
    const [enteredTitle, setEnteredTitle] =  useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)
    };
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value)
    };
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
    };
    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }
        console.log(expenseData)
        setEnteredTitle('')
        setEnteredAmount('')
        setEnteredDate('')
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input name='enteredTitle' onChange={titleChangeHandler} value={enteredTitle} type='text'/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input name='enteredAmount' onChange={amountChangeHandler} value={enteredAmount} type='number' min='0.01' step='0.01'/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input name='enteredDate' onChange={dateChangeHandler} value={enteredDate}type='date' min='2019-01-01' max='2022-12-31'/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;



    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // })
    // const titleChangeHandler = (event) => {
    //     setUserInput((prevState) => {
    //         return {...prevState, [event.name]: event.target.value}
    //     })
    // }