import React from 'react';
import { Link } from 'react-router-dom';

// Стили для компонента
const styles = {
  home: {
    textAlign: 'center'
  },
  hero: {
    padding: '4rem 0',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    borderRadius: '10px',
    margin: '2rem 0'
  },
  heroTitle: {
    fontSize: '3rem',
    marginBottom: '1rem',
    fontWeight: 'bold'
  },
  heroText: {
    fontSize: '1.2rem',
    marginBottom: '2rem',
    opacity: 0.9
  },
  ctaButton: {
    display: 'inline-block',
    padding: '15px 40px',
    backgroundColor: '#27ae60',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '25px',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    transition: 'transform 0.2s'
  },
  features: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem',
    marginTop: '3rem',
    padding: '0 2rem'
  },
  feature: {
    padding: '2rem',
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
  },
  featureTitle: {
    color: '#2c3e50',
    marginBottom: '1rem'
  }
};

const Home = () => {
  return (
    <div style={styles.home}>
      <section style={styles.hero}>
        <h1 style={styles.heroTitle}>Добро пожаловать в TechStore</h1>
        <p style={styles.heroText}>
          Лучшие гаджеты и электроника по доступным ценам
        </p>
        <Link to="/catalog" style={styles.ctaButton}>
          Смотреть каталог
        </Link>
      </section>

      <div style={styles.features}>
        <div style={styles.feature}>
          <h3 style={styles.featureTitle}>🚀 Новейшие технологии</h3>
          <p>Только самые современные устройства от ведущих брендов</p>
        </div>
        <div style={styles.feature}>
          <h3 style={styles.featureTitle}>💰 Гарантия лучшей цены</h3>
          <p>Мы уверены в наших ценах и предлагаем лучшие условия</p>
        </div>
        <div style={styles.feature}>
          <h3 style={styles.featureTitle}>🔧 Профессиональная поддержка</h3>
          <p>Наша команда всегда готова помочь с выбором и настройкой</p>
        </div>
      </div>
    </div>
  );
};

export default Home;