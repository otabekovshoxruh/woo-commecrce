import { PrimaryBtn } from "../button/primaryBtn";
import clentImg from "../../constatas/img/featured-image.png";
import style from "../../style";
import "./index.css";

const HeroSection = () => (
  <section
    id="sill"
    className={`container  md:flex-row flex-col ${style.paddindY} `}
  >
    <div className="primary__wrapper primary__container">
      <div className="wrapper__right">
        <h1 className="hero_bild font-Readex text-[#272D4E]">
          Building exactly the <br />eCommerce website <br /> you want.
        </h1>
        <p>
          WooCommerce is a customizable, open-source eCommerce platform built on
          WordPress. <br /> Get started quickly and make your way.
        </p>

        <div className="flex justify-between items-center w-[380px]">
          <PrimaryBtn className="px-8 py-4  rounded-full font-Roboto ">
            Start a New Store
          </PrimaryBtn>
           <span className="opacity-25">or</span>
           <a href="extend" className="text-[#299EF3] font-Roboto font-medium"> Customize & Extend  › </a>
        </div>
      </div>
      <div className="wrapper__left ">
        <img src={clentImg}   alt="clentImg"/>
        
      </div>
    </div>
  </section>
);
export default HeroSection;

// {/* <div className="flex flex-row justify-between items-center w-full">
//                <h1 className="flex-1 font-bold text-[66px] ">Building exactly the <br className="sm:block hidden" />Commerce website <br /> you want.</h1>
//                <p className="max-w-[470px]">WooCommerce is a customizable, open-source eCommerce platform built on WordPress.
//                Get started quickly and make your way.</p>
//           </div> */}
