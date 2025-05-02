// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import HomePage from './pages/HomePage';
// import PokemonDetailPage from './pages/PokemonDetailPage';
// import FavoritesPage from './pages/FavoritesPage';
// import ErrorBoundary from './components/ErrorBoundary';
// import './styles/App.css';

// function App() {
//   return (
//     <div className="App">
//       <Router>
//         <header>Pokémon Explorer</header>
//         <main>
//           <ErrorBoundary>
//             <Routes>
//               <Route path="/" element={<HomePage />} />
//               <Route path="/pokemon/:id" element={<PokemonDetailPage />} />
//               <Route path="/favorites" element={<FavoritesPage />} />
//             </Routes>
//           </ErrorBoundary>
//         </main>
//       </Router>
//     </div>
//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FavoritesProvider } from './contexts/FavoritesContext'; // Import FavoritesProvider
import HomePage from './pages/HomePage';
import PokemonDetailPage from './pages/PokemonDetailPage';
import FavoritesPage from './pages/FavoritesPage';
import ErrorBoundary from './components/ErrorBoundary';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <FavoritesProvider> {/* Wrap everything inside FavoritesProvider */}
        <Router>
          <header>Pokémon Explorer</header>
          <main>
            <ErrorBoundary>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/pokemon/:id" element={<PokemonDetailPage />} />
                <Route path="/favorites" element={<FavoritesPage />} />
              </Routes>
            </ErrorBoundary>
          </main>
        </Router>
      </FavoritesProvider>
    </div>
  );
}

export default App;
