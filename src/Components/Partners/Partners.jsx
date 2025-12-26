import React from 'react'
import brand1  from '../../assets/images/1.png';
import brand2  from '../../assets/images/1.png';
import brand3  from '../../assets/images/1.png';
import brand4  from '../../assets/images/1.png';
import brand5  from '../../assets/images/1.png';
const Partners = () => {
  return (
    <div
      data-aos="zoom-out"
    className='py-8 mt-15 hidden md:block bg-gray-200 dark:bg-white/10'>
     <div className='container'>
        <div className='grid grid-cols-5 gap-3 place-items-center opacity-50'>
            <img src= {brand1} className='w-{80px} dark:invert ' />
            <img src= {brand2} className='w-{80px} dark:invert ' />
            <img src= {brand3} className='w-{80px} dark:invert ' />
            <img src= {brand4} className='w-{80px} dark:invert ' />
            <img src= {brand5} className='w-{80px} dark:invert ' />
        </div>
     </div>
    </div>
  )
};

export default Partners
