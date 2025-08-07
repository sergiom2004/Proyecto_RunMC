import { defineStore } from 'pinia'
import { ref } from 'vue'
import apiService from '../services/api'

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null)
  const token = ref(localStorage.getItem('token'))
  const isAuthenticated = ref(!!token.value)

  const login = async (credentials) => {
    try {
      const response = await apiService.post('/api/auth/login', credentials)
      
      token.value = response.data.token
      user.value = response.data.user
      isAuthenticated.value = true
      
      localStorage.setItem('token', token.value)
      
      return { success: true, data: response.data }
    } catch (error) {
      return { success: false, error: error.response?.data?.message || 'Error de conexión' }
    }
  }

  const register = async (userData) => {
    try {
      const response = await apiService.post('/api/auth/register', userData)
      return { success: true, data: response.data }
    } catch (error) {
      return { success: false, error: error.response?.data?.message || 'Error de conexión' }
    }
  }

  const logout = () => {
    token.value = null
    user.value = null
    isAuthenticated.value = false
    localStorage.removeItem('token')
  }

  return {
    user,
    token,
    isAuthenticated,
    login,
    register,
    logout
  }
})
