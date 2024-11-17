import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { EmojiProvider } from "../context/EmojiContext"
import { UserProvider } from "../context/UserContext"
import MyThemeProvider from '../context/MyThemeContext'
import AppRoutes from '../routes/AppRoutes'
import NavBar from '../components/NavBar'
import { ThemeProvider } from "@mui/material/styles";
import { tealTheme } from "../themes/tealTheme";
import CustomCard from '../components/CustomCard'
import BasicGrid from '../components/BasicGrid'
import MUIForm from '../components/MUIForm'
import MUIDialog from '../components/MUIDialog'
import SxExample from '../components/SxExample'
import BasicMUIUsage from '../components/BasicMUIUsage'
function App() {

 return (
    <>
    <ThemeProvider theme={tealTheme}>
    <MyThemeProvider>
    <EmojiProvider>
       <UserProvider>
        <NavBar/>
         <AppRoutes/>
    
      </UserProvider>
     </EmojiProvider>
     </MyThemeProvider>
        <CustomCard/>
        <BasicGrid/>
        <MUIForm/>
        <MUIDialog/>
        <SxExample/>
        <BasicMUIUsage/>
       
     </ThemeProvider>
 
    </>
  )
}

export default App
