import Navbar from "./components/Navbar";
import Footer from './components/footer';
import Catalog from './pages/catalog';
import About from './pages/about';
import Home from './pages/home';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Admin from './Admin';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <Navbar />

     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/catalog" element={<Catalog />} />
      <Route path="/about" element={<About />} />
      {/* <Route path="/admin" element={<Admin />} /> */}
     </Routes>

     <Footer />
    </div>
  </BrowserRouter>
  );
}

export default App;
