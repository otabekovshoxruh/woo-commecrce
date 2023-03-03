import group from '../../constatas/img/image.png'
import group1 from '../../constatas/img/grupBg1.png'
import group2 from '../../constatas/img/grupBgg1.png'
import group3 from '../../constatas/img/section5.png'
import group4 from '../../constatas/img/peaple2.png'
import group5 from '../../constatas/img/peaple1.png'



export default function PeopleSection() {
  return (
    <section className='people__section__wrapper pt-[40px]'>
      <div className='items-center'>
        <h1 className='text-center font-bold font-Figtree text-[44px] text-[#545b78] '>Supported by real people</h1>
         <p className='text-[#94A2B3] text-[14px] m-auto w-[470px] text-center'>Our team of Happiness Engineers works remotely from 58 countries providing customer support across multiple time zones.</p>
      </div>
      {/* -----------------img--------- */}
      <div className='relative h-[250px]'>
        <img src={group1} alt="" className=' absolute right-28 top-[135px] w-[400px] z-[-1]' />  
        <img src={group3} alt="" className=' absolute  left-[80px] top-[210px] z-[-1] ' />
        <img src={group4} alt="" className=' absolute  bottom-[50px] z-[-1]  left-[100px] top-[50px]' />
        <img src={group4} alt="" className=' absolute z-[10] right-24 top-[430px] w-[70px]' />
        <img src={group5} alt="" className=' absolute  bottom-[50px] z-[-1]  left-[190px] ' />
        <img src={group5} alt="" className=' absolute right-[240px] top-[50px] z-[-1]  ' />
        <img src={group2} alt="" className='absolute z-[-1] w-[1200px] right-[150px] bottom-[-150px]' />
        <img src={group} alt="" className='w-[1000px] absolute right-[250px] bottom-0' /> 
        
      </div>
    </section>
  )
}
