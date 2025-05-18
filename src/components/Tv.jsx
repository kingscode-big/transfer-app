import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping,faHouse,faTv,faSackDollar,
faArrowUpFromBracket,faUsersBetweenLines,faThumbsUp,faBolt,faLandmark,faMoneyBillTransfer,faHeadphones, faUser,faBars,faSquarePhoneFlip,faChartSimple,faStar,faBell} 
from '@fortawesome/free-solid-svg-icons' ; 
import image34 from '../Image/image34.jpeg'
import image123 from '../Image/image123.jpg'
import shop7 from '../Image/shop7.webp'
import shop5 from '../Image/shop5.webp'
import shop14 from '../Image/shop14.jpeg'
import shop8 from '../Image/shop8.jpeg'
 
export default function Tv() {
  return (
    <div>
       <section className='App-airtime-section'>
            <div className='App-airtime-head'><Link to={'/body'} className='App-home-airtime'>
            <FontAwesomeIcon icon={faTv}  className='App-Airtime-icon' />Tv</Link></div>
    
            <div className='App-tv-banner2'><i>5% CASHBACK</i> 
                     <p className='App-offer'><i>On YOUR Tv subscription<br></br>Grab now</i>
                     </p>
                     <p><button className='App-offer-button'>Go</button></p>
            </div>
                   <div className='App-airtime-banner5'>
                             <form className='form-banner'>
                                <div className='App-banner-display'> 
                              
                                  <select className='App-network-select'>
                                    <option>Dstv </option>
                                    <option >Startime</option>
                                    <option >Gotv</option>
                                    
                                  </select>
                                  <input  className='input-banner' type="number" placeholder='Enter smartcard Number' name='name'  />
                                  <p><FontAwesomeIcon icon={faUser }  className='App-Airtime-icon1' /></p>
                                 </div>
                            </form>
                            
                            <div className='App-airtime-banner-ad'>Enjoy to N30 cashback on your  first TV recharge every month</div>

                            <div className='App-banner-card5'>
                                <div className='App-banner-card2'>
                                    <div className='class-12'>
                                        <p className='App-airtime-price'></p>
                                        <img src={shop7} className='App-tv-image'></img>
                                        <p className='App-airtime-details'> The man</p>
                                        <p className='App-airtime-details'> N25,000</p>
                                    </div>
                                     
                                    <div className='class-12'>
                                        <p className='App-airtime-price'></p>
                                        <img src={shop14} className='App-tv-image'></img>
                                        <p className='App-airtime-details'> Ladies hour</p>
                                        <p className='App-airtime-details'> N10,000</p>
                                    </div>
                                    <div className='class-12'>
                                        <p className='App-airtime-price'></p>
                                        <img src={shop7} className='App-tv-image'></img>
                                        <p className='App-airtime-details'> The man</p>
                                        <p className='App-airtime-details'> N25,000</p>
                                    </div>
                                  </div>
                                  <div className='App-banner-card2'>
                                  
                                    <div className='class-12'>
                                        <p className='App-tv-price'></p>
                                        <img src={image34} className='App-tv-image'></img>
                                        <p className='App-tv-details'>Family hours</p>
                                        <p className='App-tv-details'>N3000</p>
                                    </div>
                                    <div className='class-12'>
                                        <p className='App-tv-price'></p>
                                        <img src={shop8} className='App-tv-image'></img>
                                        <p className='App-tv-details'>Evil boys</p>
                                        <p className='App-tv-details'>N5,000</p>
                                    </div>
                                    <div className='class-12'>
                                        <p className='App-tv-price'></p>
                                        <img src={shop8} className='App-tv-image'></img>
                                        <p className='App-tv-details'>Evil boys</p>
                                        <p className='App-tv-details'>N5,000</p>
                                    </div>
                                </div>
                                <div className='App-banner-card2'>
                                    <div className='class-12'>
                                        <p className='App-tv-price'></p>
                                        <img src={image123} className='App-tv-image'></img>
                                        <p className='App-tv-details'>  love life</p>
                                        <p className='App-tv-details'> N20,000</p>
                                    </div>
                                     
                                    <div className='class-12'>
                                        <p className='App-tv-price'></p>
                                        <img src={shop5} className='App-tv-image'></img>
                                        <p className='App-tv-details1'> queen life</p>
                                       
                                    </div>
                                    <div className='class-12'>
                                        <p className='App-tv-price'></p>
                                        <img src={shop5} className='App-tv-image'></img>
                                        <p className='App-tv-details1'> queen life</p>
                                       
                                    </div>
                                </div>
                                 
                            </div>
                     
                   </div>
                    
                  
    
        </section>
       
    </div>
  )
}
