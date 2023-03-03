import "./section.css";
import section__bootim from "../../constatas/img/section__bottom.png";
import section__top from "../../constatas/img/section__top.png";
import { Secondary } from "../button/secondaryBtn";

import sctionImg from '../../constatas/index'

export default function Section() {
  return (
    <section className="primary__wrapper__section">
      <div className="">
        <div className="flex justify-center relative">
        <img src={sctionImg[7]} className='absolute  w-[310px] left-[190px] top-[160px]' alt="" />
        <img src={sctionImg[12]} className='absolute w-14 left-[190px] top-[100px] z-10' alt="" />
        <img src={sctionImg[8]} className='absolute right-0 w-[400px]' alt="" />
        <img src={sctionImg[9]} className='absolute left-[200px] top-[300px] w-[170px]' alt="" />
          <div className="top__left w-[400px]">
            <img src={section__bootim} className='w-[400px] absolute left-[250px] top-[-50px]' alt="section top" />
          </div>
          <div className="top__right pt-7">
            <h2 className="b__title font-Figtree">
              Develop <br /> Without Limits
            </h2>
            <p className="b__body font-Roboto text-base">
              WooCommerce is developer friendly, too. Built with a REST API,
              WooCommerce is scalable and can integrate with virtually any
              service. Design a complex store from scratch, extend a store for a
              client, or simply add a single product to a WordPress site—your
              store, your way.
            </p>

            <Secondary className="bg-[#70c712] py-4 px-5  rounded-full my-6">
              Read the Documentation
            </Secondary>
          </div>
        </div>

        {/*------------------------------------ bottom-------------------------------------- */}

        <div className="flex justify-center  relative pt-20 pl-9">
        <img src={sctionImg[10]} className='absolute right-[180px] top-[60px]' alt="" />
        <img src={sctionImg[12]} className='absolute w-12 right-[520px] top-[70px] z-10' alt="" />
        <img src={sctionImg[11]} className='absolute right-28 top-[230px]' alt="" />
          <div className="bottom__left">
            <h2 className="b__title font-Figtree">
              Know our <br /> Global Community
            </h2>
            <p className="b__body font-Roboto text-base ">
              WooCommerce is one of the fastest-growing eCommerce communities.
              We’re proud that the helpfulness of the community and a wealth of
              online resources are frequently cited as reasons our users love
              it. There are 80+ meetups worldwide!
            </p>
            <Secondary className="bg-[#70c712] py-4 px-8 rounded-full my-6">
              Read the Documentation
            </Secondary>
          </div>
          <div className="bottom__right">
            <img src={section__top} className='w-[400px] absolute right-[280px] top-[70px]' alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
