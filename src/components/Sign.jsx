import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping,faHouse,faTv,faSackDollar,
faArrowUpFromBracket,faUsersBetweenLines,faThumbsUp,faBolt,
faLandmark,faMoneyBillTransfer,faHeadphones, faUser,faBars,
faSquarePhoneFlip,faChartSimple,faStar,faBell} 
from '@fortawesome/free-solid-svg-icons' ; 
import { Link, useNavigate } from 'react-router-dom';

export default function Sign() {
    
    const navigate =useNavigate()

    const [message,setMessage]= useState({
        type:" invisible",
        text:""
    })
    const [userInfo,setUserInfo]= useState({
        name:'',
        email:'',
        password:'',
    })
    function handleInput(event) {
        
    
    setUserInfo((prevState)=>{
        return{...prevState,[event.target.name]:event.target.value}
    })
   }

   function handleSubmit(event) {
    event.preventDefault()

    fetch('http://localhost:3000/user',{
        method:"POST",
        body:JSON.stringify(userInfo),
        headers:{
        "content-type":"application/json"
        }
    })
    .then(res=>res.json())
                   .then(data =>{
                    setMessage({type:'success',text:data.message})
                    if ([data.name,data.email!==undefined]) {
                    
                        localStorage.setItem("userEmail", data.data.email); 
                        
                    }
                   navigate('/log')
        
                    setUserInfo({
                        name:"",
                        email:"",
                        password:"" 
                      
                  
                       })
              
                       setInterval(()=>{
                       setMessage({type:'invisible'})
              
                       },2000)
                     
                   })
                   .catch((err)=>{
                    console.log(err)
                  });
                
   }
  return (
    <> 
    <div>
        <section className='App-form'>
       
            
            <form className='form'>
                
                        <FontAwesomeIcon className='App-users' icon={faUser}  />
                            <h1 className='form-title'><p className='App-page'>Create account</p>
                             <input  className='input'type="text" onChange={handleInput}  placeholder='Name' name='name' value={userInfo.name}/> 

                            <input className='input'type="email"onChange={handleInput} placeholder='Email' name='email'value={userInfo.email} />

                            <input className='input'type="password" onChange={handleInput} placeholder='Password'name='password' value={userInfo.password}  />
                            <button className="App-btn" onClick={handleSubmit}> Sign </button> 
                            <p  className={message.type}>{message.text}</p>
                            <p className='App-log-log'>Already have an account<Link to={'/log'}> Log in</Link></p>
                              
                             

                            </h1>
                        
          </form>
         
</section>
 
      
    </div>
    
    </>
  )
}
