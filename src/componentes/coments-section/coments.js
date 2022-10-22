import './style-coments.css';
import CardComents from '../card-coments/card-coments';

const users =[
    {
    coments:"Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
    name: "Satish Patel",
    job:"Founder & CEO, Huddle",
    picture: "./imagens/profile-1.jpg"},
    {
    coments:"Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
    name:"Bruce McKenzie", 
    job:"Founder & CEO, Huddle",
    picture: "./imagens/profile-2.jpg"  
    },
    {
    coments:"Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
    name: "Iva Boyd",
    job:"Founder & CEO, Huddle",
    picture: "./imagens/profile-3.jpg"
    }
]
  

const ComentsSections = () => {
    return (
      <section className="coments-section">
        {users.map((user, index) => {
          return <CardComents key={index} user={user} />;
        })}
      </section>
    );
};

export default ComentsSections;
