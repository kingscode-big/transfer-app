import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping,faHouse,faTv,faSackDollar,
faArrowUpFromBracket,faUsersBetweenLines,faThumbsUp,faBolt,faLandmark,faMoneyBillTransfer,
faHeadphones, faUser,faBars,faSquarePhoneFlip,faChartSimple,faStar,faBell} 
from '@fortawesome/free-solid-svg-icons' ;
import { useState } from 'react';

export default function Transfer() {

      const [recipient, setRecipient] = useState();
      const [bank, setBank] = useState('firstbank');
      const [amount, setAmount] = useState('');
      const [error, setError] = useState(null);
      const [data,setData]= useState()
      const [showSummary, setShowSummary] = useState(false);


      const handleAccountInput =(e)=>{
       const{name,value}= e.target.value
       console.log(e.target.value)
       if (name === "amount")setAmount(value);
       if (name === "bank")setBank(value);
       if (name === "recipient")setRecipient(value);
       
    
      }

      const handleInput =(e)=>{
        e.preventDefault()
        console.log(e.target.value)

        fetch('http://localhost:3000/transfer',{
          method:"POST",
          headers: {'content-type':'application/json'},
          body:JSON.stringify({
            recipient:recipient,
            bank:bank,
            amount: parseFloat(amount.toString().replace(/[^0-9.]/g, ''))

          })
        })
        .then((res)=>{
          if (!res.ok) {
            throw new Error('response network was not ok')
          }
          return  res.json()

        })
        .then((data)=>{
          console.log('transfere response',data)
          alert('transfer succceful')
        })
        .catch((err)=>{
           
          console.log(err);
          setError(err.message || 'Payment failed');
        })
      }
  return (
    <div>
        
        <button className='App-button-back'><Link to={'/body' } className='App-button-back-link' >Back</Link></button>

        
                           <div className='App-airtime-banner4'>
                             <p className='App-top-up'>Top up</p>
                             
                                     <form className='form-banner' >
                                        <div className='App-banner-display'> 
                                      
                                          <select className='App-network-select'
                                          
                                          onChange={handleAccountInput}
                                          name='bank'
                                          value={bank}
                                          >
                                        
                                            <option>firstbank </option>
                                            <option >Zenith</option>
                                            <option >palmpay</option>
                                            <option >opay</option>
                                        </select>
                                          <input  className='input-banner' type="number" placeholder='Account Number' name='recipient' onChange={handleAccountInput}  value={recipient} />
                                          <p><FontAwesomeIcon icon={faUser }  className='App-Airtime-icon1' /></p>
                                        </div>
                                         <input  className='input-banner1' type="number" placeholder='Amount' name='amount' onChange={handleAccountInput} value={amount}/>
                                        <div className='App-airtime-display-header'>
                                            <p className='overlay1'><Link to={'/airtimehistory'}><p className='App-Airtime-history'>History</p></Link> </p>
                                            <p className='overlay1'><Link to={'/airtimehistory'}><p className='App-Airtime-history1'>Recent History</p></Link> </p>
                                         </div>
                                          
                                        <button className='App-airtime-button-send'  onClick={handleInput}>send</button>
        
                                    </form>

        </div>
        </div>
     
 
  )
}
