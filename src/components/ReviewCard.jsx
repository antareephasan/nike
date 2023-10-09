import React from 'react'
import { star } from '../assets/icons'

const ReviewCard = ({imgURL, customerName, rating, feedback}) => {
  return (
    <section className='flex flex-col items-center justify-center'>
        <img 
            src={imgURL} 
            alt={customerName}
            className='w-[120px] h-[120px] rounded-full object-cover' 
        />

        <p className=' mt-6 max-w-sm info-text text-center'>{feedback}</p>

        <div className="flex justify-center items-center gap-2.5 mt-3">
            <img 
                src={star} alt="rating icon" 
                width={24} height={24} 
                className='object-contain m-0'
            /> 
            <p className="leading-normal text-xl font-montserrat text-slate-gray">({rating})</p>
        </div>

        <h3 className='mt-1 font-palanquin text-3xl leading-normal text-center
            font-bold'>{customerName}</h3>

    </section>
  )
}

export default ReviewCard