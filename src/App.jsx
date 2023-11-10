import { BrowserRouter } from "react-router-dom";
import ControladorDeRotas from "./routes/Routes";

import "./styles/normalize.css";
import "./styles/fontawesome.min.css";

function App() {
  return (
    <BrowserRouter>
      <ControladorDeRotas />
    </BrowserRouter>
  );
}

export default App;
