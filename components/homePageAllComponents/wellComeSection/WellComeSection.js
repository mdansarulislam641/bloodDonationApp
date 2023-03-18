import SectionTitle from '@/components/utilities/SectionTitle';
import {BsCheck2Circle} from 'react-icons/bs';
const WellComeSection = () => {
    return (
        <section className='my-32'>
            <div className='mb-24'>
            <SectionTitle>About Us</SectionTitle>
            </div>
       <div className="container flex gap-10 justify-between">
       <div className="w-full">
            <img className='w-full h-96' src="https://i.ibb.co/7CV53rX/welcome-Image.jpg" alt="" />
        </div>
        <div className="w-full">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold">HELP THE PEOPLE IN NEED</h2>
            <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold my-3">Welcome To Blood Donors Organization</h3>
            <p className='text-[16px]'>We are committed to blood donation, we always try our best to donate blood and play an adequate role in blood donation. We believe that we are successful if one person receives blood for our welfare and gets well</p>
            <div className='grid grid-cols-2 gap-5 my-5'>
                <p className='flex items-center gap-3 text-xl font-semibold'><BsCheck2Circle size={24} color={'#EF3D32'}/>Good Service</p>
                <p className='flex items-center gap-3 text-xl font-semibold'><BsCheck2Circle size={24} color={'#EF3D32'}/>Blood Bank</p>
                <p className='flex items-center gap-3 text-xl font-semibold'><BsCheck2Circle size={24} color={'#EF3D32'}/>Help People</p>
                <p className='flex items-center gap-3 text-xl font-semibold'><BsCheck2Circle size={24} color={'#EF3D32'}/>Every Day Service</p>
            </div>
            <div>
            <button className="px-2 w-1/3 mx-auto text-white text-2xl font-semibold rounded-md py-2 mt-5 commonBg">About Us</button>
            </div>
        </div>
       </div>
        </section>
    );
};

export default WellComeSection;