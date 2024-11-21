import { useState } from "react";
import FromProduct from "../../FromProducts/FromProduct";
import Header from "../Header";

interface ItemProduct {
  precio: number;
  imagen: string;
  nombre: string;
}
const AppProduct = () => {
  const [products, setProducts] = useState<ItemProduct[]>([]);
  const handleAddProduct = (newItem: ItemProduct) => {
    setProducts((prev) => [...products, newItem]);
  };

  return (
    <div>
      <Header />
      <FromProduct handleAddProduct={handleAddProduct} />
    </div>
  );
};

export default AppProduct;
