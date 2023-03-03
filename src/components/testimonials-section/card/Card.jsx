import React from 'react'
import './card.css'
export default function card({paragraph}) {
  return (
    <div className='card__wrapper'>
      <div className="pragrph">
        <p className='font-Figtree opacity-50 py-16 m-auto w-[450px] '>{paragraph}</p>
      </div>
    </div>
  )
}
