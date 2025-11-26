import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext.jsx';

// Стили для компонента
const styles = {
  header: {
    backgroundColor: '#2c3e50',
    color: 'white',
    padding: '1rem 0'
  },
  headerContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 20px'
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: 'white',
    textDecoration: 'none'
  },
  nav: {
    display: 'flex',
    gap: '2rem'
  },
  navLink: {
    color: 'white',
    textDecoration: 'none'
  },
  cartLink: {
    color: 'white',
    textDecoration: 'none',
    position: 'relative',
    padding: '0.5rem 1rem',
    backgroundColor: '#e74c3c',
    borderRadius: '4px'
  },
  cartCount: {
    position: 'absolute',
    top: '-8px',
    right: '-8px',
    backgroundColor: '#f39c12',
    color: 'white',
    borderRadius: '50%',
    width: '20px',
    height: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '0.8rem'
  }
};

const Header = () => {
  const { getCartItemsCount } = useCart();
  const cartItemsCount = getCartItemsCount();

  return (
    <header style={styles.header}>
      <div style={styles.headerContainer}>
        <Link to="/" style={styles.logo}>
          TechStore
        </Link>
        
        <nav style={styles.nav}>
          <Link to="/" style={styles.navLink}>Главная</Link>
          <Link to="/catalog" style={styles.navLink}>Каталог</Link>
          <Link to="/about" style={styles.navLink}>О нас</Link>
        </nav>

        <Link to="/cart" style={styles.cartLink}>
          Корзина
          {cartItemsCount > 0 && (
            <span style={styles.cartCount}>{cartItemsCount}</span>
          )}
        </Link>
      </div>
    </header>
  );
};

export default Header;