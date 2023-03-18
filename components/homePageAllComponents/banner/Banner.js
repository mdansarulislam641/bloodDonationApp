
const Banner = () => {
    return (
        <div className='w-full h-[85vh]' style={{background:"url('https://i.ibb.co/syZ1QQs/home-1-slider-2.jpg')" , backgroundRepeat:'no-repeat',backgroundPosition:'center', backgroundSize:'cover'}}>
          <div className="flex justify-center  flex-col h-[80vh] w-1/2 mx-auto text-center">
            <h2 className="text-2xl md:text-3xl  lg:text-5xl py-2 font-bold text-white">DONATE BLOOD AND GET REAL BLESSINGS.</h2>
            <p className="text-xl  md:text-3xl my-5 text-white">রক্ত দিন জীবন বাচান , আপনার কয়েক ফোটা রক্ত অন্যের জীবন বাচিয়ে দিতে পারে</p>
            <button className="px-5 w-1/3 mx-auto text-white text-2xl font-semibold rounded-md py-3 commonBg">Registration</button>
          </div>
        </div>
    );
};

export default Banner;