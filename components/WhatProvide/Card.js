import React from 'react';

const Card = ({data, stickyTopSpace}) => {
    const {name , details} = data || {};
    return (
        <div
        className={`sticky h-96 my-32 grid grid-cols-1 overflow-hidden rounded-xl bg-blue-100 card shadow-[0px_0px_30px_-10px_rgba(0,0,0,0.1)] md:grid-cols-2 border  border-gray-600`}
        style={{ top: stickyTopSpace }}
      >
        <div className="flex flex-col justify-center p-5">
          <div className="space-y-4">
            <h2 className="font-serif text-2xl -mb-2 font-bold">{name}</h2>
            <p className="lg:w-3/4 text-lg">{details}</p>
          
          </div>
        </div>
        <div className="relative min-h-[200px] md:min-h-[400px]">
          <h2>this is card ioag</h2>
  
        </div>
      </div>
    );
};

export default Card;