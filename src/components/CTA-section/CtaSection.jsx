import { Secondary } from "../button/secondaryBtn"

export default function CtaSection() {
  return (
    <section className='cta__wraper bg-[#5f35ef]'>
      <div className='  py-[75px] flex justify-center flex-wrap pl-16'>
          <h2 className='text-[27px] text-white font-Roboto'>WooCommerce - the <span className='font-bold'>most customizable  eCommerce<br /> platform  <span className="font-normal">for building</span>  your online business.</span></h2>
          <div>
            <Secondary className='px-[34px] py-4  ml-11 rounded-full border-[2px] border-white bg-[#5f35ef]  font-Roboto'>GET STARTED</Secondary>
          </div> 
      </div>
    </section>
  )
}
