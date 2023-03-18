import Image from "next/image";


const MotivateCard = ({data}) => {
    const {id , image , title , description} = data || {} ;
    return (
        <div className=" motivate-card py-5 px-3 mt-24">
          <img className="h-48 w-full" src={image} alt="" />
          <h2 className="text-2xl text-center">{title}</h2>
          <p className="text-center">{description}</p>
        </div>
    );
};

export default MotivateCard;