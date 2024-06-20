import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Banner from "./components/Banner";

function App() {
  const [count, setCount] = useState(0);
  const jon = () => <h1>test</h1>;
  const jon2 = () => <h1>test2</h1>;
  return (
    <>
      <div>
        <img src="/vite.svg" alt="salero" />
      </div>

      <Banner />
      <Router>
        <Routes>
          <Route path="/" element={jon2()} />
          <Route path="/about" element={jon()} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
