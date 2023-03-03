import React from 'react'


export default function Cards({imgCard, title, body, btn}) {
  return (
        
            <div  className='card__container'>
                <div className="img__container">
                    <img src={imgCard} alt="catd" />
                </div>

                <div className="card__content">
                    <div className="card__title">
                        <h2>{title}</h2>
                    </div>     
                    <div className="card__body">
                        <p>{body}</p>
                    </div>
                    <div className="card__btn">
                        <a href={body} className='text-[#299EF3] font-Roboto font-medium'>{btn}</a>
                    </div>
                </div> 
            </div>
  )
}
