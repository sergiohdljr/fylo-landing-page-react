import './botao.css'

const Botao = ({ texto }) => {
  return (
   <div className="btn">
    <button className="botao-principal">{texto}</button>
   </div>
  );
};

export default Botao;
