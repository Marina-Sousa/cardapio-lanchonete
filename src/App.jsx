import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Cardapio from './pages/Cardapio';
import Contato from './pages/Contato';
import './App.css';

function App() {
    return (
        <BrowserRouter>
            <nav className="menu">
                <Link to="/">Cardápio</Link>
                <Link to="/contato">Contato</Link>
            </nav>

            <Routes>
                <Route path="/" element={<Cardapio />} />
                <Route path="/contato" element={<Contato />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
