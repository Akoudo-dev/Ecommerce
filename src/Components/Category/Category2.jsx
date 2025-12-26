import React from 'react';
import Image1 from '../../assets/images/p3-.png';
import Image2 from '../../assets/images/p10 (2).png';
import Image3 from '../../assets/images/p4.png';

import Button from '../shared/Button';

const Category = () => {
  return (
    <div className='py-8 px-20'>
      <div className=''>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>

              {/*  first col */}
           <div className=' sm:col-span-2 py-10 pl-5 bg-gradient-to-br from-gray-400/90 to-gray-100 text-white rounded-3xl relative
                     h-[320px] flex items-end '>
            <div >
                <div className='mb-4 '>
                    <p className=' text-white'>Enjoy</p>
                    <p className='text-2xl font-semibold  '>With</p>
                    <p className='text-4xl xl:text-5xl font-bold opacity-40 mb-3' >Wristwatch</p>
                    <Button
                         text='Browse'
                        bgColor='bg-primary'
                         textColor='text-white'
                    />
                </div>
            </div>
            <img src= {Image3} className='w-[200px] absolute   top-1/2  -translate-y-1/2 -right-0' />
           </div>
           
           {/*  second col */}
           <div className='py-10 pl-5 bg-gradient-to-br from-black/90 to-black/70 text-white rounded-3xl relative
                     h-[320px] flex items-start '>
            <div >
                <div className='mb-4 '>
                    <p className='mb-[2px] text-gray-400'>Enjoy</p>
                    <p className='text-2xl font-semibold mb-[2px] '>With</p>
                    <p className='text-4xl xl:text-5xl font-bold opacity-20 mb-2' >Earphone</p>
                    <Button
                  text='Browse'
                  bgColor='bg-primary'
                  textColor='text-white'
                />
                </div>
            </div>
            <img src= {Image1} className='w-[150px] absolute rounded-full   -right-0 mb-10' />
           </div>
           {/*  tired col */}

           <div className='py-10 pl-5 bg-gradient-to-br from-brandYellow  to-brandYellow/90 text-white rounded-3xl relative
                     h-[320px] flex items-start '>
            <div >
                <div className='mb-4 '>
                    <p className='mb-[2px] text-white'>Enjoy</p>
                    <p className='text-2xl font-semibold mb-[2px] '>With</p>
                    <p className='text-4xl xl:text-5xl font-bold opacity-50 mb-2' >Gadget</p>
                    <Button
                  text='Browse'
                  bgColor='bg-white'
                  textColor='text-brandYellow'
                />
                </div>
            </div>
            <img src= {Image2} className='w-[200px] absolute rounded-4xl   -right-0 py-7 lg:top-[40px] ' />
           </div>
         
        </div>
      </div>
    </div>
  );
};

export default Category

