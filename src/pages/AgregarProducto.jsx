import { useContext, useState } from "react";
import { InventarioContext } from "../context/InventarioContext";

function AgregarProducto() {
  const { agregarProducto } = useContext(InventarioContext);

  const [formulario, setFormulario] = useState({
    nombre: "",
    marca: "",
    tipo: "",
    precio: "",
    stock: "",
  });

  const [mensaje, setMensaje] = useState("");

  const manejarCambio = (evento) => {
    const { name, value } = evento.target;

    setFormulario((anterior) => ({
      ...anterior,
      [name]: value,
    }));
  };

  const manejarEnvio = (evento) => {
    evento.preventDefault();

    const nombre = formulario.nombre.trim();
    const marca = formulario.marca.trim();
    const tipo = formulario.tipo.trim();
    const precio = Number(formulario.precio);
    const stock = Number(formulario.stock);

    if (
      !nombre ||
      !marca ||
      !tipo ||
      formulario.precio === "" ||
      formulario.stock === "" ||
      !Number.isFinite(precio) ||
      precio < 0 ||
      !Number.isInteger(stock) ||
      stock < 0
    ) {
      setMensaje("Ingresa datos válidos en todos los campos.");
      return;
    }

    agregarProducto({
      nombre,
      marca,
      tipo,
      precio,
      stock,
    });

    setFormulario({
      nombre: "",
      marca: "",
      tipo: "",
      precio: "",
      stock: "",
    });

    setMensaje("Producto agregado correctamente.");
  };

  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-10">
      <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-lg sm:p-8">
        <h1 className="mb-2 text-3xl font-bold text-green-800">
          Agregar producto
        </h1>

        <p className="mb-8 text-gray-600">
          Registra nuevos artículos en el inventario del supermercado.
        </p>

        <form
          onSubmit={manejarEnvio}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2"
        >
          {[
            { nombre: "nombre", etiqueta: "Nombre del producto", tipo: "text" },
            { nombre: "marca", etiqueta: "Marca", tipo: "text" },
            { nombre: "tipo", etiqueta: "Tipo de producto", tipo: "text" },
            { nombre: "precio", etiqueta: "Precio ($)", tipo: "number" },
            { nombre: "stock", etiqueta: "Stock", tipo: "number" },
          ].map((campo) => (
            <div key={campo.nombre}>
              <label
                htmlFor={campo.nombre}
                className="mb-2 block font-medium text-gray-700"
              >
                {campo.etiqueta}
              </label>
              <input
                id={campo.nombre}
                name={campo.nombre}
                type={campo.tipo}
                value={formulario[campo.nombre]}
                onChange={manejarCambio}
                min={campo.tipo === "number" ? "0" : undefined}
                step={campo.nombre === "stock" ? "1" : "any"}
                required
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-200"
              />
            </div>
          ))}

          <button
            type="submit"
            className="rounded-lg bg-green-700 px-6 py-3 font-semibold text-white transition hover:bg-green-800 sm:col-span-2"
          >
            Guardar producto
          </button>
        </form>

        {mensaje && (
          <p
            role="status"
            className="mt-5 rounded-lg bg-green-50 p-4 text-green-800"
          >
            {mensaje}
          </p>
        )}
      </section>
    </main>
  );
}

export default AgregarProducto;
