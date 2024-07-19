import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '/src/components/Header';
import Footer from '/src/components/Footer';
import Home from '/src/components/Home';
import About from '/src/components/About';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
