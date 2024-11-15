import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { EmojiProvider } from "../context/EmojiContext"
import { UserProvider } from "../context/UserContext"
import MyThemeProvider from '../context/MyThemeContext'
import AppRoutes from '../routes/AppRoutes'
import NavBar from '../components/NavBar'
function App() {

 return (
    <>
    <MyThemeProvider>
    <EmojiProvider>
       <UserProvider>
        <NavBar/>
        <AppRoutes/>
    
      </UserProvider>
     </EmojiProvider>
     </MyThemeProvider>
 
    </>
  )
}

export default App
