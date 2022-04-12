import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import BodmasGame from "./components/BodmasGame/index";
import Layout from "./components/Layout";
import Matrix from "./components/MatrixGame";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<BodmasGame />} />
          <Route path="matrix" element={<Matrix />} />
          {/* <Route path="*" element={<NoMatch />} /> */}
        </Route>
      </Routes>

      {/* <Routes>
        <Route exact path="/" element={<BodmasGame />}>
          <Route exact path="/matrix" element={<Matrix />} />
          <Route path="teams" element={<Teams />}>
          <Route path=":teamId" element={<Team />} />
          <Route path="new" element={<NewTeamForm />} />
          <Route index element={<LeagueStandings />} />
        </Route>
        </Route>
      </Routes> */}
    </BrowserRouter>
  );
}

export default App;
