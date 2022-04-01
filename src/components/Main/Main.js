import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";
import AboutPage from "../../pages/AboutPage/AboutPage";
import DrinksPage from "../../pages/DrinksPage/DrinksPage";
import DessertPage from "../../pages/DessertPage/DessertPage";
import LoginPage from "../../pages/LoginPage/LoginPage";
import RegistrPage from "../../pages/RegistrPage/RegistrPage";
import { AllContetxt, UserContext, BasketContext } from "../../UserContext";
import Basket from "../Basket/Basket";

export default function Main({ setType }) {
  const [info, setInfo] = useState(null);
  const [all, setAll] = useState(false);
  const [basket, setBasket] = useState(false);

  return (
    <div>
      <BasketContext.Provider value={{ basket, setBasket }}>
        <AllContetxt.Provider value={{ all, setAll }}>
          <UserContext.Provider value={{ info, setInfo }}>
            <Routes>
              <Route
                path="/hacaton-work"
                element={<HomePage setType={setType} />}
              />
              <Route path="hacaton-work/drinks" element={<DrinksPage />} />
              <Route path="hacaton-work/desserts" element={<DessertPage />} />
              <Route path="hacaton-work/about" element={<AboutPage />} />
              <Route
                path="hacaton-work/login"
                element={<LoginPage setType={setType} />}
              />
              <Route
                path="hacaton-work/registr"
                element={<RegistrPage setType={setType} />}
              />
              <Route path="/asd" elment={<Basket />} />
            </Routes>
          </UserContext.Provider>
        </AllContetxt.Provider>
      </BasketContext.Provider>
    </div>
  );
}
