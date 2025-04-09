const Category = require('../models/Category');

const CategoryController = {
    async create(req, res) {
        try {
            const newCategory = await Category.create(req.body);
            res.status(201).json(newCategory);
    } catch (err) {
        res.status(500).json({ message: 'Error al crear categoría', error: err });
    }
    },
    async getAll(req, res) {
    try {
        const categories = await Category.find();
        res.json(categories);
    } catch (err) {
        res.status(500).json({ message: 'Error al obtener categorías' });
    }
    },
    async deleteCategory(req, res) {
    try {
        const deleted = await Category.findByIdAndDelete(req.params._id);
        res.json(deleted);
        }catch (err) {
        res.status(500).json({ message: 'Error al eliminar categoría' });
    }
    }
};

module.exports = CategoryController;
