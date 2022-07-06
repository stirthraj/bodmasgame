import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import BodmasGame from "./components/BodmasGame/index";
import Layout from "./components/Layout";
import Matrix from "./components/MatrixGame";
import NoMatch from "./components/NoMatch";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route exact index element={<BodmasGame />} />
          <Route exact path="matrix" element={<Matrix />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
