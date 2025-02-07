import { Link } from "react-router-dom";

export const Item = ({ id, name, img, price, stock }) => {
  return (
    <article className="CardItem">
      <header className="Header">
        <h2 className="ItemHeader">{name}</h2>
      </header>
      <picture>
        <img src={img} alt={name} className="ItemImg" />
      </picture>
      <section>
        <p className="Info">Precio: ${price}</p>
        <p className="Info">Stock: {stock}</p>
      </section>
      <footer className="ItemFooter">
        <button className="Option">
          <Link to={`/item`}>Ver detalle</Link>
        </button>
      </footer>
    </article>
  );
};