import React, {useState} from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false)

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData)
        setIsEditing(false)
    }

    let formContent = <button type='button' onClick={() => setIsEditing(true)}>Add Expense</button>
    if (isEditing) {
        formContent = (
            <ExpenseForm
                onSaveExpenseData={saveExpenseDataHandler}
                onCancel={()=>setIsEditing(false)}
            />
        )
    }

    return (
        <div className='new-expense'>
            {formContent}
        </div>
    );
};

export default NewExpense;
