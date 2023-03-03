import Corusel from "./Coursel";
import left1 from "../../constatas/img/left1.png";
import left2 from "../../constatas/img/left2.png";
import left3 from "../../constatas/img/left3.png";
import right1 from "../../constatas/img/right1.png";
import right2 from "../../constatas/img/right2.png";
import right3 from "../../constatas/img/right3.png";

import img from "../../constatas/img/test.png";
import grup from "../../constatas/img/grupBg1.png";
import grup1 from "../../constatas/img/section5.png";

const background = [left1, left2, left3, right1, right2, right3];

export default function TyestimonialsSection() {
  return (
    <section className="testimonils__primary__wrapper relative pb-11">
      <h1 className=" text-center font-bold font-Figtree text-[44px] text-[#545b78]">
        Trusted by Agencies <br />& Store Owners
      </h1>
      <div className="box__wrapper flex flex-wrap justify-around py-16">
        <div className="left__wrapper w-[300px]">
          <div className="flex justify-end pb-6 relative">
            <img
              src={background[0]}
              className="w-[100px] absolute bottom-[20px]"
              alt=""
            />
            <img
              src={background[1]}
              className="w-[70px] absolute left-8 top-[100px]"
              alt=""
            />
            <img
              src={background[2]}
              className="w-[85px] absolute top-[300px] left-24"
              alt=""
            />
          </div>
        </div>
        <img src={img} className="w-[600px] h-[390px] absolute z-[-1]" alt="" />
        <img
          src={img}
          className="w-[550px] h-[350px] absolute z-[-3] top-[250px]"
          alt=""
        />
        <img
          src={grup}
          className="absolute z-[-2] left-[780px] top-[230px] w-[370px] "
          alt=""
        />
        <img
          src={grup1}
          className="absolute z-[-4] right-[780px] bottom-[60px] w-[370px]"
          alt=""
        />
        <div className="relative pb-9">
          <Corusel />
        </div>
        <div className="right__wrapper w-[300px]">
          <div className="relative">
            <img
              src={background[3]}
              className="w-[100px] absolute top-[-100px]"
              alt=""
            />
            <img
              src={background[4]}
              className="w-[150px] absolute left-[80px] top-[50px]"
              alt=""
            />
            <img
              src={background[5]}
              className="w-[70px] absolute top-[340px]"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// {/*
// <img src={grup} className="absolute z-[-1] left-[850px] w-[260px]" alt="" />
// <img src={grup1} className="absolute z-[-1] right-[850px] bottom-[200px] w-[260px]" alt="" /> */}
