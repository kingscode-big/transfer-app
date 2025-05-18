import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping,faHouse,faTv,faSackDollar,
faArrowUpFromBracket,faUsersBetweenLines,faThumbsUp,faBolt,faLandmark,faMoneyBillTransfer,faHeadphones, faUser,faBars,faSquarePhoneFlip,faChartSimple,faStar,faBell} 
from '@fortawesome/free-solid-svg-icons' ;
 

export default function data() {

    const[phoneNumber,setPhoneNumber]=useState('');
    const[network,setNetwork]=useState('MTN');
    const[amount,setAmount]=useState('');
    const[pack,setPack]=useState('');
    const[data,setData]=useState('');
    const[showSummary,setShowSummary]=useState('false');



    const handleData=(e)=>{
        console.log(e.target.value)
        const{name,value}= e.target;
        if(name === 'network')setNetwork(value);
        if(name === 'amount') setAmount(value);
        if(name === 'phoneNumber')setPhoneNumber(value);
        if (name === 'package')setPack(value)
        
    }

    const handleSubmit=(e)=>{
        console.log(e.target.value)
        e.preventDefault()


        fetch('http://localhost:3000/data',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              phoneNumber: phoneNumber,
              package:pack,
              services: network,
              amount: parseFloat(amount.toString().replace(/[^0-9.]/g, ''))

            
            })
        })
        .then((res)=>{
            if (!res.ok) {
                throw new Error('Network response was not ok')
            }
            return res.json();
        })
        .then((data)=>{
            setData(data);
            setShowSummary(true)
            console.log("Airtime purchase response:", data);
            alert('Data subscription successful')

            const previous = JSON.parse(localStorage.getItem('dataHistory')) || [];
            const newHistory = [...previous, {
                phoneNumber,
                network,
                pack,
                amount,
                timestamp: new Date().toLocaleString()
            }];
            localStorage.setItem('dataHistory', JSON.stringify(newHistory));

            setTimeout(() => {
                setShowSummary(false);
              }, 5000);
            
 
        })
        .catch((err) => {
            console.log(err);
            setError(err.message || 'Payment failed');
          
        
  
        }
        )}
  return (
    <>
    <div>
        <section className='App-airtime-section'>
            <button className='App-button-back'><Link to={'/body' } className='App-button-back-link' >Back</Link></button>
            <div className='App-airtime-head'><Link to={'/body'} className='App-home-airtime'>
            <FontAwesomeIcon icon={faArrowUpFromBracket}  className='App-Airtime-icon' />Data</Link></div>
    
            <div className='App-airtime-banner'><p className='App-cash'>90% OFF</p><p className='App-Cash-up'> Get 1GB For N10</p>
    
            </div>
                   <div className='App-data-banner4'>
                     <p className='App-top-up'>Top up</p>
                     
                             <form className='form-banner'>
                                <div className='App-banner-display'> 
                              
                                  <select className='App-network-select'
                                   onChange={handleData}
                                   value={network}
                                   name='network'
                                  
                                  >
                                    <option>MTN </option>
                                    <option >Airtel</option>
                                    <option >9mobile</option>
                                    <option >GLO</option>
                                  </select>
                                  <input  className='input-banner' type="number" placeholder='Enter number' onChange={handleData} name='phoneNumber' value={phoneNumber} />
                                  <p><FontAwesomeIcon icon={faUser}  className='App-Airtime-icon1' /></p>
                                 
                                 </div>
                                 <input className='input-data-banner' type="number" placeholder='Gb' onChange={handleData} name='pack' value={pack} />
                                 <input className='input-data-banner' type="number" placeholder='₦' onChange={handleData} name='amount,' value={amount}  />
                                 

                                  <div className='App-airtime-display-header'>
                                        <p className='overlay1'><Link to={'/datahistory'}><p className='App-Airtime-history'>History</p></Link> </p>
                                        <p className='overlay1'><Link to={'/datahistory'}><p className='App-Airtime-history1'>Recent History</p></Link> </p>
                                     </div>
                                 <button className='App-airtime-button-send' onClick={handleSubmit}>send</button>
                                 

                            </form>
                            
                            <div className='App-airtime-banner-ad'>Enjoy to 5% cashback, with a maximum of  N30,
                                on your first two Airtel bundule recharge daily</div>

                            <div className='App-banner-card'>
                                <div className='App-banner-card1'>
                                    <div className='class-1' onClick={() => setAmount(50)}>
                                        <p onClick={()=> setPack(1)}>1gb</p>
                                        <p className='App-airtime-price'><span className='App-naira-sign'>N50</span></p>
                                        <p className='App-airtime-details'> extra bonus</p>
                                    </div>
                                    <div className='class-1'onClick={() => setAmount(150)}>
                                        <p onClick={()=> setPack(1.5)}>1gb</p>
                                        <p className='App-airtime-price'><span className='App-naira-sign'>N150</span></p>
                                        <p className='App-airtime-details'>include airtime</p>
                                    </div>
                                    <div className='class-1'onClick={() => setAmount(200)}>
                                        <p onClick={()=> setPack(2)}>1gb</p>
                                        <p className='App-airtime-price'><span className='App-naira-sign'>N200</span></p>
                                        <p className='App-airtime-details'>100 bonus</p></div>
                                  </div>
                                  <div className='App-banner-card1'>
                                    <div className='class-1'   onClick={() => setAmount(500)} >
                                        <p onClick={()=> setPack(3)}>3gb</p>
                                        <p className='App-airtime-price'><span className='App-naira-sign'>N500</span></p>
                                        <p className='App-airtime-details'>include ext</p>
                                    </div>
                                    <div className='class-1'onClick={() => setAmount(1000)}>
                                        <p onClick={()=> setPack(5)}>5gb</p>
                                        <p className='App-airtime-price'><span className='App-naira-sign'>N1000</span></p>
                                        <p className='App-airtime-details'>Youtube</p>
                                    </div>
                                    <div className='class-1'onClick={() => setAmount(2000)}>
                                    <   p onClick={()=> setPack(10)}>10gb</p>
                                        <p className='App-airtime-price'><span className='App-naira-sign'>N2000</span></p>
                                        <p className='App-airtime-details'>free talk time</p>
                                    </div>
                                </div>
                                <div className='App-banner-card1'>
                                    <div className='class-1'onClick={() => setAmount(5000)}>
                                        <p onClick={()=> setPack(12)}>12gb</p>
                                        <p className='App-airtime-price'><span className='App-naira-sign'>N5000</span></p>
                                        <p className='App-airtime-details'>Browsing</p>
                                    </div>
                                    <div className='class-1'onClick={() => setAmount(6000)}>
                                        <p onClick={()=> setPack(15)}>15gb</p>
                                        <p className='App-airtime-price'><span className='App-naira-sign'>N6000</span></p>
                                        <p className='App-airtime-details'>Jolly talk time</p>
                                    </div>
                                    <div className='class-1'onClick={() => setAmount(10000)}>
                                        <p onClick={()=> setPack(20)}>20gb</p>
                                        <p className='App-airtime-price'><span className='App-naira-sign'>N10,000</span></p>
                                        <p className='App-airtime-details'>massive</p>
                                    </div>
                                </div>
                                 
                            </div>
                     
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
                                            <h3 className='App-display-overy-header1'>Data Details:</h3>
                                            <p className='App-details-list'><strong>Phone Number:</strong> {data.smart || phoneNumber}</p>
                                            <p className='App-details-list'><strong>Network:</strong> {data.services || network}</p>
                                            <p className='App-details-list'><strong>Amount:</strong> ₦{data.amount || amount}</p>
                                            <p className='App-details-list'><strong>Package:</strong> {data.pack || pack}gb</p>
                                            </div>
                                        </div>

                                        
                                        )}
                                        
    
        </section>
    </div>
    </>
  )
}
