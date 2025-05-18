import React, { useContext, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping,faHouse,faTv,faSackDollar,
faArrowUpFromBracket,faUsersBetweenLines,faThumbsUp,faBolt,
faLandmark,faMoneyBillTransfer,faHeadphones, faUser,faBars,
faSquarePhoneFlip,faChartSimple,faStar,faBell} 
from '@fortawesome/free-solid-svg-icons' ; 
import { useNavigate } from 'react-router-dom';
import { UserContext } from './userContext';
import { Link } from 'react-router-dom';
 
export default function Log() {

  const logUser=useContext(UserContext)
  const navigate =useNavigate()

  const[userLog,setUserLog]= useState({
    name:"",
    password:"",
  });
  
  const[message,setMessage]=useState({
    type:'invisible',
    text:' thanks'
  })

  function handleInput(event) 
  {
    console.log(event.target.value)
    event.preventDefault()
    setUserLog((prevState)=>{
      return{...prevState,[event.target.name]:event.target.value}
    })
  }

  function handleSubmit(event) {
    event.preventDefault()
    console.log(userLog)

    fetch('http://localhost:3000/login',{
      method:"POST",
      body:JSON.stringify(userLog),
      headers:{
        "content-type":"application/json"
      }
    })
    .then((response)=>{
        if (response.status===404) {
          setMessage({type:'error', text:'Incorrect password'})
          
        }else if(response.status===401)
        {
          setMessage({type:'error',text:'Wrong name'})
        }else if(response.status===200)
        {
          return response.json();
        }
        setInterval(()=>{
          setMessage({type:'invisible',text:'logged'})
        },5000)
      })  
      .then((data)=>{
        console.log(data)
 
        
        if ([data.token!==undefined]) {
         
          localStorage.setItem('user-app',JSON.stringify(data));
          
        
           
           navigate('/body')
        }
   
      })
      .catch((err)=>{
        console.log(err)
      })
  
  }
  return (
    <> 
    <div>
        <section className='App-form'>
             
                  
                  <form className='form'>
                      
                              <FontAwesomeIcon className='App-users' icon={faUser}  />
                                  <h1 className='form-title'><p className='App-page'>Login </p>
                                   <input  className='input'type="text" onChange={handleInput}  placeholder='Name' name='name'value={userLog.name} />
      
                                  <input className='input'type="password" onChange={handleInput} placeholder='Password'name='password' value={userLog.password}/>
                                  <button className="App-btn" onClick={handleSubmit}> Sign </button> 
                                  <p className={message.type}>{message.text}</p>

                                  
                                 <p className='App-log-log'>Dont have an account<Link to={'/sign'}>Sign up</Link></p>
                              
                                  
                                    
                                   
      
                                  </h1>
                              
                </form>
               
      </section>
       
            
    </div>
    </>
  )
}
