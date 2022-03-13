import React,{useState,useEffect, useContext} from "react";
import "./Login.css";
import { NavLink, useNavigate } from "react-router-dom";
import video from "../../video/Background - 6266.mp4";
import { AllContetxt, UserContext } from "../../UserContext";


export default function Login({setType}) {
  const [a, setA] = useState()
  const [b, setB] = useState()
  const [c, setC] = useState()
  const navigate = useNavigate()
  const API = 'https://jwt-ulios-test.herokuapp.com'
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();
  const {info, setInfo} = useContext(UserContext)
  const {all, setAll} = useContext(AllContetxt)
  
  const auth = async (e)=>{
    const data = {
    email,
    pass
    }

    e.preventDefault()
    const register = await fetch(API+'/auth/sign-in', {
      method: "POST",
      headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
  })
  const res = await register.json()
  // console.log(res);
  if(res.token){
    localStorage.setItem('token', res.token) 
    localStorage.setItem('name', res.name) 
    localStorage.setItem('email', res.email)
  }else{
    localStorage.setItem('message', res.message)
    localStorage.setItem('error', res.errors.errors[0].msg)
    localStorage.setItem('errors', res.errors.errors[1].msg)
    let mes = localStorage.getItem('message')
    let err = localStorage.getItem('error')
    let errs = localStorage.getItem('errors')
    setA(mes)
    setB(err)
    setC(errs)
    // console.log(a,b,c);
  }
  let token = await localStorage.getItem('token')
  token.length > 2 ? setInfo(true) : setInfo(false)
  // await info ? navigate('/drinks'):<p>ups</p>
}

useEffect(()=>{
  info ? navigate('/'):<p>ups</p>
 
},[info])

useEffect(()=>{
  let token = localStorage.getItem('token')
  console.log(all);
  console.log(token);
  token ? setInfo(true): setInfo(false)
},[all])
  
  
  return (
    <div className="form">
      <p>{a}</p>
      <p>{b}</p>
      <p>{c}</p>
      <video autoPlay loop muted className="video">
        <source className="vid" src={video} type={"video/mp4"} />
      </video>
      <form onSubmit={(e)=>auth(e)} action="">
        <input value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="example@example.com" type="text" />
        <input value={pass} onChange={(e) =>setPass(e.target.value)} placeholder="password" type="text" />
        <div className="btns ">
          <button>
            <NavLink to={"/registr"}>SignUp</NavLink>
          </button>
        <button >Login</button>
      </div>
      </form>
    </div>
  );
}
