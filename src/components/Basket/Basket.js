import React, { useState } from 'react';
import "./Basket.css"

export default function Basket(props) {
  const { cardItems, onAdd, onRemove } = props;
  const itemsPrice = cardItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 2000 ? 0 : 20;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;

  // const [burger, setBurger] = useState(false)

  // const basketDelete = () => {
  //   setBurger(!burger)
  // }


  return (
    <aside className="block col-1">
      {/* <h2>Блюда</h2> */}
      <div>
        {cardItems.length === 0 && <div>Ваш корзина пуста</div>}
        {cardItems.map((item) => (
          <div key={item.id} className="row">
            <div className="col-2">{item.name}</div>
            <div className="col-2">
              <button onClick={() => onRemove(item)} className="remove">
                -
              </button>{' '}
              <button onClick={() => onAdd(item)} className="add">
                +
              </button>
            </div>

            <div className="col-2 text-right">
              {item.qty}штук x {item.price.toFixed(2)}
            </div>
          </div>
        ))}

        {cardItems.length !== 0 && (
          <>
            <hr></hr>
            <div className="row">
              <div className="col-2">Цена товара</div>
              <div className="col-1 text-right">{itemsPrice.toFixed(2)} сом</div>
            </div>
            <div className="row">
              <div className="col-2">Цена налога</div>
              <div className="col-1 text-right">{taxPrice.toFixed(2)}сом</div>
            </div>
            <div className="row">
              <div className="col-2">Цена доставка</div>
              <div className="col-1 text-right">
                {shippingPrice.toFixed(2)}сом
              </div>
            </div>

            <div className="row">
              <div className="col-2">
                <strong>Итоговая цена</strong>
              </div>
              <div className="col-1 text-right">
                <strong>{totalPrice.toFixed(2)} сом</strong>
              </div>
            </div>
            <hr />
            <div className="row">
              <button onClick={() => alert("Заказ принхаывз")

              }>
            
                Отправить
              </button>
            </div>
          </>
        )}
      </div>
    </aside>
  );
}