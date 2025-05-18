import React from 'react'
import { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';

export default function AirtimeHistory() {
    const [history, setHistory] = useState([]);
    

    useEffect(()=>{
        const stored = JSON.parse(localStorage.getItem('rechargeHistory')) || [];
         
        setHistory(stored);
      
    },[])
    
  return (
    <div>
         <div>
            <button className='App-button-back'><Link to={'/airtime' } className='App-button-back-link' >Back</Link></button>
      <h2 className='App-display-overy-header1' >Recharge History</h2>
      {history.length === 0 ? (
        <p>No  history found.</p>
      ) : (
        <ul>
          {history.map((item, index) => (
            <div className='overlay2' key={index}>
                <p className='App-display-overy-header2'>Successful</p> 
              <div className='App-details-list2'> Amount:₦{item.amount} </div>   
           
     
           
            </div>
          ))}
         
        </ul>
      )}
    </div>
      
    </div>
  )
}
