import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useProducts } from '../hooks/useProducts.jsx';
import { useCart } from '../context/CartContext.jsx';

// Стили для компонента
const styles = {
  productPage: {
    padding: '2rem 0',
    minHeight: '60vh'
  },
  productDetail: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '3rem',
    maxWidth: '1000px',
    margin: '0 auto',
    alignItems: 'start'
  },
  productImageLarge: {
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 8px 25px rgba(0,0,0,0.1)'
  },
  productImgLarge: {
    width: '100%',
    height: 'auto',
    display: 'block'
  },
  productDetails: {
    padding: '1rem'
  },
  productTitle: {
    fontSize: '2.5rem',
    marginBottom: '1rem',
    color: '#2c3e50'
  },
  productCategory: {
    display: 'inline-block',
    padding: '0.3rem 1rem',
    backgroundColor: '#3498db',
    color: 'white',
    borderRadius: '15px',
    fontSize: '0.9rem',
    marginBottom: '1rem'
  },
  productDescription: {
    fontSize: '1.1rem',
    lineHeight: '1.6',
    color: '#7f8c8d',
    marginBottom: '2rem'
  },
  productPriceLarge: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#27ae60',
    marginBottom: '2rem'
  },
  featuresList: {
    marginBottom: '2rem'
  },
  featuresTitle: {
    fontSize: '1.2rem',
    marginBottom: '1rem',
    color: '#2c3e50'
  },
  featureItem: {
    padding: '0.5rem 0',
    borderBottom: '1px solid #ecf0f1'
  },
  addToCartBtnLarge: {
    padding: '1rem 3rem',
    backgroundColor: '#27ae60',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    transition: 'transform 0.2s',
    marginRight: '1rem'
  },
  disabledBtn: {
    backgroundColor: '#bdc3c7',
    cursor: 'not-allowed'
  },
  backLink: {
    display: 'inline-block',
    padding: '0.8rem 1.5rem',
    backgroundColor: '#95a5a6',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '8px',
    fontSize: '1rem'
  },
  buttonGroup: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '1rem'
  },
  stockStatus: {
    padding: '0.5rem 1rem',
    borderRadius: '20px',
    fontWeight: 'bold',
    fontSize: '0.9rem'
  },
  inStock: {
    backgroundColor: '#d5f4e6',
    color: '#27ae60'
  },
  outOfStock: {
    backgroundColor: '#fadbd8',
    color: '#e74c3c'
  },
  error: {
    textAlign: 'center',
    padding: '40px',
    color: '#e74c3c',
    fontSize: '1.2rem'
  }
};

const Product = () => {
  const { id } = useParams();
  const { getProductById } = useProducts();
  const { addToCart } = useCart();
  
  const product = getProductById(id);

  if (!product) {
    return (
      <div style={styles.error}>
        <h2>Товар не найден</h2>
        <p>Возможно, товар был удален или перемещен</p>
        <Link to="/catalog" style={styles.backLink}>
          Вернуться в каталог
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div style={styles.productPage}>
      <div style={styles.productDetail}>
        <div style={styles.productImageLarge}>
          <img 
            src={product.image} 
            alt={product.name} 
            style={styles.productImgLarge} 
          />
        </div>
        
        <div style={styles.productDetails}>
          <span style={styles.productCategory}>
            {product.category}
          </span>
          <h1 style={styles.productTitle}>{product.name}</h1>
          
          <div style={{
            ...styles.stockStatus,
            ...(product.inStock ? styles.inStock : styles.outOfStock)
          }}>
            {product.inStock ? '✓ В наличии' : '✗ Нет в наличии'}
          </div>
          
          <p style={styles.productDescription}>{product.description}</p>
          
          <div style={styles.featuresList}>
            <h3 style={styles.featuresTitle}>Характеристики:</h3>
            {product.features.map((feature, index) => (
              <div key={index} style={styles.featureItem}>
                • {feature}
              </div>
            ))}
          </div>
          
          <div style={styles.productPriceLarge}>${product.price}</div>
          
          <div style={styles.buttonGroup}>
            <button
              style={{
                ...styles.addToCartBtnLarge,
                ...(!product.inStock ? styles.disabledBtn : {})
              }}
              onClick={handleAddToCart}
              disabled={!product.inStock}
            >
              {product.inStock ? 'Добавить в корзину' : 'Нет в наличии'}
            </button>
            
            <Link to="/catalog" style={styles.backLink}>
              Назад в каталог
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;