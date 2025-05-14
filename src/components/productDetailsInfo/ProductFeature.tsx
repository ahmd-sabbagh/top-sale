import { productFeatures } from '@/utils/data'
import React from 'react'

const ProductFeature = () => {
  return (
    <div className='p-4 pt-0 border border-color border-t-0'>
        {productFeatures.map((item,idx) => (
            <div key={idx} className='p-4 flex items-center even:bg-[#F8F8F8B2]'>
                <p className='desc-color text-sm md:text-base w-1/2'>{item.name}</p>
                <p className='title-color text-sm md:text-base w-1/2'>{item.description}</p>
            </div>
        ))}
    </div>
  )
}

export default ProductFeature