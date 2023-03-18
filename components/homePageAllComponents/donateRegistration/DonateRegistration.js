import SectionTitle from '@/components/utilities/SectionTitle';
import {FiPhoneCall} from 'react-icons/fi';
import {GrLocation} from 'react-icons/gr';
import {HiOutlineUserCircle} from 'react-icons/hi';
const DonateRegistration = () => {
    return (
        <section className='my-32'>
            <div className='mb-24'>
                <SectionTitle>Donate For Registration</SectionTitle>
            </div>
            <div className="container flex justify-between gap-10">
                {/* form  */}
                <div className='flex-1'>
                    <form>
                     <div className="flex gap-5">
                     <input className="border border-red-600 w-full py-2 px-5 placeholder:font-semibold placeholder:text-red-500 rounded-lg" type="text"  placeholder="Your Name" required/>
                        <input className="border border-red-600 w-full py-2 px-5 placeholder:font-semibold placeholder:text-red-500 rounded-lg" type="number"  placeholder="Your Phone" maxLength={11} required/>
                     </div>
                        <input className="border border-red-600 w-full py-2 px-5 placeholder:font-semibold placeholder:text-red-500 rounded-lg my-5" type="text"  placeholder="Your Email" required/>
                        <select className="border border-red-600 w-full py-2 px-5 placeholder:font-semibold placeholder:text-red-500 rounded-lg" name="group" id="" required>
                            <option hidden>Select Your Blood</option>
                            <option value="A+">A+</option>
                            <option value="A-">A-</option>
                            <option value="B+">B+</option>
                            <option value="B-">B-</option>
                            <option value="AB+">AB+</option>
                            <option value="AB-">AB-</option>
                            <option value="O+">O+</option>
                            <option value="O-">O-</option>
                        </select>
                        <textarea className="border h-16 my-5 border-red-600 w-full py-2 px-5 placeholder:font-semibold placeholder:text-red-500 rounded-lg"  name="message" id="" cols="30" rows="10" placeholder='Message'></textarea>
                        <button className="px-3 w-1/3 mx-auto text-white text-2xl font-semibold rounded-md py-2 commonBg">Donate</button>
                    </form>
                </div>
                {/* details */}
                <div className='flex-1'>
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold">Your Donation Can Make Someone’s Life Better</h2>
                    <p className='text-xl my-3'>আপনার মূল্যবান রক্ত দিয়ে অন্যের জীবন বাচাতে এগিয়ে আসুন, আসুন আমরা শপথ করি অন্যের বিনিময়ে নিজের রক্ত দান করি</p>
                    <p>We Are all time free to helps people</p>
                <div>
            
                        <p className='text-xl font-bold flex gap-3 items-center'> <HiOutlineUserCircle color={'#EF3D32'} size={20}/>Md Ansarul Haque</p>
                        <p className="flex gap-3 items-center"> <GrLocation color={'#EF3D32'} size={20}/> Nekmord , Thakurgaon</p>
                        <p className="flex gap-3 items-center"><FiPhoneCall  color={'#EF3D32'} size={20}/>+8801786891119</p>
                
                </div>
                </div>
            </div>
        </section>
    );
};

export default DonateRegistration;