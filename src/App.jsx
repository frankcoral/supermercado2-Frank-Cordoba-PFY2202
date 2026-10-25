import { HashRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import QuienesSomos from "./pages/QuienesSomos";
import Contactanos from "./pages/Contactanos";
import AgregarProducto from "./pages/AgregarProducto";
import ListadoInventario from "./pages/ListadoInventario";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/quienes-somos" element={<QuienesSomos />} />
          <Route path="/contactanos" element={<Contactanos />} />
          <Route path="/agregar-producto" element={<AgregarProducto />} />
          <Route path="/listado-inventario" element={<ListadoInventario />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
