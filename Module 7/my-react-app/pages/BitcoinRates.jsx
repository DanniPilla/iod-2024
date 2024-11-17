import { useState, useEffect } from "react";
import {useEmojiContext} from "../context/EmojiContext"
import { useBitcoinData } from "../hooks/useBitcoinData";
import { TextField, Checkbox, Select, MenuItem, Button } from "@mui/material";
import { FormControl, FormControlLabel, InputLabel } from "@mui/material";
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
<Select value={currency} onChange={e => setCurrency(e.target.value)}>
{options}
</Select>
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