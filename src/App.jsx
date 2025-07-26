import { Routes, Route, Link } from "react-router";
import Pokedex from "./pages/Pokedex";
import Pokemon from "./pages/Pokemon";

function App() {
  return (
    <>
      <header className="main-header">
        <nav className="main-header-nav">
          <a href="/" className="home-link">
            <img src="/pokeball.svg" alt="Pokeball" className="home-icon" />
            <span>Home</span>
          </a>
        </nav>
        <h1 className="main-title">Pokedex</h1>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Pokedex />} />
          <Route path="/pokelist/:pokemonId" element={<Pokemon />} />
        </Routes>
      </main>
      <footer className="main-footer">
        <div className="footer-content">
          <span className="footer-title">© 2025 Pokédex - Henry Alvarez</span>
          <span className="footer-tagline">Desarrollo Portales Web 2</span>
        </div>
      </footer>
    </>
  );
}

export default App;
