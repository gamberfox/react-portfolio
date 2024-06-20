import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Banner from "./components/Banner";
import Menu from "./components/Menu";
import "bootstrap/dist/css/bootstrap.min.css";
import { CardBody } from "react-bootstrap";

function App() {
  const [count, setCount] = useState(0);
  const jon = () => <h1>test</h1>;
  const jon2 = () => <h1>test2</h1>;
  return (
    <>
      <Router>
        <div className="card" style={{ maxWidth: "400px", padding: "1px" }}>
          <div className="d-grid d-flex max-width-sm">
            <div className="card-body">Puedes elegir otro idioma</div>
            <button className="btn btn-primary" type="button">
              Español
            </button>
            <button className="btn btn-primary" type="button">
              Ingles
            </button>
          </div>
        </div>

        <br></br>
        <button onClick={() => setCount(count + 1)}>test and {count}</button>
        <Banner />
        <Menu />
        <Routes>
          <Route path="/" element={jon2()} />
          <Route path="/about" element={jon()} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
