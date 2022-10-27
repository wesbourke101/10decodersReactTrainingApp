import React, { useState } from "react";
import './NewExpense.css'
import ExpenseForm from "./ExpenseForm";

function NewExpense (props) {
    const saveExpenseDataHandler = (enterdExpenseData) => {
        const expenseData = {
            ...enterdExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData)
    }
    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        </div>    
    );
}

export default NewExpense;