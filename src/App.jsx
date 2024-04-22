import ToDo from "./components/toDo/ToDo";
import Filter from "./components/Filter/Filter";

function App() {
  // app seria el layout general que podría incluir la navbar, footer, etc. y maneja las rutas publicas
  // falta agregarle el outlet cuando se hagan estos ajustes
  // se debe mover ToDo al layout privado cuando se haga el login
  return (
    <div>
      <Filter />
      <ToDo />
    </div>
  );
}

export default App;
