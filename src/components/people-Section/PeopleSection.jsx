import group from '../../constatas/img/image.png'

export default function PeopleSection() {
  return (
    <section className='people__section__wrapper container'>
      <div className='items-center'>
        <h1 className='topic__section'>Supported by real people</h1>
         <p className='text-[#94A2B3] text-[13px] m-auto w-[430px] text-center'>Our team of Happiness Engineers works remotely from 58 countries providing customer support across multiple time zones.</p>
      </div>
      <div>
        <img src={group} alt="" />
      </div>
    </section>
  )
}
