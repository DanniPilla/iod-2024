import React from 'react';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Welcome from './Welcome.jsx'
import PropsDisplayer from './PropsDisplayer.jsx'
import Greeting from './GreetingsComponent.jsx'
import {FullName} from './Fullname.jsx'


import ExplodingBomb from '../components/ExplodingBomb.jsx'

function App() {
  const [count, setCount] = useState(0)
  const spiderman = { 
    name: 'Spiderman', alterEgo: 'Peter Parker', catchPhrase: 'With great power comes great responsibility' };
  const spideyJSX = (
  <div>
  <h3>{spiderman.name}</h3>
  <blockquote>{spiderman.catchPhrase}</blockquote><cite>{spiderman.alterEgo}</cite>
  </div>
  );

  return (
    <>
    <Welcome/>
    <PropsDisplayer myProp="first prop"/>
    <Greeting name="Gareth">Give Toothless a pat for me!</Greeting>
    <Greeting>Have a good day!</Greeting>
    <FullName first="Kendrick" last="Lamar" />
    <ExplodingBomb>Oh DANGER</ExplodingBomb>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Spidey JSX</h1>
      {spideyJSX}
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
