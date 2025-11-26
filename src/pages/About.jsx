import React from 'react';

// Стили для компонента
const styles = {
  aboutPage: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '2rem 1rem',
    lineHeight: '1.6'
  },
  aboutTitle: {
    textAlign: 'center',
    marginBottom: '2rem',
    color: '#2c3e50',
    fontSize: '2.5rem'
  },
  aboutContent: {
    backgroundColor: 'white',
    padding: '2rem',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
  },
  section: {
    marginBottom: '2rem'
  },
  sectionTitle: {
    color: '#3498db',
    marginBottom: '1rem',
    fontSize: '1.5rem',
    borderBottom: '2px solid #3498db',
    paddingBottom: '0.5rem'
  },
  paragraph: {
    marginBottom: '1rem',
    fontSize: '1.1rem',
    color: '#555'
  },
  teamGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '1.5rem',
    marginTop: '1rem'
  },
  teamMember: {
    textAlign: 'center',
    padding: '1rem'
  },
  memberPhoto: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    backgroundColor: '#ecf0f1',
    margin: '0 auto 1rem auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '2rem',
    color: '#7f8c8d'
  },
  memberName: {
    fontWeight: 'bold',
    marginBottom: '0.5rem',
    color: '#2c3e50'
  },
  memberRole: {
    color: '#7f8c8d',
    fontSize: '0.9rem'
  },
  contactInfo: {
    backgroundColor: '#f8f9fa',
    padding: '1.5rem',
    borderRadius: '8px',
    marginTop: '1rem'
  },
  contactItem: {
    marginBottom: '0.5rem',
    display: 'flex',
    alignItems: 'center'
  },
  contactIcon: {
    marginRight: '0.5rem',
    fontSize: '1.2rem'
  }
};

const About = () => {
  return (
    <div style={styles.aboutPage}>
      <h1 style={styles.aboutTitle}>О нашем магазине</h1>
      
      <div style={styles.aboutContent}>
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Наша история</h2>
          <p style={styles.paragraph}>
            TechStore был основан в 2020 году с целью сделать передовые технологии 
            доступными для каждого. Что начиналось как небольшой онлайн-магазин, 
            быстро выросло в надежного партнера для тысяч клиентов по всей стране.
          </p>
          <p style={styles.paragraph}>
            Мы верим, что технологии должны улучшать жизнь людей, и стремимся 
            предлагать только лучшие продукты от проверенных производителей.
          </p>
        </div>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Наша миссия</h2>
          <p style={styles.paragraph}>
            Мы стремимся быть мостом между инновациями и нашими клиентами, 
            предлагая не просто товары, а решения для современной цифровой жизни.
          </p>
        </div>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Почему выбирают нас?</h2>
          <ul style={{ color: '#555', paddingLeft: '1.5rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>✅ Только оригинальная продукция с гарантией</li>
            <li style={{ marginBottom: '0.5rem' }}>✅ Конкурентные цены и регулярные акции</li>
            <li style={{ marginBottom: '0.5rem' }}>✅ Профессиональные консультации</li>
            <li style={{ marginBottom: '0.5rem' }}>✅ Быстрая доставка по всей стране</li>
            <li style={{ marginBottom: '0.5rem' }}>✅ Техническая поддержка 24/7</li>
          </ul>
        </div>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Наша команда</h2>
          <div style={styles.teamGrid}>
            <div style={styles.teamMember}>
              <div style={styles.memberPhoto}>👨‍💼</div>
              <div style={styles.memberName}>Алексей Петров</div>
              <div style={styles.memberRole}>Основатель и CEO</div>
            </div>
            <div style={styles.teamMember}>
              <div style={styles.memberPhoto}>👩‍💻</div>
              <div style={styles.memberName}>Мария Иванова</div>
              <div style={styles.memberRole}>Технический директор</div>
            </div>
            <div style={styles.teamMember}>
              <div style={styles.memberPhoto}>👨‍🔧</div>
              <div style={styles.memberName}>Дмитрий Сидоров</div>
              <div style={styles.memberRole}>Менеджер по продажам</div>
            </div>
            <div style={styles.teamMember}>
              <div style={styles.memberPhoto}>👩‍🎨</div>
              <div style={styles.memberName}>Анна Козлова</div>
              <div style={styles.memberRole}>Специалист поддержки</div>
            </div>
          </div>
        </div>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Контакты</h2>
          <div style={styles.contactInfo}>
            <div style={styles.contactItem}>
              <span style={styles.contactIcon}>📧</span>
              <span>Email: info@techstore.com</span>
            </div>
            <div style={styles.contactItem}>
              <span style={styles.contactIcon}>📞</span>
              <span>Телефон: +7 (999) 123-45-67</span>
            </div>
            <div style={styles.contactItem}>
              <span style={styles.contactIcon}>🏢</span>
              <span>Адрес: Москва, ул. Технологическая, 15</span>
            </div>
            <div style={styles.contactItem}>
              <span style={styles.contactIcon}>🕒</span>
              <span>Часы работы: Пн-Пт 9:00-21:00, Сб-Вс 10:00-20:00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;