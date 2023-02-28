// // import Carousel from "react-bootstrap/Carousel";
import img from '../../constatas/img/test.png'



import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Corusel() {

 

  return (
    
    <Carousel className='w-[700px] relative'>
    <div>
        <img src={img} alt="shoxaa"/>
        <p className="absolute top-16 left-36 text-center w-[400px] text-[22px] opacity-30">No other eCommerce platform allows people to start for free and grow their tore as their business grows. More importantly, WooCommerce doesn't charge you a portion of your profits as your business grows!</p>
    </div>
    <div>
        <img src={img} alt="shoxaa"/>
        <p className="absolute top-16 left-36 text-center w-[400px] text-[22px] opacity-30">No other eCommerce platform allows people to start for free and grow their tore as their business grows. More importantly, WooCommerce doesn't charge you a portion of your profits as your business grows!</p>
    </div>
    <div>
        <img src={img} alt="shoxaa"/>
        <p className="absolute top-16 left-36 text-center w-[400px] text-[22px] opacity-30">No other eCommerce platform allows people to start for free and grow their tore as their business grows. More importantly, WooCommerce doesn't charge you a portion of your profits as your business grows!</p>
    </div>
</Carousel>

);
}

export default Corusel;    
      

    // <Carousel fade className='w-[600px] relative'>
    //   <Carousel.Item>
    //     <img
    //       className=" w-[570px]"
    //       src={img}
    //       alt="First slide"
    //     />
    //     <Carousel.Caption>
   
    //       <p className='text-black pb-20'>No other eCommerce platform allows people to start for free and grow their store as their business grows. More importantly, WooCommerce doesn't charge you a portion of your profits as your business grows!</p>
    //     </Carousel.Caption>
    //   </Carousel.Item>
    //   <Carousel.Item>
    //     <img
    //       className="d-block  w-[570px]"
    //       src={img}
    //       alt="Second slide"
    //     />

    //     <Carousel.Caption>
       
    //       <p className='text-black pb-20'>No other eCommerce platform allows people to start for free and grow their store as their business grows. More importantly, WooCommerce doesn't charge you a portion of your profits as your business grows!.</p>
    //     </Carousel.Caption>
    //   </Carousel.Item>
    //   <Carousel.Item>
    //     <img
    //       className="d-block  w-[570px]"
    //       src={img}
    //       alt="Third slide"
    //     />

    //     <Carousel.Caption>
    //       <p className='text-black pb-20'>
    //       No other eCommerce platform allows sdfsdfsadfsdfsdaf to start for free and grow their store as their business grows. More importantly, WooCommerce doesn't charge you a portion of your profits as your business grows!
    //       </p>
    //     </Carousel.Caption>
    //   </Carousel.Item>
    // </Carousel>
