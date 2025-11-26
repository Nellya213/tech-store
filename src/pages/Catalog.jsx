import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useProducts } from '../hooks/useProducts.jsx';
import ProductCard from '../components/ProductCard.jsx';

// Стили для компонента
const styles = {
  catalogPage: {
    padding: '20px 0',
    minHeight: '60vh'
  },
  catalogHeader: {
    marginBottom: '2rem',
    textAlign: 'center'
  },
  searchContainer: {
    marginBottom: '2rem',
    maxWidth: '500px',
    margin: '0 auto 2rem auto'
  },
  searchInput: {
    width: '100%',
    padding: '12px 16px',
    border: '2px solid #bdc3c7',
    borderRadius: '25px',
    fontSize: '1rem',
    outline: 'none',
    transition: 'border-color 0.2s'
  },
  categoriesNav: {
    display: 'flex',
    gap: '1rem',
    marginBottom: '2rem',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  categoryLink: {
    padding: '0.5rem 1.5rem',
    backgroundColor: '#ecf0f1',
    borderRadius: '20px',
    textDecoration: 'none',
    color: '#2c3e50',
    fontWeight: '500',
    transition: 'all 0.2s'
  },
  activeCategory: {
    backgroundColor: '#3498db',
    color: 'white'
  },
  productsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '20px',
    marginTop: '2rem'
  },
  loading: {
    textAlign: 'center',
    padding: '40px',
    fontSize: '1.2rem',
    color: '#7f8c8d'
  },
  error: {
    textAlign: 'center',
    padding: '40px',
    color: '#e74c3c',
    fontSize: '1.1rem'
  },
  noProducts: {
    textAlign: 'center',
    padding: '40px',
    color: '#7f8c8d',
    fontSize: '1.1rem'
  }
};

const Catalog = () => {
  const { category } = useParams();
  const { products, loading, error, getCategories } = useProducts();
  const [searchTerm, setSearchTerm] = useState('');

  const categories = getCategories();

  // Фильтруем товары по категории и поисковому запросу
  const filteredProducts = products.filter(product => 
    (!category || product.category === category) &&
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return <div style={styles.loading}>Загрузка товаров...</div>;
  }

  if (error) {
    return <div style={styles.error}>{error}</div>;
  }

  return (
    <div style={styles.catalogPage}>
      <div style={styles.catalogHeader}>
        <h1>{category ? `Категория: ${category}` : 'Все товары'}</h1>
        <p>Найдите идеальное устройство для себя</p>
      </div>

      {/* Поле поиска */}
      <div style={styles.searchContainer}>
        <input
          type="text"
          placeholder="Поиск товаров..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={styles.searchInput}
        />
      </div>

      {/* Навигация по категориям */}
      <div style={styles.categoriesNav}>
        <Link 
          to="/catalog" 
          style={{
            ...styles.categoryLink,
            ...(!category ? styles.activeCategory : {})
          }}
        >
          Все товары
        </Link>
        {categories.map(cat => (
          <Link 
            key={cat} 
            to={`/catalog/${cat}`}
            style={{
              ...styles.categoryLink,
              ...(category === cat ? styles.activeCategory : {})
            }}
          >
            {cat}
          </Link>
        ))}
      </div>

      {/* Сетка товаров */}
      {filteredProducts.length === 0 ? (
        <div style={styles.noProducts}>
          {searchTerm ? 'По вашему запросу ничего не найдено' : 'Товары не найдены'}
        </div>
      ) : (
        <div style={styles.productsGrid}>
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Catalog;