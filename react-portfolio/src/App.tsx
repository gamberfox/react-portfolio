import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Banner from "./components/Banner";
import Menu from "./components/Menu";

function App() {
  const [count, setCount] = useState(0);
  const jon = () => <h1>test</h1>;
  const jon2 = () => <h1>test2</h1>;
  return (
    <>
      <Router>
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
