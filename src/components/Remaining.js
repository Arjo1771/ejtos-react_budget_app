import React, { useContext, useEffect } from 'react';
import { AppContext } from '../context/AppContext';

const Remaining = () => {
  const { expenses, budget, currency } = useContext(AppContext);

  const totalExpenses = expenses.reduce((total, item) => {
    return (total = total + item.cost);
  }, 0);

  const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';

  useEffect(() => {
    // Handle currency change here
    console.log('Currency changed to:', currency);
    // Add logic to handle currency change as needed
  }, [currency]);

  return (
    <div className={`alert ${alertType}`}>
      <span>
        Remaining: {currency} {budget - totalExpenses}
      </span>
    </div>
  );
};

export default Remaining;
