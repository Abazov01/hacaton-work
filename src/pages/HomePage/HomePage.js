import React, { useEffect, useState } from 'react';
import Foot from '../../components/Foot/Foot';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer'
import Basket from '../../components/Basket/Basket';
import Modal from '../../components/Modal/Modal';

export default function HomePage() {


  const [cardItems, setCardItems] = useState([])
  const [show, setShow] = useState(false)



  const onAdd = (product) => {
    const exist = cardItems.find((x) => x.id === product.id);
    if (exist) {
      setCardItems(
        cardItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCardItems([...cardItems, { ...product, qty: 1 }]);
    }
  };



  const onRemove = (product) => {
    const exist = cardItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCardItems(cardItems.filter((x) => x.id !== product.id));
    } else {
      setCardItems(
        cardItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };



  return <div>
    <Header  setShow={setShow} countCartItems={cardItems.length} />
    <Modal show={show} 
    setShow={setShow}>
      <Basket
      cardItems={cardItems}
      onAdd={onAdd}
      onRemove={onRemove}
    />
    </Modal>
    

    <Foot onAdd={onAdd} />

    

    <Footer />
  </div>;
}








// import React,{useEffect, useState} from 'react';
// import Foot from '../../components/Foot/Foot';
// import Header from '../../components/Header/Header';

// export default function HomePage() {

//   // const [data, setData] = useState([])

  

//   // const res = async()=>{

    
//   //   const req = await fetch("http://192.168.1.115:1234/products/")
//   //   const res = await req.json()
//   //   setData(res)
//   // }
//   // useEffect(()=>{
//   //   res()
//   // },[])
//   // console.log(data);
//   // console.log(data[0]?.image);
  
  
//   return <div>
//     <Header/>
//     <Foot/>
//   </div>;
// }

