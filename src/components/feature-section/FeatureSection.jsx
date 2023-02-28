import "./ftasection.css";
import Cards from "./cards";
import card1 from "../../constatas/img/card1.png";
import card2 from "../../constatas/img/card2.png";
import card3 from "../../constatas/img/card3.png";

function FeatureSection() {
  return (
    <section id="Marketplace " className='container flex'>
      <div className="fta__wrapper">
        <h1 className="topic__section">
          Your eCommerce <br /> made simple
        </h1>
        <div className="fta__card ">
        <div className="">
          <Cards
            imgCard={card1}
            title={"All You Need to Start"}
            body={"Add WooCommerce plugin to any WordPress site and set up a new store in minutes."}
            btn={"Ecommerce for Wordpress "}
          />
        </div>
        <div className="mt-24">
          <Cards
            imgCard={card2}
            title={"Customize and Extend"}
            body={"From subscriptions to gym classes to luxury cars, WooCommerce is fully customizable."}
            btn={"Browse Extensions "}
          />
        </div>

        <div className="mt-40">
          <Cards
            imgCard={card3}
            title={"Active Community"}
            body={"WooCommerce is one of the fastest-growing eCommerce communities. "}
            btn={"Check our Forums "}
          />
        </div>
        </div>
        
      </div>
    </section>
  );
}
export default FeatureSection;
