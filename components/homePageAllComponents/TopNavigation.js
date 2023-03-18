import {BsFacebook, BsGoogle, BsInstagram, BsLinkedin, BsYoutube} from 'react-icons/bs';
import {RiContactsBookFill} from 'react-icons/ri'
const TopNavigation = () => {
    return (
       <nav className='bg-[#EF3D32] py-2'>
         <div className='flex justify-between items-center max-w-screen-xl mx-auto'>
            {/* contact cell phone */}
            <div className='flex items-center gap-2 text-white'>
            <RiContactsBookFill size={20}/><p>Contact Nekmord , Ranisongkail <span>Call Us : +8801786-891119</span> </p>
            </div>
            {/* contact with logo  */}
            <div className='flex gap-4'>
            <BsFacebook  className='cursor-pointer text-white'  size={20} />
            <BsLinkedin className='cursor-pointer text-white'  size={20}/>
            <BsGoogle  className='cursor-pointer text-white' size={20}  />
            <BsYoutube  className='cursor-pointer text-white' size={20}/>
            <BsInstagram className='cursor-pointer text-white'  size={20}/>
            </div>
        </div>
       </nav>
    );
    }
export default TopNavigation;