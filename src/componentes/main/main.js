import BenefitsSection from "../benefits-section/benefits-section";
import IntroSection from "../intro-section/intro-section";
import StayProductive from "../stay-productive/stayProduct";
import "./main.css";



const Main = () =>{
    return (
      <main className="main">
        <IntroSection />
        <BenefitsSection />
        <StayProductive/>
      </main>
    );
}

export default Main ;
