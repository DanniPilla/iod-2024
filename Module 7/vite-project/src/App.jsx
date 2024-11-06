import { useState } from 'react'
import './App.css'
import { ClockDisplay } from '../components/ClockDisplay'
import { ActivityFinder } from '../components/ActivityFinder'
import { BitcoinRates } from '../components/BitcoinRates'
import { RefCounter } from '../components/RefCounter'
import VideoPlayer from '../components/VideoPlayer'
import  ReducerCounter  from '../components/ReducerCounter'
import PostListState from '../components/PostListState'
import SubscribeForm from '../components/SubscribeForm'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <RefCounter/>
     <ClockDisplay/>
     <ActivityFinder/>
     <BitcoinRates/>
     <VideoPlayer/>
     <ReducerCounter/>
     <PostListState/>
     <SubscribeForm/>
    </>
  )
}

export default App
