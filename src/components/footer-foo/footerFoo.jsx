import React from 'react'
import { BsTwitter } from 'react-icons/bs'
import { BsFacebook } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { TiWiFi } from 'react-icons/ti'
import foo from '../../constatas/img/foo.png'

export default function FooterFoo() {
  return (
    <section className='flex container justify-around items-center py-4'>
        <div className='text-[20px] flex  w-[200px] justify-between'>
         <a href="https://t.me/shoxruh_2oo"><BsTwitter /></a>   
         <a href="https://t.me/shoxruh_2oo"><BsFacebook /></a>  
          <a href="https://t.me/shoxruh_2oo"><TiWiFi /></a>  
          <a href="https://t.me/shoxruh_2oo"><BsInstagram /></a>  
        </div>
        <div>
            <h1>COPYRIGHT WOOCOMMERCE 2020 - TERMS & CONDITIONS  PRIVACY POLICY</h1>
        </div>
        <div>
            <img src={foo} alt="" />
        </div>
    </section>
  )
}
