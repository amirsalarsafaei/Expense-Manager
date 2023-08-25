import ExpenseItem from "./ExpenseItem";
import React from "react";

function ExpenseList({expenses}) {
    let expensesContent = <p className='expenses__no_expense_fall_back'>No Expenses found</p>
    if (expenses.length !== 0) {
        expensesContent = expenses.map((item)=> {
            return (
                <ExpenseItem
                    key={item.id}
                    title={item.title}
                    amount={item.amount}
                    date={item.date}
                />
            )
        })
    }
    return expensesContent
}

export default ExpenseList
