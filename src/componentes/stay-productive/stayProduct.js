import "./stay-productive.css";

const StayProductive = () => {
    return (
      <section className="stay-productive">
        <figure className="stay-productive-illustration">
          <img
            src="./imagens/illustration-stay-productive.png"
            alt=""
            srcset=""
            className="illustration"
          />
        </figure>
        <article className="stay-productive-texts">
          <h1 className="text-title">Stay productive, wherever you are</h1>
          <span className="text-span">
            Never let location be an issue when accessing your files. Fylo has
            you covered for all of your file storage needs.
          </span>
          <span className="text-span">
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required.
          </span>
          <nav className="how-works-link">
            <a href="#">See how Fylo works</a>
          </nav>
        </article>
      </section>
    );
}

export default StayProductive;