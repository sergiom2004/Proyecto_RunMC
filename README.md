# RunMC

Proyecto full-stack con Node.js, Vue.js y PostgreSQL.

## 🚀 Tecnologías

### Backend
- **Node.js** con Express.js
- **PostgreSQL** como base de datos
- **JWT** para autenticación
- **bcrypt** para hash de contraseñas

### Frontend
- **Vue.js 3** con Composition API
- **Vite** como build tool
- **Vue Router** para navegación
- **Pinia** para manejo de estado
- **Axios** para peticiones HTTP

## 📁 Estructura del Proyecto

```
RunMC/
├── backend/                 # API REST con Node.js
│   ├── src/
│   │   ├── app.js          # Aplicación principal
│   │   ├── config/         # Configuración de BD
│   │   ├── routes/         # Rutas de la API
│   │   └── middleware/     # Middlewares personalizados
│   ├── database/           # Scripts de base de datos
│   └── package.json
│
├── frontend/               # Aplicación Vue.js
│   ├── src/
│   │   ├── components/     # Componentes reutilizables
│   │   ├── views/         # Páginas/vistas
│   │   ├── router/        # Configuración de rutas
│   │   ├── stores/        # Stores de Pinia
│   │   └── services/      # Servicios (API calls)
│   └── package.json
│
└── README.md
```

## 🛠️ Configuración Inicial

### 1. Prerequisitos

- Node.js (v16 o superior)
- PostgreSQL (v12 o superior)
- npm o yarn

### 2. Configurar PostgreSQL

1. Instala PostgreSQL
2. Crea una base de datos:
```sql
CREATE DATABASE runmc_db;
```
3. Ejecuta el script de inicialización:
```bash
psql -d runmc_db -f backend/database/init.sql
```

### 3. Configurar Backend

```bash
cd backend
npm install
```

Crea un archivo `.env` basado en `.env.example`:
```bash
cp .env.example .env
```

Edita el archivo `.env` con tus credenciales de PostgreSQL:
```env
DB_HOST=localhost
DB_PORT=5432
DB_NAME=runmc_db
DB_USER=tu_usuario
DB_PASSWORD=tu_password
JWT_SECRET=tu_jwt_secret_super_seguro
```

### 4. Configurar Frontend

```bash
cd frontend
npm install
```

## 🚀 Ejecutar el Proyecto

### Opción 1: Ejecutar ambos servidores simultáneamente (Recomendado)
```bash
npm run start:dev
```

### Opción 2: Ejecutar por separado

#### Backend (Puerto 3000)
```bash
cd backend
npm run dev
```

#### Frontend (Puerto 8080)
```bash
cd frontend
npm run dev
```

### Opción 3: Usar tareas de VS Code
Presiona `Ctrl+Shift+P` y busca "Tasks: Run Task", luego selecciona "Start Both Servers".

Visita http://localhost:8080 para ver la aplicación.

## 📝 API Endpoints

### Salud del sistema
- `GET /` - Mensaje de bienvenida
- `GET /api/health` - Estado del servidor

### Autenticación
- `POST /api/auth/register` - Registro de usuario
- `POST /api/auth/login` - Inicio de sesión

### Usuarios
- `GET /api/users` - Listar usuarios
- `GET /api/users/:id` - Obtener usuario por ID
- `POST /api/users` - Crear usuario
- `PUT /api/users/:id` - Actualizar usuario
- `DELETE /api/users/:id` - Eliminar usuario

## 🧪 Testing

Ejecutar pruebas del backend:
```bash
cd backend
npm test
```

## 📦 Construcción para Producción

### Frontend
```bash
cd frontend
npm run build
```

### Backend
El backend está listo para producción. Asegúrate de configurar las variables de entorno apropiadas.

## 🔐 Variables de Entorno

### Backend (.env)
- `NODE_ENV` - Entorno de ejecución
- `PORT` - Puerto del servidor
- `DB_HOST` - Host de PostgreSQL
- `DB_PORT` - Puerto de PostgreSQL
- `DB_NAME` - Nombre de la base de datos
- `DB_USER` - Usuario de PostgreSQL
- `DB_PASSWORD` - Contraseña de PostgreSQL
- `JWT_SECRET` - Secreto para JWT
- `JWT_EXPIRES_IN` - Tiempo de expiración del JWT

## 🤝 Contribuir

1. Fork del proyecto
2. Crear una rama feature (`git checkout -b feature/AmazingFeature`)
3. Commit los cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia ISC.
