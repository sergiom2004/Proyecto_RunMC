#!/usr/bin/env bash

# Script para inicializar el proyecto RunMC

echo "🚀 Iniciando configuración de RunMC..."

# Verificar si Node.js está instalado
if ! command -v node &> /dev/null; then
    echo "❌ Node.js no está instalado. Por favor instala Node.js primero."
    exit 1
fi

# Verificar si PostgreSQL está instalado
if ! command -v psql &> /dev/null; then
    echo "⚠️  PostgreSQL no está instalado o no está en el PATH."
    echo "Por favor instala PostgreSQL y configura las credenciales en backend/.env"
fi

echo "📦 Instalando dependencias del backend..."
cd backend && npm install
if [ $? -ne 0 ]; then
    echo "❌ Error instalando dependencias del backend"
    exit 1
fi

echo "📦 Instalando dependencias del frontend..."
cd ../frontend && npm install
if [ $? -ne 0 ]; then
    echo "❌ Error instalando dependencias del frontend"
    exit 1
fi

echo "⚙️  Configurando variables de entorno..."
cd ../backend
if [ ! -f .env ]; then
    cp .env.example .env
    echo "✅ Archivo .env creado. Por favor configura las credenciales de PostgreSQL."
else
    echo "ℹ️  Archivo .env ya existe."
fi

echo ""
echo "✅ ¡Configuración completada!"
echo ""
echo "🗄️  Próximos pasos:"
echo "1. Configura PostgreSQL y crea la base de datos 'runmc_db'"
echo "2. Ejecuta el script de inicialización: psql -d runmc_db -f backend/database/init.sql"
echo "3. Configura las credenciales en backend/.env"
echo "4. Inicia el proyecto con: npm run start:dev"
echo ""
echo "🌐 URLs del proyecto:"
echo "   Frontend: http://localhost:8080"
echo "   Backend:  http://localhost:3000"
echo "   API Health: http://localhost:3000/api/health"
