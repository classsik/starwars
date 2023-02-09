import { Route, Routes } from "react-router";
import Header from "./components/Header";
import FilmPage from "./pages/FilmPage";
import HomePage from "./pages/HomePage";
import PlanetsPage from "./pages/PlanetsPage";
import HeroesPage from "./pages/HeroesPage";
import StarshipsPage from "./pages/StarshipsPage";
import VehiclesPage from "./pages/VehiclesPage";
import HeroPage from "./pages/HeroPage";
import PlanetPage from "./pages/PlanetPage";
import StarshipPage from "./pages/StarshipPage";
import VehiclePage from "./pages/VehiclePage";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="App__inner">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/film/:id" element={<FilmPage />} />
          <Route path="/heroes" element={<HeroesPage />} />
          <Route path="/hero/:id" element={<HeroPage />} />
          <Route path="/planets" element={<PlanetsPage />} />
          <Route path="/planet/:id" element={<PlanetPage />} />
          <Route path="/starships" element={<StarshipsPage />} />
          <Route path="/starship/:id" element={<StarshipPage />} />
          <Route path="/vehicles" element={<VehiclesPage />} />
          <Route path="/vehicle" element={<VehiclePage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
