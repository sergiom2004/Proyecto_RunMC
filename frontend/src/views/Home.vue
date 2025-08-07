<template>
  <div class="home">
    <div class="hero">
      <h1>Bienvenido a RunMC</h1>
      <p>Tu aplicación web con Node.js, Vue.js y PostgreSQL</p>
      <button @click="testApi" class="cta-button">Probar API</button>
    </div>
    
    <div class="status-section" v-if="apiStatus">
      <h2>Estado del API</h2>
      <div class="status-card" :class="{ 'success': apiStatus.success, 'error': !apiStatus.success }">
        <p><strong>Estado:</strong> {{ apiStatus.message }}</p>
        <p v-if="apiStatus.data"><strong>Respuesta:</strong> {{ apiStatus.data.message }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import apiService from '../services/api'

export default {
  name: 'Home',
  setup() {
    const apiStatus = ref(null)

    const testApi = async () => {
      try {
        const response = await apiService.get('/api/health')
        apiStatus.value = {
          success: true,
          message: 'Conexión exitosa',
          data: response.data
        }
      } catch (error) {
        apiStatus.value = {
          success: false,
          message: 'Error de conexión: ' + error.message
        }
      }
    }

    return {
      apiStatus,
      testApi
    }
  }
}
</script>

<style scoped>
.home {
  text-align: center;
}

.hero {
  padding: 4rem 0;
}

.hero h1 {
  font-size: 3rem;
  color: #2c3e50;
  margin-bottom: 1rem;
}

.hero p {
  font-size: 1.2rem;
  color: #7f8c8d;
  margin-bottom: 2rem;
}

.cta-button {
  background-color: #3498db;
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.cta-button:hover {
  background-color: #2980b9;
}

.status-section {
  margin-top: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.status-card {
  padding: 1rem;
  border-radius: 5px;
  text-align: left;
}

.status-card.success {
  background-color: #d4edda;
  border: 1px solid #c3e6cb;
  color: #155724;
}

.status-card.error {
  background-color: #f8d7da;
  border: 1px solid #f5c6cb;
  color: #721c24;
}
</style>
