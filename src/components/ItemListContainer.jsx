import { useEffect, useState } from "react";
import { getProducts } from "../asyncMock";
import { ItemList } from "./ItemList";

export const ItemlistContainer = ({ aviso }) => {
  const [productos, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then((Response) => {
        setProducts(Response);
      })
      .catch((Error) => {
        console.error(Error);
      });
  }, []);

  return (
    <div>
      <h3>{aviso}</h3>
      <ItemList productos={productos} />
    </div>
  );
};