import React from 'react';

const Footer = () => {
  const div1=['Anchor Developer','About Us','Our Services','Our Partner']
   const div2=['WorldWide Services ','Track Your Order','Secure Payments Gateway','Special Services in Europe']
    const renderList = (data) => (
    <ul className='p-4'>
      {data.map((item, index) => (
        // Key belongs here on the <li> because it is the direct child of map
        <li key={index} className='py-2 text-white'>
          <a href="#" className='p-2'>{item}</a>
        </li>
      ))}
    </ul>
  );
  return(
        <>
        <div>
        <h3 className='bg-black  py-5 items-center text-center text-white text-2xl justify-between '>Find Us</h3>
      <div className='bg-black px-5 py-5 flex justify-around grid grid-cols-1 gap-3 md:grid-cols-3'>
        <div className='border-2 rounded-xl'>{renderList(div1)}</div>
         <div className='border-2 rounded-xl '>{renderList(div2)}</div>
         <div className='border-2 rounded-xl '>{renderList(div1)}</div>
         </div>
      </div>
    </>
    );
};

export default Footer;