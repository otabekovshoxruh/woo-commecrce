import React from "react";
import { Header, HeroSection, Main } from "../";
import style from "../../style";


export default function App() {
  return (
    <div >
      <div className={`${style.heroColor} `}>
        <div className="primary__bg box__wrapper">
          <Header />
           <HeroSection />
        </div>
        
      </div>
        <Main />
    </div>
  );
}
