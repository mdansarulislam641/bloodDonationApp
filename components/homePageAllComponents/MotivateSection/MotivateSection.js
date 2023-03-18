import SectionTitle from "@/components/utilities/SectionTitle";
import MotivateCard from "./MotivateCard";

const MotivateSection = () => {
    const motivateData = [
        {   id: 1 ,
            image : 'https://i.ibb.co/pfP9QpN/section-Before.png',
            title : 'Become a Donor',
            description : "Make yourself a blood donor because your few drops of blood can save someone else's life. That's why let's try to keep the dangerous life of others risk-free by donating blood"
        },
        {
            id:2 ,
            image : 'https://i.ibb.co/pfP9QpN/section-Before.png',
            title : "Why Give Blood?",
            description : "If a dying traveler lives by receiving your blood, then how lucky you are that a servant of God can live with your blood. Donate your blood for this, let's come forward to save serious patient life"
        },
        {
            id:3 ,
            image : "https://i.ibb.co/pfP9QpN/section-Before.png",
            title : "How Donations Helps",
            description : "We strive to reach the poor patient with your donated blood so that your sacrifice is successful and the patient also gets his desired blood, we are dedicated to reach your donation."
        }

    ]

    return (
        <div className="my-32">
            <SectionTitle>HELP THE PEOPLE IN NEED</SectionTitle>
            <div className="container  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                   motivateData.map(data => <MotivateCard data={data} key={data.id} />) 
                }
            </div>
        </div>
    );
};

export default MotivateSection;