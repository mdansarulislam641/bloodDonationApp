import Link from "next/link";

const Navbar = () => {
    return (
        <div className="container flex justify-between items-center py-5">
           {/* logo name  */}
           <p className="uppercase font-bold text-4xl"><Link href='/'><span className="text-[#EF3D32] ">blood</span> buddies</Link></p>

           {/* navbar menu items  */}
           <ul className="flex gap-5">
                <li className="uppercase text-[18px] font-semibold"><Link href='/'>Home</Link></li>
                <li className="uppercase text-[18px] font-semibold"><Link href='/'>About Us</Link></li>
                <li className="uppercase text-[18px] font-semibold"><Link href='/'>Campaign</Link></li>
                <li className="uppercase text-[18px] font-semibold"><Link href='/'>Blog</Link></li>
                <li className="uppercase text-[18px] font-semibold"><Link href='/'>contact</Link></li>
           </ul>
        </div>
    );
};

export default Navbar;