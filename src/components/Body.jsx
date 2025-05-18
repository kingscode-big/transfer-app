import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping,faHouse,faTv,faSackDollar,
faArrowUpFromBracket,faUsersBetweenLines,faThumbsUp,faBolt,faLandmark,faMoneyBillTransfer,faHeadphones, faUser,faBars,faSquarePhoneFlip,faChartSimple,faStar,faBell} 
from '@fortawesome/free-solid-svg-icons' ; 
import { useEffect ,useState} from 'react';
 

export default function Body() {

    
    const [hold,setHold] = useState([]);


       
    const currentUserEmail = localStorage.getItem("user-app");
     
    useEffect(() => {
        if (currentUserEmail) {
            fetch(`http://localhost:3000/user/${currentUserEmail}`, {
            method: "GET",
           
            headers: {
              "Content-Type": "application/json"
            }
          })
            .then(res => res.json())
            .then(data => {
              setHold(data);
             
              console.log(data)
            //  
            })
            .catch(err => {
              console.error("Error fetching user:", err);
            });
        }
      }, [currentUserEmail]);

      function sideBar() {
        <div>
            <ul>
                <l>Logout</l>
                <l>Check out</l>
                <l>Private</l>

            </ul>
                                 
        </div>
      
      }
  return (
    <>
    <div className='App-form1'> 
    <div className='App-header'>
    <div className='App-user-wrapper'> 
        <p className='App-user'><FontAwesomeIcon icon={faUser} className='App-user-icon'  />   
            
        
                <div className='App-bell-container'> 
                        <p className='App-user1'><FontAwesomeIcon icon={faBell} className='App-user-icon1' onClick={sideBar}  />
                        <p className='App-bell-count'>3</p>
                        </p>
                        <p className='App-user1'><FontAwesomeIcon icon={faBars} className='App-user-icon1'  /></p>
                </div>
                <p className='App-spin-claim1'>Welcome ,lets make a transaction</p>
                <l>Advertise</l>
                
                                     
        </p>
    </div>
    <div className='App-balnce-container'> 
       <div className='App-balance'>
            <p className='App-main-balance'>Available Balance </p>
            <p className='App-amount'>$ 20,00 .12 
            <button className='App-add-money'><Link to={'/addmoney'} className='App-money-text'>Add Money</Link> </button>
            </p>
            <div className='App-promo'>
                <p className='App-Bonus'>Supper Bonus wallet</p>
                <p>$10.96 
                <button className='App-claim'>Claim now</button>
                </p>

                <div className='App-transaction'> 
                <p className='App-transaction1'>Recent History</p>
                <p className='App-transaction1'>Transaction history</p>
                
            </div>
            <div className='App-services'>
                <p className='App-serve'>Services</p>
                <div className='App-list'> 
                    <div className="App-services-list"> <Link to={'/airtime'}><FontAwesomeIcon  icon={faSquarePhoneFlip} className='App-Airtime-icon' /></Link>  
                        <p  className='App-top'>Airtime</p>
                        <div className="App-services-list"> <Link to={'/shop'}><FontAwesomeIcon icon={faCartShopping}  className='App-Airtime-icon' /></Link> </div>
                            <p className='App-icons-name'>shop</p>
                        <div className="App-services-list"> <Link to={'/data'}><FontAwesomeIcon icon={faArrowUpFromBracket}  className='App-Airtime-icon' /></Link> </div>
                        <p className='App-icons-name'>Data</p>
                       
                    </div>
                        <div className="App-services-list"> <Link to={'/tv'}> <FontAwesomeIcon icon={faTv}  className='App-Airtime-icon' /></Link>
                        <p  className='App-top'>Tv</p>
                        <div className="App-services-list"> <Link to={'/transfer'}> <FontAwesomeIcon icon={faSackDollar}  className='App-Airtime-icon'/></Link></div>
                            <p className='App-icons-name'>Transfer</p>
                        <div className="App-services-list"> <Link to={'/bet'}><FontAwesomeIcon icon={faUsersBetweenLines} className='App-Airtime-icon'/> </Link> </div>
                        <p className='App-icons-name'> Bet</p>
                        
                    </div>
                    <div className="App-services-list"> <FontAwesomeIcon icon={faMoneyBillTransfer} className='App-Airtime-icon' /> 
                          <p className='App-top'>Sub</p>
                        <div className="App-services-list"> <Link to={'/referal'}><FontAwesomeIcon icon={faLandmark} className='App-Airtime-icon' /></Link> </div>
                             <p className='App-icons-name'>Referal</p>
                        <div className="App-services-list"><Link to={'/electric'}> <FontAwesomeIcon icon={faBolt} className='App-Airtime-icon' /></Link> </div>
                        <p className='App-icons-name'>electricity </p>
                      
                    </div>

                     
                     
                   
                </div>
                <div className='App-promo1'>
                        <p className='App-Bonus1'>50% Discount</p>
                        <p className='App-spin-claim'>Offer on Every Airtime recharge
                            <button className='App-claim'>Claim now</button>
                         
                        </p>
                  </div>
              
             </div>
             <div className='App-promo'>
                        <p className='App-Bonus'>Exclusive Reward</p>
                        <p className='App-spin-claim'>You have spin waiting for You
                            <button className='App-claim'>Go</button>
                            <p className='App-spin-claim'>Get spin and earn 100% reward</p>
                         
                        </p>
                        
                        
                  </div>
                  
                  <div className='App-footer'>
                        <div className='App-footers'>Home</div>
                        <div className='App-footers'>Loan</div>
                        <div className='App-footers'>Bonus</div>
                       
                      
                    </div>
            </div>
         
            
        </div>
     
        
        
             
        
    </div>
    
    
</div>
</div>
 
 </>
  )
}
