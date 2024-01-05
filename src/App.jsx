import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop.jsx";
import ControladorDeRotas from "./routes/Routes";

import "./styles/normalize.css";
import "./styles/fontawesome.min.css";
import "./styles/main.css";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <ControladorDeRotas />
    </BrowserRouter>
  );
}

export default App;
