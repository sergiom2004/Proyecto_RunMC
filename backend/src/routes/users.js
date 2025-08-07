const express = require('express');
const router = express.Router();

// GET /api/users - Obtener todos los usuarios
router.get('/', (req, res) => {
  res.json({
    message: 'Lista de usuarios',
    users: []
  });
});

// GET /api/users/:id - Obtener usuario por ID
router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    message: `Usuario con ID: ${id}`,
    user: {}
  });
});

// POST /api/users - Crear nuevo usuario
router.post('/', (req, res) => {
  const userData = req.body;
  res.status(201).json({
    message: 'Usuario creado exitosamente',
    user: userData
  });
});

// PUT /api/users/:id - Actualizar usuario
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const userData = req.body;
  res.json({
    message: `Usuario ${id} actualizado`,
    user: userData
  });
});

// DELETE /api/users/:id - Eliminar usuario
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    message: `Usuario ${id} eliminado`
  });
});

module.exports = router;
