import { PrimaryBtn } from "../button/primaryBtn"

export default function CtaSection() {
  return (
    <section className='cta__wraper bg-[#5f35ef]'>
      <div className='h-[260] container py-20 flex justify-center flex-wrap'>
          <h2 className='text-[26px] text-white'>WooCommerce - the <span className='font-bold'>most customizable  eCommerce<br /> platform for building your online business.</span></h2>
          <PrimaryBtn className='px-11 py-6 rounded-full border-[1px] border-white bg-[#5f35ef] mx-5'>GET STARTED</PrimaryBtn>
      </div>
    </section>
  )
}
