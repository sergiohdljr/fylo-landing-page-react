import "./card-coments.css";

const CardComents = ({ user,key }) => {
  return (
    <div className="card">
      <article className="card-coments">
        <p className="coments">{user.coments}</p>
      </article>
      <section className="users">
        <figure className="user-picture">
          <img src={user.picture} alt="" />
        </figure>
        <article className="user-info">
          <h4 className="user-name">{user.name}</h4>
          <p className="user-job">{user.job}</p>
        </article>
      </section>
    </div>
  );
};

export default CardComents;
