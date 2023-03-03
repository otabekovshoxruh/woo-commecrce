import "./corusel.css";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import Card from "./card/Card";
import { useState } from "react";

const cardParagraph = [
  {
    id: 1,
    value:
      "No other eCommerce platform allows people to start for free and grow their store as their business grows. More importantly, WooCommerce doesn't charge you a portion of your profits as your business grows!",
  },
  {
    id: 2,
    value:
      "No other eCommerce platform allows people to start for free and grow their store as their business grows. More importantly, WooCommerce doesn't charge you a portion of your profits as your business grows!",
  },
  {
    id: 3,
    value:
      "No other eCommerce platform allows people to start for free and grow their store as their business grows. More importantly, WooCommerce doesn't charge you a portion of your profits as your business grows!",
  },
  {
    id: 4,
    value:
      "No other eCommerce platform allows people to start for free and grow their store as their business grows. More importantly, WooCommerce doesn't charge you a portion of your profits as your business grows!",
  },
];

export default function Coursel() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    if ((cardParagraph.length - 1) * 590 > current) setCurrent((prev) => prev + 590);
  };

  const prevSlide = () => {
    if (current > 0) setCurrent((prev) => prev - 590);
  };

  return (
    <div className="carusel__primary">
      <div className="box">
        <div
          className="carusel__card"
          style={{
            transform: `translateY(-${current}px)`,
            gridTemplateRows: `repeat(${cardParagraph.length},520px)`,
          }}
        >
          {cardParagraph.map((item) => {
            return <Card key={item.id} paragraph={item.value} />;
          })}
        </div>
      </div>

      <div className="corusel__btn relative">
        <button className="absolute top-10 right-[70px] ">
          <BsArrowLeft onClick={prevSlide}  className='text-[28px] transition-[8] text-[#cfd1d8] hover:text-[36px] hover:text-black'/>
        </button>
        <button  className="absolute top-10 right-[30px]">
          <BsArrowRight  onClick={nextSlide} className='text-[28px] transition-[8] text-[#cfd1d8] hover:text-[36px] hover:text-black' />
        </button>
      </div> 
    </div>
  );
}
