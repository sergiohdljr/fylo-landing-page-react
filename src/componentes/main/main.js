import BenefitsSection from "../benefits-section/benefits-section";
import IntroSection from "../intro-section/intro-section";
import "./main.css";



const Main = () =>{
    return (
      <main className="main">
        <IntroSection />
        <BenefitsSection />
      </main>
    );
}

export default Main ;
