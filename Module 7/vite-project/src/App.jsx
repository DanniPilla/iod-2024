import { useState } from 'react'
import './App.css'
import { ClockDisplay } from '../components/ClockDisplay'
import { ActivityFinder } from '../components/ActivityFinder'
import { BitcoinRates } from '../components/BitcoinRates'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <ClockDisplay/>
     {/* <ActivityFinder/> */}
     <BitcoinRates/>
    </>
  )
}

export default App
