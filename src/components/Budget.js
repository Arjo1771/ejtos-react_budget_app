import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, expenses,  setCurrency  } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    const handleBudgetChange = (event) => {
        const enteredValue = event.target.value;
        const totalSpending = expenses.reduce((total, expense) => total + expense.cost, 0);

        if (enteredValue < totalSpending) {
            alert("Budget cannot be set lower than total spending (£" + totalSpending + ")");
            return;
        }
        else if  (enteredValue > 20000) {
            alert("Budget cannot exceed £20,000");
            return;
        }

        setNewBudget(enteredValue);
    }
   


    return (
        <div className='alert alert-secondary'>
            <span>Budget:  </span>
            <input type="number" step="10" value={newBudget} onChange={handleBudgetChange} max="20000" />
            
        </div>
    );
};

export default Budget;

