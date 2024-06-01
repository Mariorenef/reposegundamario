import { ItemCount } from "./ItemCount";

export const ItemDetail = ({
  id,
  name,
  img,
  category,
  description,
  price,
  stock,
}) => {
  return (
    <article className="CardItem">
      <header className="Header">
        <h2 className="ItemHeader">{name}</h2>
      </header>
      <picture>
        <img src={img} alt={name} className="ItemImg" />
      </picture>
      <section>
        <p className="Info">Cateogría: {category}</p>
        <p className="Info">Descripción del producto: {description}</p>
        <p className="Info">Precio del producto: ${price}</p>
      </section>
      <footer className="ItemFooter">
        <ItemCount
          initial={1}
          stock={stock}
          onAdd={(quantity) => console.log("Has agregado", quantity)}
        />
      </footer>
    </article>
  );
};