import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <header className="container">
        <figure className="logo">
        <img src="./imagens/logo.svg" alt="" srcSet=""/>
      </figure>
      <nav className="nav-links">
        <a href="#" className="link">Features</a>
        <a href="#" className="link">Team</a>
        <a href="#"className="link">Sign Up</a>
      </nav>
      </header>
    </header>
  );
};

export default Header;
