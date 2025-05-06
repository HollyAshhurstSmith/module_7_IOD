import React, { useState } from 'react';
import { useBitcoinRate } from './hooks/useBitcoinRate';
import { useEmoji } from './EmojiContext';

const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];

function BitcoinRates() {
  const [currency, setCurrency] = useState(currencies[0]);
  const { rate, loading, error } = useBitcoinRate(currency);
  const { emoji } = useEmoji(); 

  const options = currencies.map(curr => (
    <option key={curr} value={curr}>{curr}</option>
  ));

  return (
    <div className="BitcoinRates componentBox">
      <h3>Bitcoin Exchange Rate</h3>
      <label>
        Choose currency:{' '}
        <select value={currency} onChange={e => setCurrency(e.target.value)}>
          {options}
        </select>
      </label>

      <div style={{ marginTop: '1rem' }}>
        {loading && <p>Loading...</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {rate !== null && !loading && !error && (
          <p>
            1 BTC = {rate} {currency} <span style={{ fontSize: '1.5rem' }}>{emoji}</span>
          </p>
        )}
      </div>
    </div>
  );
}

export default BitcoinRates;
