import './benefits-section.css'
import CardBenefit, { benefitsData } from '../cards/card-benefit';

const BenefitsSection = () => {
    return(
    <section className='section-Container'>
        {benefitsData.map((data, index) => {
            return (
              <CardBenefit
                key={index}
                pic={data.pic}
                benefit={data.benefit}
                description={data.description}
              />
            );
          })}
    </section>
    )
}


export default BenefitsSection