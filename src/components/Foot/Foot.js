import React, { useState, useEffect, useContext } from 'react';
import OutputFood from '../OutputFoot/OutputFoot.js';
import { AllContetxt } from '../../UserContext.js';
import { UserContext } from '../../UserContext.js';





export default function Food(props) {
  const { onAdd } = props;

  const [data, setData] = useState([])
  const {all, setAll} = useContext(AllContetxt)
  const {info,setInfo} = useContext(UserContext)

  const getData = async () => {
    let req = await fetch('https://ashkana.herokuapp.com/products/')
    let res = await req.json()
    setData(res)
  }
  console.log(data);
  useEffect(() => {
    getData()
  }, [])

  useEffect(()=>{
    let token = localStorage.getItem('token')
    console.log(all);
    console.log(token);
    token ? setInfo(true): setInfo(false)
  },[all])

  return (

    <div >

     <OutputFood
       data={data}
       onAdd={onAdd}/>

    </div>);
}


// import React,{useEffect, useContext} from 'react';
// import { AllContetxt, UserContext } from '../../UserContext';

// export default function Foot() {

//   const {all, setAll} = useContext(AllContetxt) 
//   const {info, setInfo} = useContext(UserContext)
  
//   const foot = async()=>{
//     const req = await fetch("https://pizza-and-desserts.p.rapidapi.com/desserts", {
//       "method": "GET",
//       "headers": {
//         "x-rapidapi-host": "pizza-and-desserts.p.rapidapi.com",
//         "x-rapidapi-key": "c08f676cf4mshe49242ca6710091p1cb3bbjsn71edc1a29328"
//       }
//     })
//     const res = await req.json()
//     console.log(res);
    
//   }
//   foot()

//   useEffect(()=>{
//     let token = localStorage.getItem('token')
//     console.log(all);
//     console.log(token);
//     token ? setInfo(true): setInfo(false)
//   },[all])
// // .then(response => {
// // 	console.log(response);
// // })
// // .catch(err => {
// // 	console.error(err);
// // });
//   return <div>
      
//   </div>;
// }
