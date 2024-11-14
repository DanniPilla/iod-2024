// hooks are usually named exports rather than default

import {useState, useEffect} from "react"
export function useBitcoinData(currency) {
// state variable for holding fetched json data
const [bitcoinPrice, setBitcoinPrice] = useState("");
const [isLoading, setIsLoading]=useState(true);
const [error, setError] = useState(null)

useEffect(() => {

const url =`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`

let ignore = false;
setIsLoading(true);
setError(null)

fetch(url)
.then((response) => response.json())
.then((json) => {
     console.log('API response:', json);
if (!ignore) {
    setBitcoinPrice(json.bitcoin[currency.toLowerCase()]);
setIsLoading(false);
}
})
.catch((err)=> {
    if (!ignore){
        setError(err.message);
        setIsLoading(false);
    }
});

// cleanup function - runs when unmounted or dependencies change
return () => {
ignore = true; // ignore now invalid fetch results
console.log('cleanup effect');
};
}, [currency]); // re-run effect if url changes

// return the data fetched from the given url
return {bitcoinPrice, isLoading, error};
}