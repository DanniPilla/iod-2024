import { useState, useEffect } from "react";
import {useEmojiContext} from "../context/EmojiContext"
import { useBitcoinData } from "../hooks/useBitcoinData";
const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];

export function BitcoinRates() {
const [currency, setCurrency] = useState(currencies[0]);
const {bitcoinPrice, isLoading, error}= useBitcoinData(currency);
const {emoji}=useEmojiContext();



const options = currencies.map(curr => <option value={curr} key={curr}>{curr}</option>);

return (
<div className="BitcoinRates componentBox">
<h3>Bitcoin Exchange Rate</h3>
<p>{emoji}</p>
<label>Choose currency:
<select value={currency} onChange={e => setCurrency(e.target.value)}>
{options}
</select>
</label>

{isLoading ? (
        <p>Loading...</p>
      ) : error?(
        <p>Error: {error}</p>
      ) : (
        <p>Current price of Bitcoin in {currency}: {bitcoinPrice}</p>
      )}
</div>
);
}