import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext.jsx';

// Импортируем компоненты
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Cart from './components/Cart.jsx';

// Импортируем страницы
import Home from './pages/Home.jsx';
import Catalog from './pages/Catalog.jsx';
import Product from './pages/Product.jsx';
import About from './pages/About.jsx';

// Стили для основного приложения
const styles = {
  app: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#f8f9fa'
  },
  mainContent: {
    flex: 1,
    padding: '20px',
    maxWidth: '1200px',
    margin: '0 auto',
    width: '100%'
  }
};

function App() {
  return (
    <CartProvider>
      <Router>
        <div style={styles.app}>
          <Header />
          <main style={styles.mainContent}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/catalog" element={<Catalog />} />
              <Route path="/catalog/:category" element={<Catalog />} />
              <Route path="/product/:id" element={<Product />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;