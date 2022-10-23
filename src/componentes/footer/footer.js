import "./footer-style.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <figure className="footer-logo">
          <img src="./imagens/logo.svg" alt="" className="logo-footer" />
        </figure>
        <article className="info-footer">
          <section className="info-local">
            <figure className="local-logo">
              <img src="./imagens/icon-location.svg" alt="" srcset="" />
            </figure>
            <article>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </span>
            </article>
          </section>
          <section className="contact-info">
            <div className="contact">
              <figure>
                <img src="./imagens/icon-phone.svg" alt="" />
              </figure>
              <span>+1-543-123-4567</span>
            </div>
            <div className="contact">
              <figure>
                <img src="./imagens/icon-email.svg" alt="" />
              </figure>
              <span>example@fylo.com</span>
            </div>
          </section>
          <ul className="nav-info">
            <li>About Us</li>
            <li>Jobs</li>
            <li>Press</li>
            <li>Blog</li>
            <li>Contact Us</li>
            <li>Terms</li>
            <li>Privacy</li>
          </ul>
          <div className="socials">
            <ion-icon name="logo-facebook" size="large"></ion-icon>
            <ion-icon name="logo-twitter" size="large"></ion-icon>
            <ion-icon name="logo-instagram" size="large"></ion-icon>
          </div>
        </article>
      </div>
    </footer>
  );
};

export default Footer;
