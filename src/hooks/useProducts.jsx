import { useState, useEffect } from 'react';
import { mockProducts } from '../data/products.jsx';

// Хук для работы с товарами
export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Загружаем товары при первом рендере
  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);
        // Имитируем загрузку с сервера (500ms задержка)
        await new Promise(resolve => setTimeout(resolve, 500));
        setProducts(mockProducts);
      } catch (err) {
        setError('Не удалось загрузить товары');
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  // Найти товар по ID
  const getProductById = (id) => {
    return products.find(product => product.id === parseInt(id));
  };

  // Получить товары по категории
  const getProductsByCategory = (category) => {
    if (!category) return products;
    return products.filter(product => product.category === category);
  };

  // Получить все категории
  const getCategories = () => {
    const categories = [...new Set(products.map(product => product.category))];
    return categories;
  };

  // Возвращаем данные и функции
  return {
    products,
    loading,
    error,
    getProductById,
    getProductsByCategory,
    getCategories
  };
};