import { useContext } from "react";
import { InventarioContext } from "../context/InventarioContext";
import TablaInventario from "../components/TablaInventario";

function ListadoInventario() {
  const { productos } = useContext(InventarioContext);

  return (
    <main className="mx-auto my-8 w-full max-w-6xl rounded-2xl border border-gray-200 bg-white p-6 shadow-md sm:p-8">
      <h1 className="mb-3 text-3xl font-bold text-green-800">
        Listado de inventario
      </h1>

      <p className="mb-6 text-gray-600">
        Consulta todos los artículos registrados en nuestro supermercado.
      </p>

      <TablaInventario productos={productos} />
    </main>
  );
}

export default ListadoInventario;
