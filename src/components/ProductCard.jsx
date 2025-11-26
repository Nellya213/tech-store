import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext.jsx';

// Стили для компонента
const styles = {
  productCard: {
    backgroundColor: 'white',
    borderRadius: '8px',
    padding: '1rem',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    transition: 'transform 0.2s',
    cursor: 'pointer'
  },
  productLink: {
    textDecoration: 'none',
    color: 'inherit'
  },
  productImage: {
    position: 'relative',
    marginBottom: '1rem'
  },
  productImg: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '4px'
  },
  outOfStockLabel: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    backgroundColor: '#e74c3c',
    color: 'white',
    padding: '0.25rem 0.5rem',
    borderRadius: '4px',
    fontSize: '0.8rem'
  },
  productInfo: {
    marginBottom: '1rem'
  },
  productName: {
    fontSize: '1.2rem',
    marginBottom: '0.5rem',
    color: '#2c3e50'
  },
  productDescription: {
    fontSize: '0.9rem',
    color: '#7f8c8d',
    marginBottom: '0.5rem'
  },
  productPrice: {
    fontSize: '1.3rem',
    fontWeight: 'bold',
    color: '#27ae60',
    marginBottom: '1rem'
  },
  addToCartBtn: {
    width: '100%',
    padding: '0.75rem',
    backgroundColor: '#27ae60',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '1rem',
    transition: 'background-color 0.2s'
  },
  disabledBtn: {
    backgroundColor: '#bdc3c7',
    cursor: 'not-allowed'
  }
};

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <div style={styles.productCard}>
      <Link to={`/product/${product.id}`} style={styles.productLink}>
        <div style={styles.productImage}>
          <img src={product.image} alt={product.name} style={styles.productImg} />
          {!product.inStock && (
            <div style={styles.outOfStockLabel}>Нет в наличии</div>
          )}
        </div>
        
        <div style={styles.productInfo}>
          <h3 style={styles.productName}>{product.name}</h3>
          <p style={styles.productDescription}>{product.description}</p>
          <div style={styles.productPrice}>${product.price}</div>
        </div>
      </Link>
      
      <button
        style={{
          ...styles.addToCartBtn,
          ...(!product.inStock ? styles.disabledBtn : {})
        }}
        onClick={handleAddToCart}
        disabled={!product.inStock}
      >
        {product.inStock ? 'В корзину' : 'Нет в наличии'}
      </button>
    </div>
  );
};

export default ProductCard;