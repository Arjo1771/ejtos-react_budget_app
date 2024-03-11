import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencySelector = () => {
  const { currency, setCurrency } = useContext(AppContext);

  const handleCurrencyChange = (e) => {
    setCurrency(e.target.value);
  };

  return (
    <div className="form-group">
      <label htmlFor="currency">Select Currency:</label>
      <select
        className="form-control"
        id="currency"
        value={currency}
        onChange={handleCurrencyChange}
      >
        <option value="euro">Euro (€)</option>
        <option value="dollar">Dollar ($)</option>
        <option value="pound">Pound (£)</option>
        <option value="rupee">Rupee (₹)</option>
      </select>
    </div>
  );



};

export default CurrencySelector;
