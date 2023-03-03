import "./footer.css";
import { RiRotateLockFill } from "react-icons/ri";
import { FaCheckCircle } from "react-icons/fa";
import { GiTargeted } from "react-icons/gi";
import logo from '../../constatas/img/LOGO.png'
import  { footerLink, footerLink2, footerLink3, footerLink4, footerLink5, } from "../../constatas";

export default function Footer() {
  return (
    <section className="primary__footer__section">
      <div className="footer__wrapper">
        <div className="botter__top h-[280px]  border-b-[0.5px]  border-white">
          <div className="flex flex-wrap justify-around items-center pt-10 ">
            <div className="flex items-center">
              <FaCheckCircle className="text-3xl" />
              <p className="mx-4 font-Roboto text-[16px]">30 day <span className="font-bold">money back guarantee</span> </p>
            </div>
            <div className="flex items-center ">
              <GiTargeted className="text-3xl" />
              <p className="mx-4 font-Roboto text-[16px]"><span className="font-bold">Support</span>  teams across the world</p>
            </div>
            <div className="flex items-center ">
              <RiRotateLockFill size={35}/>
              <p className="ml-4 font-Roboto text-[16px]"><span className="font-bold">Safe & Secure</span>  online payment</p>
            </div>
          </div>
          <div className="flex justify-center">
            <img src={logo} alt="logo" className="pt-32 w-[150px]  " />
          </div>
        </div>

        {/* ---------------------------botton----------------------- */}

        <div className="footer__bottom flex flex-wrap justify-evenly py-7">
          <div className="">
              <h1 className="font-bold text-[12px] text-white font-Roboto py-3">Who we Are</h1>
              {footerLink.map((item)=>(
                <li key={item.id} className='font-normal cursor-pointer text-[12px] list-none text-white opacity-90'><a href={item.id}>{item.title}</a></li>
              ))}
          </div>
          <div className="">
              <h1 className="font-bold text-[12px] text-white font-Roboto py-3">Woocommerce</h1>
              {footerLink2.map((item)=>(
                <li key={item.id} className='font-normal cursor-pointer text-[11px] list-none text-white opacity-90'><a href={item.id}>{item.title}</a></li>
              ))}
          </div>
          <div className="">
              <h1 className="font-bold text-[12px] text-white font-Roboto py-3">Other products</h1>
              {footerLink3.map((item)=>(
                <li key={item.id} className='font-normal cursor-pointer text-[11px] list-none text-white opacity-90'><a href={item.id}>{item.title}</a></li>
              ))}
          </div>
          <div className="">
              <h1 className="font-bold text-[12px] text-white font-Roboto py-3">Support</h1>
              {footerLink4.map((item)=>(
                <li key={item.id} className='font-normal cursor-pointer text-[11px] list-none text-white opacity-90'><a href={item.id}>{item.title}</a></li>
              ))}
          </div>
          <div className="">
              <h1 className="font-bold text-[12px] text-white font-Roboto py-3">We recommend</h1>
              {footerLink5.map((item)=>(
                <li key={item.id} className='font-normal cursor-pointer text-[11px] list-none text-white'><a href={item.id}>{item.title}</a></li>
              ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}
