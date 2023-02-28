import "./footer.css";
import { RiRotateLockFill } from "react-icons/ri";
import { FaCheckCircle } from "react-icons/fa";
import { GiTargeted } from "react-icons/gi";
import logo from '../../constatas/img/LOGO.png'
import  { footerLink, footerLink2, footerLink3, footerLink4, footerLink5, } from "../../constatas";

export default function Footer() {
  return (
    <section className="primary__footer__section">
      <div className="footer__wrapper container">
        <div className="botter__top h-[350px]  border-b-[1px] border-white">
          <div className="flex flex-wrap justify-around items-center py-20 ">
            <div className="flex items-center">
              <FaCheckCircle className="text-3xl" />
              <p className="mx-4">30 day money back guarantee</p>
            </div>
            <div className="flex items-center ">
              <GiTargeted className="text-3xl" />
              <p className="mx-4">Support teams across the world</p>
            </div>
            <div className="flex items-center ">
              <RiRotateLockFill className="text-3xl" />
              <p className="ml-4">Safe & Secure online payment</p>
            </div>
          </div>
          <div className="flex justify-center">
            <img src={logo} alt="logo" className="py-10" />
          </div>
        </div>
        <div className="footer__bottom flex flex-wrap justify-around py-7">
          <div className="">
              <h1 className="font-bold text-[14px] text-white">Who we Are</h1>
              {footerLink.map((item)=>(
                <li key={item.id} className='font-normal cursor-pointer text-[12px] list-none text-white opacity-90'><a href={item.id}>{item.title}</a></li>
              ))}
          </div>
          <div className="">
              <h1 className="font-bold text-[14px] text-white">Woocommerce</h1>
              {footerLink2.map((item)=>(
                <li key={item.id} className='font-normal cursor-pointer text-[12px] list-none text-white opacity-90'><a href={item.id}>{item.title}</a></li>
              ))}
          </div>
          <div className="">
              <h1 className="font-bold text-[14px] text-white">Who we Are</h1>
              {footerLink3.map((item)=>(
                <li key={item.id} className='font-normal cursor-pointer text-[12px] list-none text-white opacity-90'><a href={item.id}>{item.title}</a></li>
              ))}
          </div>
          <div className="">
              <h1 className="font-bold text-[14px] text-white">Who we Are</h1>
              {footerLink4.map((item)=>(
                <li key={item.id} className='font-normal cursor-pointer text-[12px] list-none text-white opacity-90'><a href={item.id}>{item.title}</a></li>
              ))}
          </div>
          <div className="">
              <h1 className="font-bold text-[14px] text-white">Who we Are</h1>
              {footerLink5.map((item)=>(
                <li key={item.id} className='font-normal cursor-pointer text-[12px] list-none text-white'><a href={item.id}>{item.title}</a></li>
              ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}
