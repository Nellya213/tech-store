import React, { createContext, useContext, useReducer } from 'react';

// Создаем контекст для корзины
const CartContext = createContext();

// Обработчик действий для корзины
const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      // Проверяем есть ли товар уже в корзине
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        // Увеличиваем количество если товар уже есть
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        };
      }
      // Добавляем новый товар
      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }]
      };
    
    case 'REMOVE_FROM_CART':
      // Удаляем товар из корзины
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload)
      };
    
    case 'UPDATE_QUANTITY':
      // Обновляем количество товара
      if (action.payload.quantity <= 0) {
        return {
          ...state,
          items: state.items.filter(item => item.id !== action.payload.id)
        };
      }
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        )
      };
    
    case 'CLEAR_CART':
      // Очищаем всю корзину
      return {
        ...state,
        items: []
      };
    
    default:
      return state;
  }
};

// Провайдер корзины - оборачивает всё приложение
export const CartProvider = ({ children }) => {
  const [cartState, dispatch] = useReducer(cartReducer, { items: [] });

  // Функция добавления в корзину
  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  // Функция удаления из корзины
  const removeFromCart = (productId) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: productId });
  };

  // Функция обновления количества
  const updateQuantity = (productId, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id: productId, quantity } });
  };

  // Функция очистки корзины
  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  // Функция подсчета общей суммы
  const getCartTotal = () => {
    return cartState.items.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  // Функция подсчета общего количества товаров
  const getCartItemsCount = () => {
    return cartState.items.reduce((count, item) => count + item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{
      cart: cartState,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      getCartTotal,
      getCartItemsCount
    }}>
      {children}
    </CartContext.Provider>
  );
};

// Хук для использования корзины в компонентах
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};