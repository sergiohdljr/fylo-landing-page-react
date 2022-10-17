import Botao from "../botao-principal/botao";
import "./intro-section.css";

const IntroSection = () => {
  return (
    <section className="intro-section">
      <figure className="img-intro">
        <img src="./imagens/illustration-intro.png" alt="" />
      </figure>
      <article>
        <h1 className="titulo-intro">All your files in one secure location, acessible anywhere.</h1>
        <span className="span-intro">
          Fylo stores all your most important files in one secure location.
          Access them wherever you need, share and collaborate with friends
          family, and co-workers.
        </span>
      </article>
      <Botao texto={'Get Started'}/>
    </section>
  );
};

export default IntroSection;
