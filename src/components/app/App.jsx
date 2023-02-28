import React from "react";
import { Header, HeroSection, Main } from "../";
import style from "../../style";


export default function App() {
  return (
    <div>
      <div className={`${style.heroColor}`}>
        <Header />
        <HeroSection />
      </div>
        <Main />
    </div>
  );
}
