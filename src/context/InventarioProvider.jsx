import { useState } from "react";
import { InventarioContext } from "./InventarioContext";
import { productosIniciales } from "../data/productosIniciales";

function InventarioProvider({ children }) {
  const [productos, setProductos] = useState(productosIniciales);

  const agregarProducto = (nuevoProducto) => {
    setProductos((anteriores) => [
      ...anteriores,
      {
        ...nuevoProducto,
        id: crypto.randomUUID(),
      },
    ]);
  };

  return (
    <InventarioContext.Provider value={{ productos, agregarProducto }}>
      {children}
    </InventarioContext.Provider>
  );
}

export default InventarioProvider;
