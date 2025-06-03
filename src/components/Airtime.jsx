import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping,faHouse,faTv,faSackDollar,
faArrowUpFromBracket,faUsersBetweenLines,faThumbsUp,faBolt,faLandmark,faMoneyBillTransfer,
faHeadphones, faUser,faBars,faSquarePhoneFlip,faChartSimple,faStar,faBell} 
from '@fortawesome/free-solid-svg-icons' ;
import { useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';


 



export default function Airtime() {

    const [network, setNetwork] = useState('MTN');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [amount, setAmount] = useState();
    const [error, setError] = useState(null);
    const [data,setData]= useState()
    const [showSummary, setShowSummary] = useState(false);

    


    const handleInput = (e) => {

      
        const { name, value } = e.target;
        if (name === 'network') setNetwork(value);
        if (name === 'phoneNumber') setPhoneNumber(value);
        if (name === 'amount') setAmount(value);
      };

      const handleSubmit =(e)=>{

        e.preventDefault();
        
        
        

        fetch('http://localhost:3000/airtime', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              phoneNumber: phoneNumber,
              services: network,
              amount: parseFloat(amount.toString().replace(/[^0-9.]/g, ''))

            
            })
          })
          .then((res) => {
            if (!res.ok) {
              throw new Error('Network response was not ok');
            }
            return res.json();
          })
          .then((data) => {
            setData(data);
            setShowSummary(true)
            console.log("Airtime purchase response:", data);
            // alert('Airtime recharge successful')

            const previous = JSON.parse(localStorage.getItem('rechargeHistory')) || [];
            const newHistory = [...previous, {
                phoneNumber,
                network,
                amount,
                timestamp: new Date().toLocaleString()
            }];
            localStorage.setItem('rechargeHistory', JSON.stringify(newHistory));

            setTimeout(() => {
                setShowSummary(false);
              }, 5000);
            

          })
            .catch((err) => {
              console.error(err);
              setError(err.message || 'Payment failed');
            
            });
    
        
      }
  return (
    <div>
         <section className='App-airtime-section'>
            <button className='App-button-back'><Link to={'/body' } className='App-button-back-link' >Back</Link></button>
            <div className='App-airtime-head'><Link to={'/body'} className='App-home-airtime'>
            Airtime</Link></div>
    
            <div className='App-airtime-banner'><p className='App-cash'>N70</p><p className='App-Cash-up'> Cashback </p>
              <div className='App-top-up-first'>On your first two Airtime Top-up</div>
            </div>
            <div className='App-airtime-banner2'><i>Free N3000 Airtime</i> 
                     <p className='App-offer'><i>One time offer<br></br>Grab now</i>
                     </p>
                     <p><button className='App-offer-button'>Go</button></p>
            </div>
            
                
                   <div className='App-airtime-banner4'>
                     <p className='App-top-up'>Top up</p>
                     
                             <form className='form-banner' >
                                <div className='App-banner-display'> 
                              
                                  <select className='App-network-select'
                                  
                                  onChange={handleInput}
                                  name='network'
                                  value={network}
                                  
                                  >
                                
                                    <option>MTN </option>
                                    <option >Airtel</option>
                                    <option >9mobile</option>
                                    <option >GLO</option>
                                </select>
                                  <input  className='input-banner' type="number" placeholder='Enter number' name='phoneNumber'  onChange={handleInput} value={phoneNumber} />
                                  <p><FontAwesomeIcon icon={faUser }  className='App-Airtime-icon1' /></p>
                                </div>
                                 <input  className='input-banner1' type="number" placeholder='Amount' name='Amount'  value={amount}/>
                                <div className='App-airtime-display-header'>
                                    <p className='overlay1'><Link to={'/airtimehistory'}><span className='App-Airtime-history'>History</span></Link> </p>
                                    <p className='overlay1'><Link to={'/airtimehistory'}><span className='App-Airtime-history1'>Recent History</span></Link> </p>
                                 </div>
                                  
                                <button className='App-airtime-button-send' onClick={handleSubmit}>send</button>

                            </form>
                             

                                  
                            <div className='App-airtime-banner-ad'>Enjoy to 5% cashback, with a maximum of  N30,
                                on your first two Airtel bundule recharge daily</div>

                            <div className='App-banner-card' >
                                <div className='App-banner-card1'>
                                    <div className='class-1' onClick={() => setAmount(50)} >
                                        <p className='App-airtime-price ' >₦<span className='App-naira-sign' ></span>50</p>
                                        <p className='App-airtime-details'> extra bonus</p>
                                    </div>
                                    <div className='class-1' onClick={() => setAmount(150)}>
                                        <p className='App-airtime-price'>₦<span className='App-naira-sign'></span>150</p>
                                        <p className='App-airtime-details'>include airtime</p>
                                    </div>
                                    <div className='class-1' onClick={() => setAmount(200)}>
                                        <p className='App-airtime-price'>₦<span className='App-naira-sign'></span>200</p>
                                        <p className='App-airtime-details'>100 bonus</p></div>
                                  </div>
                                  <div className='App-banner-card1'>
                                    <div className='class-1' onClick={() => setAmount(500)}>
                                        <p className='App-airtime-price'>₦<span className='App-naira-sign'></span>500</p>
                                        <p className='App-airtime-details'>include ext</p>
                                    </div>
                                    <div className='class-1' onClick={() => setAmount(1000)}>
                                        <p className='App-airtime-price'>₦<span className='App-naira-sign'></span>1000</p>
                                        <p className='App-airtime-details'>Youtube</p>
                                    </div>
                                    <div className='class-1' onClick={() => setAmount(2000)}>
                                        <p className='App-airtime-price'>₦<span className='App-naira-sign'></span>2000</p>
                                        <p className='App-airtime-details'>free talk time</p>
                                    </div>
                                </div>
                                <div className='App-banner-card1'>
                                    <div className='class-1' onClick={() => setAmount(5000)}>
                                        <p className='App-airtime-price'>₦<span className='App-naira-sign'></span>5000</p>
                                        <p className='App-airtime-details'>Browsing</p>
                                    </div>
                                    <div className='class-1' onClick={() => setAmount(6000)}>
                                        <p className='App-airtime-price'>₦<span className='App-naira-sign'></span>6000</p>
                                        <p className='App-airtime-details'>Jolly talk time</p>
                                    </div>
                                    <div className='class-1' onClick={() => setAmount(10000)}>
                                        <p className='App-airtime-price'>₦<span className='App-naira-sign'></span>10,000</p>
                                        <p className='App-airtime-details'>massive</p>
                                    </div>
                                </div>
                                 
                            </div><br></br>
                            <br></br><br></br><br></br>

                        
                     
                   </div>
                   <div className='App-baaner2'>
                     <p className='App-Airtime-services-top'>Airtime Services</p>
                     <div>
                        <p className='App-Airtime-services'>Schedule Top-up weekly</p>
                        <p className='App-Airtime-services'>Schedule Top-up monthly</p>
                     </div>
                   </div>
                   
                  <div className='App-footer'>
                        <div className='App-footers'>Home</div>
                        <div className='App-footers'>Loan</div>
                        <div className='App-footers'>Bonus</div>
                    </div>

                    { showSummary && data && (
                                        <div className="overlay">
                                            <p className='App-clear'></p>
                                            <div className='App-diplay-overlay'> 
                                            <h3 className='App-display-overy-header'>Successful</h3>
                                            <h3 className='App-display-overy-header1'>Recharge Details:</h3>
                                            <p className='App-details-list'><strong>Phone Number:</strong> {data.smart || phoneNumber}</p>
                                            <p className='App-details-list'><strong>Network:</strong> {data.services || network}</p>
                                            <p className='App-details-list'><strong>Amount:</strong> ₦{data.amount || amount}</p>
                                            </div>
                                        </div>

                                        
                                        )}
                                        
    
        </section>
      
    </div>
  )
}
