import "./ftasection.css";
import Cards from "./cards";
import card1 from "../../constatas/img/card1.png";
import card2 from "../../constatas/img/card2.png";
import card3 from "../../constatas/img/card3.png";

import cardImg from '../../constatas/index'

function FeatureSection() {
  return (
    <section id="Marketplace " className='container pb-20'>
      <div className="fta__wrapper">
        <h1 className="text-center font-bold font-Figtree text-[44px] text-[#545b78] ">
          Your eCommerce <br /> made simple
        </h1>
        <div className="fta__card ">
        <div className="relative">
          <img src={cardImg[15]}  className='absolute left-[-25px] top-12 w-[55px]' alt="" />
          <img src={cardImg[0]} className='absolute w-[220px] left-[-75px] top-16'  alt="" />
          <Cards
            imgCard={card1}
            title={"All You Need to Start"}
            body={"Add WooCommerce plugin to any WordPress site and set up a new store in minutes."}
            btn={"Ecommerce for Wordpress › "}
          />
        </div>
        <div className="mt-24 relative">
          <img src={cardImg[14]}  className='absolute right-16 top-28 w-[180px]' alt="" />
          <img src={cardImg[13]}  className='absolute top-20 left-8 w-[180px]' alt="" />
          <img src={cardImg[1]}  className='absolute right-3 w-[180px]' alt="" />
          <img src={cardImg[2]}  className='absolute top-[-40px] left-11 w-[180px]' alt="" />
          <img src={cardImg[3]}  className='absolute top-[190px] left-28 w-[180px]' alt="" />
          <Cards
            imgCard={card2}
            title={"Customize and Extend"}
            body={"From subscriptions to gym classes to luxury cars, WooCommerce is fully customizable."}
            btn={"Browse Extensions › "}
          />
        </div>

        <div className="mt-40 relative">
        <img src={cardImg[4]}  className='absolute right-[-100px]  w-[250px] top-[80px]' alt="" />
        <img src={cardImg[6]}  className='absolute right-7 top-[-120px]   w-[200px] ' alt="" />
        <img src={cardImg[5]}  className='absolute right-7 top-[-40px] left-6  w-[200px] ' alt="" />
          <Cards
            imgCard={card3}
            title={"Active Community"}
            body={"WooCommerce is one of the fastest-growing eCommerce communities. "}
            btn={"Check our Forums › "}
          />
        </div>
        </div>
        
      </div>
    </section>
  );
}
export default FeatureSection;
