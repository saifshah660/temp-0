export default function Footer() {
    return (
      <footer className="bg-white ">
        
        <div className="border-t border-l-custom-whitishgrey flex justify-between items-center  px-7   "></div>
      
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 ">
     
          <div className="pt-12">
            
              
             <p className="text-gray-400 text-sm pt-6">400 University Drive Suite 200 Coral <br /> Gables,<br />
             FL 33134 USA</p>
            
          </div>
  
          
        
          <div className="pt-12">
            <ul >
              <li className="text-gray-400 font-semibold">Links</li>
              <li className="font-semibold text-sm  text-black pt-6 cursor-pointer">Home</li>
              <li className="font-semibold text-sm  text-black pt-6 cursor-pointer">Shop</li>
              <li className="font-semibold text-sm  text-black pt-6 cursor-pointer">About</li>
              <li className="font-semibold text-sm  text-black pt-6 cursor-pointer" >Contact</li>
            </ul>
          </div>
  
      
          <div className="pt-12">
            <ul >
              <li className="text-gray-400 font-semibold"> HELP</li>
              <li className="font-semibold text-sm text-black pt-6 cursor-pointer">Payment Options</li>
              <li className="font-semibold text-sm text-black pt-6 cursor-pointer">Returns</li>
              <li className="font-semibold text-sm text-black pt-6 cursor-pointer">Privacy Policies</li>
            </ul>
          </div>
  
          <div className="pt-12">
            <ul >
              <li className="text-gray-400 font-semibold"> Newsletter</li>
              <input 
              type="Email"
              placeholder="Enter Your Email Address"
              className="underline decoration-black text-black"/>
              <button className="px-4 underline decoration-black text-black font-bold">Subscribe</button>
            </ul>
          </div>
  
  
       
        </div>
  
        <div className="border-t w-[1400px] ml-10 border-l-custom-whitishgrey flex justify-between items-center py-9 px-7  mt-16 ">
    <div className="flex">
      <p className="text-sm text-black font-bold">
      2022 Meubel House. All rights reverved
      </p>
    </div>
  </div>
  
      </footer>
    );
  }