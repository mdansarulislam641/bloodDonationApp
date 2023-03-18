import React from 'react';
import ServiceCard from './ServiceCard';
import serviceData from './ServiceData';
const OurServicesSticky = () => {
    const stickyTopSpace = 50 ;
    return (
        <div className="py-10 ">
        <div className="space-y-20 w-[300px] lg:w-[900px] mx-auto ">
        {serviceData.map((service, index) => (
            <ServiceCard key={service.id} service={service} 
            stickyTopSpace={stickyTopSpace * (index + 1)}></ServiceCard>
        ))}
    </div>
    </div>
    );
};

export default OurServicesSticky;