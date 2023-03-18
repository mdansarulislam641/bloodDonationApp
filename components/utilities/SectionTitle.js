import React from 'react';
import sectionImgae from '../../assets/images/sectionBefore.png';
const SectionTitle = ({children}) => {
    return (
        <div>
           <h3 className='title-section-header text-2xl md:text-4xl lg:text-5xl'>{children}</h3>

        </div>
    );
};

export default SectionTitle;