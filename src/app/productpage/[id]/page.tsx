
'use client'

import Navbar from '@/app/shop/navbar';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import React from 'react';
import { AiOutlineRight } from 'react-icons/ai';
import { FaFacebook, FaStar, FaTwitter } from 'react-icons/fa';
import { FaLinkedin} from 'react-icons/fa6';
import Description from './description';
import RelatedProducts from './relatedprotuct.tsx';

const data = [
 

   {
      id: 1,
      title: 'Trenton modular sofa_3',
      price: '25,000.00',
      image: '/images/58e39805d460c4c63cccc8a518ca116f (1).png',
          description: 'Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.',

    },
    {
      id: 2,
      title: 'Granite dining table with dining chair',
      price: '25,000.00',
      image: '/images/8158c0cda86398a2874f37f49b06d90d.png',
          description: 'Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.',

    },
    {
      id: 3,
      title: 'Outdoor bar table and stool',
      price: '25,000.00',
      image: '/images/tlc.png',
          description: 'Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.',

    },
    {
      id: 4,
      title: 'Plain console with teak mirror',
      price: '25,000.00',
      image: '/images/bd.png',
          description: 'Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.',

      },
    {
      id: 5,
      title: 'Grain coffee table',
      price: '15,000.00',
      image: '/images/9af2d8516ec53d1284c0628e97d2ea0a.png',
          description: 'Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.',

    },
    {
      id: 6,
      title: 'Kent coffee table',
      price: '225,000.00',
      image: '/images/c6aed28ef27fb848794b8cc2feeeae80.png',
          description: 'Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.',

    },
    {
      id: 7,
      title: 'Round coffee table_color 2',
      price: '251,000.00',
      image: '/images/06eb54ab47d16829800ed53309100396.png',
          description: 'Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.',

    },
    {
      id: 8,
      title: 'Reclaimed teak coffee table',
      price: '25,200.00',
      image: '/images/d3280b573b80f52420eef84a445eecb4.png',
          description: 'Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.',

      },
    {
      id: 9,
      title: 'Plain console_',
      price: '258,200.00',
      image: '/images/e6cd03a29914aa82658e06f8ef5b5121.png',
          description: 'Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.',

    },
    {
      id: 10,
      title: 'Reclaimed teak Sideboard',
      price: ' 20,000.00',
      image: '/images/d3280b573b80f52420eef84a445eecb4.png',
          description: 'Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.',

    },
    {
      id: 11,
      title: 'SJP_0825 ',
      price: '200,000.00',
      image: '/images/5e14687d3d37cf25ae70c8fb18ee72ba.png',
          description: 'Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.',

    },
    {
      id: 12,
      title: 'Bella chair and table',
      price: ' 100,000.00',
      image: '/images/8ebb456066c061959f9330832c36374f.png',
          description: 'Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.',

      },
     {
      id: 13,
      title: 'Granite square side table',
      price: '258,200.00',
      image: '/images/tbl.png',
          description: 'Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.',

    },
    {
      id: 14,
      title: 'Asgaard sofa',
      price: ' 250,000.00',
      image: '/images/mail.png',
          description: 'Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.',

    },
    {
      id: 15,
      title: 'Maya sofa three seater',
      price: ' 115,000.00',
      image: '/images/781d825e0f7bbebf3a0621f69b0a4c19.png',
          description: 'Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.',

    },
    {
      id: 16,
      title: 'Outdoor sofa set',
      price: ' 244,000.00',
      image: '/images/c9e9224b3002d53824688ecee9c882c5.png',
          description: 'Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.',

    },
  
];

const ProductDetails = () => {
  const params = useParams(); 
  const productId = Number(params.id);
  const product = data.find((item) => item.id === productId);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="font-sans bg-white">
      <Navbar />
      {/* Breadcrumb */}
      <div className="md:h-20 md:px-20 flex items-center px-8 gap-2 md:gap-6 ">
        <p className="text-[11px] md:text-[16px] text-black">Home</p>
        <AiOutlineRight className="text-xs" />
        <p className="text-[11px] md:text-[16px] text-black">Shop</p>
        <AiOutlineRight className="text-xs" />
         <Image
                  src={'/images/Line 5.webp'}
                      alt=''
                      height={1.5}
                      width={1.5}
                      
                  />
        <p className="text-[12px] md:text-[16px] font-medium text-black">{product.title}</p>
      </div>

      {/* Product Section */}
      <div className="flex md:flex-row flex-col md:px-20 px-8 mt-6 text-black">
        {/* Thumbnail Images */}
        <div className="hidden md:flex flex-col gap-4  items-center">
          <Image
            src="/images/c9e9224b3002d53824688ecee9c882c5.png"
            alt=""
            height={600}
            width={600}
            className="w-[100px] h-[90px] bg-[#FFF9E5] rounded-lg "
          />
          <Image
            src="/images/148fae44b3bf6e9ac8ce6743c19e7de6.png"
            alt=""
            height={600}
            width={600}
            className="w-[100px] h-[90px] bg-[#FFF9E5] rounded-lg "
          />
          <Image
            src="/images/24c656816d67a755100ac5f664833551.png"
            alt=""
            height={600}
            width={600}
            className="w-[100px] h-[90px] bg-[#FFF9E5] rounded-lg "
          />
          <Image
            src="/images/0c46ac4eb9c274966b1133cb71128f16.png"
            alt=""
            height={600}
            width={600}
            className="w-[100px] h-[90px] bg-[#FFF9E5] rounded-lg "
          />
        </div>

        {/* Main Product Image */}
        <div className="md:ml-10 bg-[#FFF9E5] md:w-[380px] w-[250px] md:h-[500px] flex justify-center items-center rounded-lg">
          <Image
            src={product.image}
            alt={product.title}
            height={500}
            width={500}
            className="object-cover  md:w-[500px] md:h-[500px] w-[230px] h-[230px]"
          />
        </div>

        {/* Product Details */}
        <div className="md:ml-24 md:w-[400px] w-[250px] mt-8 md:mt-0">
          <h1 className="text-[20px] md:text-[42px] font-semibold">{product.title}</h1>
          <h2 className="text-[16px] md:text-[24px] fot-medium text-[#9F9F9F] ">Rs. {product.price}</h2>
          <div className="flex items-center mt-3">
            <FaStar className="text-[#FFDA5B] mr-1 text-sm md:text-lg" />
            <FaStar className="text-[#FFDA5B] mr-1 text-sm md:text-lg" />
            <FaStar className="text-[#FFDA5B] mr-1 text-sm md:text-lg" />
            <FaStar className="text-[#FFDA5B] mr-1 text-sm md:text-lg" />
            <FaStar className="text-[#FFDA5B] mr-1 text-sm md:text-lg" />
             <Image
                  src={'/Line 5.png'}
                      alt=''
                      height={1}
              width={1}
              className='mx-4'
                      
                  />
            <p className="text-sm text-[#9F9F9F]">  5 Customer Reviews</p>
          </div>
          <p className="text-gray-700 text-[11px] md:text-sm  mt-2 md:mt-4">{product.description}</p>

          {/* Size Selection */}
          <div className="mt-4">
            <h3 className="text-[#9F9F9F] text-[12px] md:text-sm font-medium">Size</h3>
            <div className="flex gap-2 mt-3">
              <button className="w-8 h-8 bg-[#FBEBB5] rounded-[5px] text-sm font-medium text-black">L</button>
              <button className="w-8 h-8 bg-[#FAF4F4] hover:bg-[#FBEBB5] duration-100 rounded-[5px] text-sm font-medium text-black">XL</button>
              <button className="w-8 h-8 bg-[#FAF4F4] hover:bg-[#FBEBB5] duration-100 rounded-[5px] text-sm font-medium text-black">XS</button>
            </div>
          </div>

          {/* Color Selection */}
          <div className="mt-6">
            <h3 className="text-[#9F9F9F] text-[12px] md:text-sm font-medium">Color</h3>
            <div className="flex gap-3 mt-3">
              <button className="h-8 w-8 rounded-full bg-[#816DFA]"></button>
              <button className="h-8 w-8 rounded-full bg-black"></button>
              <button className="h-8 w-8 rounded-full bg-[#CDBA7B]"></button>
            </div>
          </div>

          {/* Add to Cart */}
          <div className="mt-8 flex gap-4 items-center">
            <button className="px-5 md:px-8 py-2 md:py-3 border text-sm md:text-[16px] border-[#9F9F9F] hover:bg-[#FBEBB5] duration-200 hover:border-[#FBEBB5] rounded-[10px] text-black bg-white"><span className='relative right-3 md:right-5'>-</span> 1 <span className='relative left-3 md:left-5'>+</span></button>
            <button className="border border-black text-black px-6 md:px-11 py-2 md:py-3 rounded-[12px] text-sm md:text-[16px] hover:bg-black duration-300 hover:text-white bg-white ">
              Add to Cart
            </button>
          </div>
          <div className='border-t-2 mt-10 w-full'>
            <div className='flex gap-4 mt-6'>
               <div>
              <ul className='text-[14px] md:text-[16px] text-[#9F9F9F] leading-[35px]'>
                <li>SKU</li>
              <li>Category</li>
              <li>Tags</li>
              <li>Share</li>
              </ul>
          </div>
           <div>
              <ul  className='text-[14px] md:text-[16px] text-[#9F9F9F] leading-[35px]'>
                <li>:  </li>
              <li> : </li>
              <li> : </li>
              <li> : </li>
              </ul>
          </div>
            <div>
              <ul  className='text-[14px] md:text-[16px] text-[#9F9F9F] leading-[35px]'>
                <li> SS001</li>
              <li> Sofas</li>
              <li> Sofa,Chair,Home,Shop</li>
                  <li className='flex gap-5 mt-2'>
                    <FaFacebook className='text-[18px] md:text-[22px] hover:text-[#2b3e8f] duration-200 text-black' />
                    <FaLinkedin className='hover:text-[#2b3e8f] duration-200 text-[18px] md:text-[22px] text-black' />
                    <FaTwitter className='hover:text-[#2b3e8f] duration-200 text-[18px] md:text-[22px] text-black' />
                  </li>
              </ul>
          </div>
           </div>
          </div>
        </div>
      </div>
      <Description />
      <RelatedProducts/>
    </div>
  );
};

export default ProductDetails;
