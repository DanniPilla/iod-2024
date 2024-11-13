import { useState } from 'react'
import './App.css'
import { ClockDisplay } from '../components/ClockDisplay'
// import { ActivityFinder } from '../components/ActivityFinder'
import { BitcoinRates } from '../components/BitcoinRates'
import { RefCounter } from '../components/RefCounter'
import VideoPlayer from '../components/VideoPlayer'
import  ReducerCounter  from '../components/ReducerCounter'
import PostListState from '../components/PostListState'
import WeatherSearch from '../components/WeatherSearch'
import { EmojiChanger } from "../components/Emoji"
import { EmojiProvider } from "../context/EmojiContext"
import { UserProvider } from "../context/UserContext"
import { LoginForm } from "../components/LoginForm"
import MyThemeProvider from '../context/MyThemeContext'
// import SubscribeForm from '../components/SubscribeForm'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <MyThemeProvider>
    <EmojiProvider>
       <UserProvider>
      <EmojiChanger/>
       <BitcoinRates/>
      <LoginForm />
    <RefCounter/>
     <ClockDisplay/>
     <VideoPlayer/>
     <ReducerCounter/>
     <PostListState/>
     <WeatherSearch/>
      </UserProvider>
     </EmojiProvider>
     </MyThemeProvider>
     {/* <SubscribeForm/> */}
    </>
  )
}

export default App
