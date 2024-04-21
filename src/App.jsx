import {Route,Routes,BrowserRouter} from "react-router-dom"

import Home from "./Pages/Home";
import {Login} from "./Pages/Login";
import Register from "./Pages/Register";
import Error from "./Pages/Error";

import { TaskProvider } from "./context/TaskContext";

import "@fortawesome/fontawesome-free/css/all.css";

function App() {
  return (
    <>
    <TaskProvider>
    <BrowserRouter>
        <Routes>
          <Route exact path="/" element ={ <Home/>} />
          <Route exact path="/login" element ={ <Login/>} />
          <Route exact path="/register" element ={ <Register/>} />
          <Route path="*" element={<Error />} />
          
        </Routes>
      </BrowserRouter>
    </TaskProvider>
     
    </>
  );
}

export default App;
