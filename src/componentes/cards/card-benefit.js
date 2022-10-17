import "./card-benefit.css";

export const benefitsData = [
  {
    pic: "./imagens/icon-access-anywhere.svg",
    benefit: "Access your files, anywhere",
    description:
      "The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.",
  },
  {
    pic: "./imagens/icon-security.svg",
    benefit: "Security you can trust",
    description:
      "factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.",
  },
  {
    pic: "./imagens/icon-collaboration.svg",
    benefit: "Real-time collaboration",
    description:
      "Securely share files and folders with friends, family and colleagues for live collaboration.No email attachments required.",
  },
  {
    pic: "./imagens/icon-any-file.svg",
    benefit: "Store any type of file",
    description:
      "Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for allfile types.",
  },
];

const CardBenefit = ({pic,benefit,description}) => {
  return (
    <div className="card-benefit">
      <figure>
        <img className="card-icon" src={pic} alt="" srcSet="" />
      </figure>
      <h3 className="card-titulo">{benefit}</h3>
      <span className="card-span ">{description}</span>
    </div>
  );
};


export default CardBenefit;
