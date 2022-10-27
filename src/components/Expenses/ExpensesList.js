import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css'

function ExpensesList (props) {

    if (props.items.length === 0) {
        return <h2 className="expneses-list__fallback">Found no expneses.</h2>
    }

    return (
        <ul classname='expneses-list'>
            {props.items.map((expense) => (
                <ExpenseItem 
                    key={expense.id}
                    title={expense.title} 
                    amount={expense.amount} 
                    date={expense.date}
                />)
            )}   
        </ul>
    )
}

export default ExpensesList;