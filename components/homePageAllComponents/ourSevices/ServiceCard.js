import React from 'react';

const ServiceCard = ({service, stickyTopSpace}) => {
    const {id , title , heading} = service || {};
    console.log(stickyTopSpace)
    return (
        <div
      className={`sticky h-96 grid grid-cols-1 overflow-hidden rounded-xl bg-blue-100 card shadow-[0px_0px_30px_-10px_rgba(0,0,0,0.1)] md:grid-cols-2 border  border-gray-600`}
      style={{ top: stickyTopSpace }}
    >
      <div className="flex flex-col justify-center p-5">
        <div className="space-y-4">
          <h2 className="font-serif text-2xl -mb-2 font-bold">{title}</h2>
          <p className="lg:w-3/4 text-lg">{heading}</p>
        
        </div>
      </div>
    
    </div>
    );
};

export default ServiceCard;