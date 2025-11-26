import React from 'react';

// Стили для компонента
const styles = {
  footer: {
    backgroundColor: '#34495e',
    color: 'white',
    padding: '2rem 0',
    marginTop: 'auto'
  },
  footerContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0 20px'
  },
  footerSection: {
    flex: 1
  }
};

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.footerContainer}>
        <div style={styles.footerSection}>
          <h3>TechStore</h3>
          <p>Магазин электроники №1</p>
        </div>
        <div style={styles.footerSection}>
          <h4>Контакты</h4>
          <p>Email: info@techstore.com</p>
          <p>Телефон: +7 (999) 123-45-67</p>
          <p>Адрес: Москва, ул. Технологическая, 15</p>
        </div>
        <div style={styles.footerSection}>
          <h4>Часы работы</h4>
          <p>Пн-Пт: 9:00 - 21:00</p>
          <p>Сб-Вс: 10:00 - 20:00</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;