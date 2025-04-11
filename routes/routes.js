const express = require('express');
const router = express.Router();
const TaskController = require('../controllers/TaskControllers');
const CategoryController = require('../controllers/CategoryController');

// Rutas de tareas
router.post('/tasks/create', TaskController.create);
router.get('/tasks', TaskController.getAll);
router.put('/tasks/id/:_id', TaskController.updateByName);
router.put('/tasks/:_id', TaskController.updateById);
router.delete('/tasks/id/:_id', TaskController.deleteTask);

// Rutas de categorías
router.post('/categories/create', CategoryController.create);
router.get('/categories', CategoryController.getAll);
router.delete('/categories/id/:_id', CategoryController.deleteCategory);

module.exports = router;