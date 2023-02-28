import Corusel from "./coursel"
import left1 from '../../constatas/img/left1.png'
import left2 from '../../constatas/img/left2.png'
import left3 from '../../constatas/img/left3.png'
import right1 from '../../constatas/img/right1.png'
import right2 from '../../constatas/img/right2.png'
import right3 from '../../constatas/img/right3.png'

const background = [left1, left2, left3, right1, right2, right3]

export default function TyestimonialsSection() {
  return (
    <section className="testimonils__primary__wrapper container">
      <h1 className="topic__section">Trusted by Agencies <br />
      & Store Owners</h1>
      <div className="box__wrapper flex flex-wrap justify-around py-16">
        <div className="left__wrapper w-[300px]">
          <div className='flex justify-end pb-6'>
            <img src={background[0]} alt="" />
          </div>
          <div className="pb-10">
             <img src={background[1]} alt="" />
          </div>
          <div className="flex justify-center">
            <img src={background[2]} alt="" />
          </div>
        </div>
                  <div className="center__wrapper">
                    <Corusel/>
                  </div>
                  
        <div className="right__wrapper w-[300px]">
          <div className="">
            <img src={background[3]} alt="" />
          </div>
          <div className="flex justify-end pb-6">
             <img src={background[4]} alt="" />
          </div>
          <div>
             <img src={background[5]} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}
