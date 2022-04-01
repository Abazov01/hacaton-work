import React, { useState, useEffect, useContext,  } from "react";
import { useNavigate } from "react-router-dom";
import "./Registr.css";
import { NavLink } from "react-router-dom";
import video from "../../video/Background - 6266.mp4";
import { AllContetxt, UserContext } from "../../UserContext";



export default function Registr({setType}) {
  const API = "https://jwt-ulios-test.herokuapp.com"
  const [email, setEmail] = useState();
  const [name, setUser] = useState();
  const [pass, setPas] = useState();
  const {info, setInfo} = useContext(UserContext)
  const {all, setAll} = useContext(AllContetxt)
  const navigate = useNavigate()

  useEffect(()=>{
    info ? navigate('/'):<p>ups</p>
  },[info])
  const registr = async (e)=>{
    const data = {
    name:name,
    email:email,
    pass:pass,
    }
    e.preventDefault()
    const register = await fetch(API+"/auth/reg", {
      method: "POST",
      headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
  })
  const content = await register.json()
  console.log(content);
  content.token && localStorage.setItem('token', content.token  ) 
  content.token && localStorage.setItem('name', content.name  )
  content.token && localStorage.setItem('email', content.email)
  let token = localStorage.getItem('token')
  if(token.length > 5){
    setInfo(true)
  }else{
    setInfo(false)
  }
  
  }
  
  
    useEffect(()=>{
      let token = localStorage.getItem('token')
      // console.log(all);
      // console.log(token);
      token ? setInfo(true): setInfo(false)
      // console.log(info);
      
    },[all])
  
  return (  
    <div className="registr">
      
      <video autoPlay loop muted className="video">
        <source className="vid" src={video} type={"video/mp4"} />
      </video>
      <form onSubmit={(e)=>registr(e)} className="forom" action="">
        <input value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="email" type="text" />
        <input value={name} onChange={(e)=>setUser(e.target.value)} placeholder="user name" type="text" />
        <input value={pass} onChange={(e)=>setPas(e.target.value)} placeholder="password" type="text" />
        <div className="registr__btns">
          <button>
            <NavLink to={"/hacaton-work/login"}>Login</NavLink>
          </button>
          <button>
            SignUp
          </button>
        </div>
      </form>
    </div>
  );
}
