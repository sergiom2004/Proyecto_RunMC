<template>
  <div class="about">
    <h1>Acerca de RunMC</h1>
    <div class="info-grid">
      <div class="info-card">
        <h2>🚀 Backend</h2>
        <p>Node.js con Express</p>
        <ul>
          <li>API REST</li>
          <li>Autenticación JWT</li>
          <li>Middleware de seguridad</li>
        </ul>
      </div>
      
      <div class="info-card">
        <h2>🎨 Frontend</h2>
        <p>Vue.js 3 con Vite</p>
        <ul>
          <li>Composición API</li>
          <li>Vue Router</li>
          <li>Pinia para estado</li>
        </ul>
      </div>
      
      <div class="info-card">
        <h2>💾 Base de Datos</h2>
        <p>PostgreSQL</p>
        <ul>
          <li>Base de datos relacional</li>
          <li>Alta performance</li>
          <li>ACID compliant</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style scoped>
.about {
  max-width: 1200px;
  margin: 0 auto;
}

.about h1 {
  text-align: center;
  color: #2c3e50;
  margin-bottom: 2rem;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.info-card {
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.info-card h2 {
  color: #3498db;
  margin-bottom: 1rem;
}

.info-card p {
  color: #7f8c8d;
  font-size: 1.1rem;
  margin-bottom: 1rem;
}

.info-card ul {
  list-style-type: none;
  padding: 0;
}

.info-card li {
  color: #555;
  padding: 0.5rem 0;
  border-bottom: 1px solid #eee;
}

.info-card li:last-child {
  border-bottom: none;
}
</style>
