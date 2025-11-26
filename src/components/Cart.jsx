import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext.jsx';

// Стили для компонента
const styles = {
  cartPage: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px'
  },
  cartTitle: {
    textAlign: 'center',
    marginBottom: '2rem',
    color: '#2c3e50'
  },
  cartItems: {
    marginBottom: '2rem'
  },
  cartItem: {
    display: 'grid',
    gridTemplateColumns: '80px 1fr auto auto auto',
    gap: '1rem',
    alignItems: 'center',
    padding: '1rem',
    backgroundColor: 'white',
    borderRadius: '8px',
    marginBottom: '1rem',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
  },
  cartItemImage: {
    width: '80px',
    height: '80px',
    objectFit: 'cover',
    borderRadius: '4px'
  },
  cartItemInfo: {
    flex: 1
  },
  cartItemName: {
    margin: '0 0 0.5rem 0',
    color: '#2c3e50'
  },
  cartItemPrice: {
    margin: '0',
    color: '#7f8c8d',
    fontWeight: 'bold'
  },
  quantityControls: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem'
  },
  quantityBtn: {
    width: '30px',
    height: '30px',
    border: '1px solid #bdc3c7',
    backgroundColor: 'white',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '1rem'
  },
  quantity: {
    padding: '0 0.5rem',
    fontWeight: 'bold'
  },
  cartItemTotal: {
    fontWeight: 'bold',
    color: '#27ae60',
    fontSize: '1.1rem'
  },
  removeBtn: {
    padding: '0.5rem 1rem',
    backgroundColor: '#e74c3c',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  },
  cartSummary: {
    backgroundColor: 'white',
    padding: '2rem',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
  },
  cartTotal: {
    textAlign: 'center',
    marginBottom: '1.5rem'
  },
  cartActions: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center'
  },
  clearCartBtn: {
    padding: '0.75rem 1.5rem',
    backgroundColor: '#e74c3c',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '1rem'
  },
  checkoutBtn: {
    padding: '0.75rem 1.5rem',
    backgroundColor: '#27ae60',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '1rem'
  },
  emptyCart: {
    textAlign: 'center',
    padding: '4rem'
  },
  ctaButton: {
    display: 'inline-block',
    padding: '12px 30px',
    backgroundColor: '#3498db',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '5px',
    marginTop: '1rem'
  }
};

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, clearCart, getCartTotal } = useCart();

  // Если корзина пуста
  if (cart.items.length === 0) {
    return (
      <div style={styles.emptyCart}>
        <h2>Корзина пуста</h2>
        <p>Добавьте товары из каталога</p>
        <Link to="/catalog" style={styles.ctaButton}>
          Перейти в каталог
        </Link>
      </div>
    );
  }

  return (
    <div style={styles.cartPage}>
      <h1 style={styles.cartTitle}>Корзина покупок</h1>
      
      <div style={styles.cartItems}>
        {cart.items.map(item => (
          <div key={item.id} style={styles.cartItem}>
            <img 
              src={item.image} 
              alt={item.name} 
              style={styles.cartItemImage} 
            />
            
            <div style={styles.cartItemInfo}>
              <h3 style={styles.cartItemName}>{item.name}</h3>
              <p style={styles.cartItemPrice}>${item.price}</p>
            </div>
            
            <div style={styles.quantityControls}>
              <button 
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                style={styles.quantityBtn}
              >
                -
              </button>
              <span style={styles.quantity}>{item.quantity}</span>
              <button 
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                style={styles.quantityBtn}
              >
                +
              </button>
            </div>
            
            <div style={styles.cartItemTotal}>
              ${(item.price * item.quantity).toFixed(2)}
            </div>
            
            <button 
              onClick={() => removeFromCart(item.id)}
              style={styles.removeBtn}
            >
              Удалить
            </button>
          </div>
        ))}
      </div>
      
      <div style={styles.cartSummary}>
        <div style={styles.cartTotal}>
          <h2>Итого: ${getCartTotal().toFixed(2)}</h2>
        </div>
        
        <div style={styles.cartActions}>
          <button 
            onClick={clearCart}
            style={styles.clearCartBtn}
          >
            Очистить корзину
          </button>
          <button style={styles.checkoutBtn}>
            Оформить заказ
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;