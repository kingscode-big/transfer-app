import React from 'react'
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function DataHistory() {


    const [history, setHistory] = useState([]);

     useEffect(()=>{
          const saved = JSON.parse(localStorage.getItem('dataHistory')) || [];
          setHistory(saved)
    
        },[])
  return (
    <>
    <div>
    <div>
            <button className='App-button-back'><Link to={'/data' } className='App-button-back-link' >Back</Link></button>
      <h2 className='App-display-overy-header1' >Data History</h2>
      {history.length === 0 ? (
        <p>No  history found.</p>
      ) : (
        <ul>
          {history.map((item, index) => (
            <div className='overlay2' key={index}>
                <p className='App-display-overy-header2'>Successful</p> 
              <div className='App-details-list2'> Amount:₦{item.amount} </div>   
              <div className='App-details-list2'> package:{item.amount}gb </div>   
           
     
           
            </div>
          ))}
         
        </ul>
      )}
    </div>
      
      
    </div>

    
    </>
  )
}
