import { useState } from 'react'
import './App.css'
import Body from './components/Body'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Sign from './components/Sign'
import Log from './components/Log'
import { UserContext } from './components/userContext'
import Private from './components/Private'
import Airtime from './components/Airtime'
import Data from './components/data'
import Shop from './components/Shop'
import Tv from './components/Tv'
import AddMoney from './components/AddMoney'
import Electric from './components/Electric'
import Bet from './components/Bet'
import Referal from './components/Referal'
import AirtimeHistory from './components/AirtimeHistory'
import DataHistory from './components/DataHistory'
import Transfer from './components/Transfer'
 

 

function App() {
  const [count, setCount] = useState(0)
  const [logUser,SetLogUser] =useState(localStorage.getItem('useEmail'))

  return (
    <>
      <div>
        <UserContext.Provider value={{logUser,SetLogUser}}> 
        <BrowserRouter> 
        <Routes>
          <Route path='/' element={<Private component ={Sign}/>}/>
          <Route path='/body' element={<Body/>}/>
          <Route path='/body/Log' element={<Log/>}/>
          <Route path='/body/Sign' element={<Sign/>}/>
          <Route path='/log' element={<Log/>}/>
          <Route path='/sign' element={<Sign/>}/>
          <Route path='/shop' element={<Shop/>}/> 
          <Route path='/airtime' element={<Airtime/>}/>
          <Route path='/data' element={<Data/>}/>
          <Route path='/tv' element={<Tv/>}/>
          <Route path='/addmoney' element={<AddMoney/>}/>
          <Route path='/electric' element={<Electric/>}/>
          <Route path='/bet' element={<Bet/>}/>
          <Route path='/referal' element={<Referal/>}/>
          <Route path='/airtimehistory' element={<AirtimeHistory/>}/>
          <Route path='/datahistory' element={<DataHistory/>}/>
          <Route path='/transfer' element={<Transfer/>}/>
           
          
          
          

          
        </Routes>
        
        </BrowserRouter>

        </UserContext.Provider>
        
       
      </div>
      
    </>
  )
}

export default App
