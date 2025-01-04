import Image from 'next/image'
import React from 'react'

const Filter = () => {
  return (
    <div className='bg-[#FAF4F4] md:h-[90px] h-[50px] flex justify-between items-center md:px-20 px-8 -mt-24 md:mt-0'>
              <div className='flex justify-center items-center gap-2 md:gap-4 text-[16px] '>
                  <Image
                  src={'/images/system-uicons_filtering.webp'}
                      alt=''
                      height={20}
                      width={20}
                      className='md:h-[20px] md:w-[20px] h-[16px] w-[16px]'

                  />
                  <p className='text-[10px] md:text-[16px] text-black'>Filter</p>
                   <Image
                  src={'/images/ci_grid-big-round.webp'}
                      alt=''
                      height={20}
                      width={20}
                      className='md:h-[20px] md:w-[20px] h-[16px] w-[16px]'
                  />
                   <Image
                  src={'/images/bi_view-list.webp'}
                      alt=''
                      height={20}
                      width={20}
                      className='md:h-[20px] md:w-[20px] h-[16px] w-[16px]'
                  />
                  <Image
                  src={'/images/Line 5.webp'}
                      alt=''
                      height={1.5}
                      width={1.5}
                  />
                  <p className='text-[10px] md:text-[16px] text-black'>Showing 1–16 of 32 results</p>
              </div>
              <div className=' hidden md:flex justify-center items-center gap-2 md:gap-4 text-[10px] md:text-[16px] font-medium'>
                  <p className='text-black'>Show</p>
                  <p className='text-[#9F9F9F] bg-white px-4 py-3'>16</p>
                  <p className='text-black'>Short By</p>
                  <p className='text-[#9F9F9F] bg-white px-10  py-2 text-left w-max'><span className='text-left'>Default</span></p>
              </div>
</div>
  )
}

export default Filter