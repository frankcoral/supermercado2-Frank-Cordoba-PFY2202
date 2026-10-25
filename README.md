# Supermercado — Sistema de Gestión de Inventario

**Duoc UC | Desarrollo Frontend II (PFY2202) | Semana 2**  
**Actividad formativa:** Implementando gestión de estado en componentes frontend con React  
**Caso asignado:** Supermercado — Forma B

## Descripción

Aplicación web de inventario desarrollada con **React 19, Vite 8, React Router DOM 7 y Tailwind CSS 4**. Esta segunda etapa continúa el supermercado de la Semana 1 e incorpora **gestión de estado global con Context API y `useState`**, un formulario para registrar artículos y una página que muestra todos los productos existentes.

El inventario se comparte entre las páginas: al registrar un artículo, aparece inmediatamente en **Inicio** y **Listado de inventario**, sin recargar el sitio. El proyecto es una aplicación académica de frontend y no requiere servidor ni base de datos.

## Funcionalidades

- **Inicio:** presenta el inventario y tres indicadores calculados automáticamente: productos registrados, unidades disponibles y productos sin stock. Incluye acceso directo al formulario.
- **Agregar producto:** registra artículos mediante un formulario controlado con los campos **nombre, marca, tipo, precio y stock**. Valida campos obligatorios, precio numérico no negativo y stock entero no negativo. Muestra un mensaje de confirmación y limpia el formulario al guardar.
- **Listado de inventario:** muestra todos los artículos del estado global en una tabla con **producto, marca, tipo, precio, stock y estado**.
- **Quiénes somos:** ofrece una descripción del supermercado.
- **Contáctanos:** muestra datos de contacto ficticios para la actividad.
- **Página 404:** informa cuando se ingresa una ruta no existente e incluye un enlace para volver al inicio.
- **Menú inferior compartido:** permite navegar entre las cinco páginas y destaca la sección activa.
- **Diseño adaptable:** formularios con una columna en móvil y dos en pantallas más anchas; tablas con desplazamiento horizontal independiente en pantallas pequeñas.

### Estados del inventario

Los estados se determinan según el **stock** del artículo:

| Stock | Estado |
| --- | --- |
| 0 | Sin stock |
| De 1 a 5 | Stock bajo |
| 6 o más | Disponible |

El estado aparece con un distintivo de color. Los precios se muestran con formato chileno mediante `toLocaleString('es-CL')`.

## Tecnologías utilizadas

| Tecnología | Uso |
| --- | --- |
| React 19 + JSX | Componentes e interfaz de usuario |
| `useState` y Context API | Estado global compartido del inventario |
| Props | Comunicación entre `ListadoInventario`, `TablaInventario` y `FilaProducto` |
| React Router DOM 7 (`HashRouter`) | Navegación entre páginas y ruta 404 |
| Tailwind CSS 4 | Estilos utilitarios y diseño responsive |
| Vite 8 | Entorno de desarrollo y compilación |
| ESLint | Verificación estática del código |
| Git y GitHub | Control de versiones y entrega |

## Estructura del proyecto

```text
supermercado/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── components/
│   │   ├── FilaProducto.jsx
│   │   ├── Layout.jsx
│   │   ├── MenuInferior.jsx
│   │   ├── MenuInferior.css
│   │   └── TablaInventario.jsx
│   ├── context/
│   │   ├── InventarioContext.js
│   │   └── InventarioProvider.jsx
│   ├── data/
│   │   └── productosIniciales.js
│   ├── pages/
│   │   ├── AgregarProducto.jsx
│   │   ├── Contactanos.jsx
│   │   ├── Home.jsx
│   │   ├── Home.css
│   │   ├── ListadoInventario.jsx
│   │   ├── NotFound.jsx
│   │   ├── Paginas.css
│   │   └── QuienesSomos.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

### Organización y flujo de datos

1. `productosIniciales.js` proporciona los cuatro artículos de ejemplo.
2. `InventarioProvider.jsx` guarda la lista en `useState` y expone `productos` y `agregarProducto` mediante `InventarioContext`.
3. `main.jsx` envuelve la aplicación con el proveedor global.
4. `AgregarProducto.jsx` valida la información y llama a `agregarProducto`.
5. `Home.jsx` y `ListadoInventario.jsx` leen la **misma** lista del contexto.
6. `TablaInventario.jsx` recibe los productos como prop y genera `FilaProducto.jsx` por cada artículo; este último calcula el estado de stock.
7. `App.jsx` configura las rutas; `Layout.jsx` utiliza `Outlet` para mostrar cada página y conservar `MenuInferior` como elemento compartido.

## Preparación del ambiente

Requisitos: **Node.js**, **npm**, **Git** y un editor como Visual Studio Code. El desarrollo se realizó en Windows y se trabajó con comandos `npm.cmd` para evitar el bloqueo de `npm.ps1` por la política de ejecución de PowerShell.

Clonar el repositorio de la **Semana 2**:

```powershell
git clone https://github.com/frankcoral/supermercado2-Frank-Cordoba-PFY2202.git
cd supermercado2-Frank-Cordoba-PFY2202
```

Instalar las dependencias desde la carpeta que contiene `package.json`:

```powershell
npm.cmd install
```

No hace falta instalar React Router ni Tailwind por separado: ambos figuran en `package.json`.

## Ejecución en desarrollo

```powershell
npm.cmd run dev
```

Abre la dirección que indique Vite. La aplicación tiene configurada la siguiente ruta base para su publicación:

```text
http://localhost:5173/supermercado2-Frank-Cordoba-PFY2202/#/
```

> El proyecto usa **`HashRouter`**, no `BrowserRouter`. Las rutas internas se escriben después de `#` para mantener la navegación compatible con GitHub Pages.

### Páginas disponibles

| Sección | Ruta interna |
| --- | --- |
| Inicio | `#/` |
| Quiénes somos | `#/quienes-somos` |
| Contáctanos | `#/contactanos` |
| Agregar producto | `#/agregar-producto` |
| Listado de inventario | `#/listado-inventario` |
| Página no encontrada | Cualquier otra ruta, por ejemplo `#/pagina-inexistente` |

## Cómo utilizar la aplicación

1. Entra a **Inicio** y revisa los productos y los indicadores.
2. Selecciona **Agregar producto** desde el menú inferior o desde el botón del inicio.
3. Completa **nombre, marca, tipo, precio y stock** y pulsa **Guardar producto**.
4. Comprueba el mensaje de confirmación.
5. Abre **Inventario** y observa que el nuevo producto aparece en la tabla.
6. Regresa a **Inicio** y comprueba que los indicadores y la tabla incorporen el artículo nuevo.
7. Prueba una ruta inexistente y usa **Volver al inicio**.

### Ejemplo de prueba funcional

Al abrir la aplicación, el inventario de ejemplo incluye **4 productos, 48 unidades en total y 1 artículo sin stock**. Para comprobar el estado global, agrega:

| Campo | Dato de prueba |
| --- | --- |
| Nombre | Café Nescafé 170 g |
| Marca | Nescafé |
| Tipo | Abarrotes |
| Precio | 4990 |
| Stock | 10 |

**Resultado esperado:** 5 productos, 58 unidades y 1 producto sin stock, con el café visible tanto en Inicio como en el listado.

## Validaciones técnicas

Comprobar ESLint:

```powershell
npm.cmd run lint
```

Generar la compilación de producción:

```powershell
npm.cmd run build
```

Previsualizar la compilación (opcional):

```powershell
npm.cmd run preview
```

**Últimas comprobaciones realizadas para Semana 2:**

- `npm.cmd run lint`: finalizó sin errores reportados.
- `npm.cmd run build`: compilación exitosa con **38 módulos transformados**.
- Formulario: alta de artículos y actualización del contexto comprobadas manualmente.
- Inicio: los indicadores se actualizaron a **5 productos, 58 unidades y 1 sin stock** en la prueba.
- Rutas existentes, menú inferior, página 404 y botón de regreso: comprobados.
- Vista móvil: formulario en una columna y tabla con desplazamiento horizontal independiente comprobados.
- `npm.cmd audit --omit=dev`: **0 vulnerabilidades** reportadas en la última comprobación; el análisis completo de npm informó **6 advertencias moderadas** asociadas a herramientas de desarrollo, pendientes de revisión controlada.

## Relación con la pauta evaluativa — Semana 2 (100 puntos)

| Criterio | Puntaje | Implementación que permite verificarlo |
| --- | ---: | --- |
| Navegación y gestión de estados en React | 40 | `HashRouter`, cinco rutas, `NavLink`, `Layout`/`Outlet`, `InventarioContext` y `InventarioProvider` con `useState` compartido |
| Uso de framework CSS | 20 | Tailwind CSS 4 configurado con el plugin de Vite y clases utilitarias presentes en formulario, listado, inicio, tabla y 404 |
| Cumplimiento de requerimientos del frontend | 40 | Dos páginas nuevas, formulario de alta, datos de nombre/marca/tipo, tabla global, navegación y diseño responsive |

## Evidencias recomendadas para la entrega

Si se añade una carpeta `capturas/`, se recomienda acompañar cada imagen con una breve explicación del criterio que demuestra:

- `01-Inicio-Indicadores.png`: inicio y resumen del inventario.
- `02-Formulario-Agregar-Producto.png`: campos de ingreso y diseño Tailwind.
- `03-Producto-Agregado.png`: confirmación y nuevo artículo visible.
- `04-Listado-Inventario.png`: tabla que usa el estado global.
- `05-Vista-Movil-Formulario.png`: formulario responsive.
- `06-Vista-Movil-Tabla.png`: desplazamiento horizontal de la tabla.
- `07-Pagina-404.png`: manejo de rutas inexistentes.
- `08-Lint-Build.png`: terminal con ambas validaciones.

> Estos nombres son **sugerencias**; las capturas no están incluidas automáticamente en este README. Solo se deben enlazar cuando los archivos existan en el repositorio.

## GitHub y publicación

- **Repositorio correspondiente a Semana 2:** [supermercado2-Frank-Cordoba-PFY2202](https://github.com/frankcoral/supermercado2-Frank-Cordoba-PFY2202)
- **GitHub Pages:** pendiente de publicar y verificar para la entrega de Semana 2.

`vite.config.js` utiliza como base `/supermercado2-Frank-Cordoba-PFY2202/`. La navegación usa `HashRouter` para que las páginas internas sigan funcionando después de publicar la aplicación.

## Alcance y limitaciones

- El inventario está guardado **en memoria** con `useState`. Los productos agregados se pierden si se recarga completamente el sitio o se cierra la sesión del navegador.
- No se implementan edición, eliminación de artículos, autenticación, base de datos o API porque **no forman parte de las funciones solicitadas en esta actividad**.
- Los datos iniciales y de contacto son ejemplos académicos; no representan un inventario real.
- Se utiliza `useState` con Context API para el estado compartido. `useReducer` forma parte de los temas estudiados en la guía, pero no está implementado en esta entrega.

---

**Proyecto académico — Duoc UC · Desarrollo Frontend II (PFY2202) · Semana 2**
