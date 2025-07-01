import { share } from '@/assets'
import Image from 'next/image'
import React from 'react'

const Share = () => {
  return (
    <button type="button" className='w-10 h-10 flex-c rounded-full bg-[#F8F8F8] border border-color'>
        <Image src={share} alt='share-icon' loading='lazy' />
    </button>
  )
}

export default Share