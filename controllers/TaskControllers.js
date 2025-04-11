const Task = require('../models/Task');

const TaskController = {
  async create (req, res) {
    try {
      const { title, category } = req.body;

      // Validamos que el título y la categoría estén presentes
      if (!title || !category) {
        return res.status(400).json({ message: "Faltan campos obligatorios" });
      }

      // Creamos la nueva tarea
      const newTask = await Task.create({ title, category, completed: false });

      // Populamos la categoría de la tarea recién creada
      const populatedTask = await Task.findById(newTask._id).populate('category');

      // Enviamos la tarea con la categoría completamente poblada
      res.status(201).json(populatedTask);
    } catch (error) {
      console.error('Error creando tarea:', error);
      res.status(500).json({ message: 'Error interno del servidor' });
    }
  },

  async getAll(req, res) {
    try {
      const tasks = await Task.find().populate('category');
      console.log('Tareas con categorías: ', tasks);
      res.status(200).send(tasks);
    } catch (error) {
      console.error("Error al obtener tareas:", error);
      res.status(500).send({ error: 'Error al obtener tareas' });
    }
  },

  async getAllSSR (req, res) {
    try {
      const task = await Task.find();
      res.send(`<h1>Tareas</h1>
        ${task.map(task => {
          return (
            `<div>
              <h2>Nombre de la tarea: ${task.title}</h2>
              <p>Task completed: ${task.completed}</p>
            </div>`
          )
        }).join('')}
      </div>`);
    } catch (error) {
      console.log(error);
    }
  },

  async getByID (req, res) {
    try {
      const id = req.params._id;
      const task = await Task.findById(id);
      res.json(task);
    } catch (error) {
      console.log(error);
    }
  },

  async updateCompleted(req, res) {
    try {
      const id = req.params._id;
      const updatedTask = await Task.findByIdAndUpdate(
        id, {
          completed: true
        }, { new: true }
      );
      if (!updatedTask) {
        return res.status(404).json({ message: 'Task id not found' });
      }
      res.json(updatedTask);
    } catch (error) {
      console.log(error);
    }
  },

  async updateByName(req, res) {
    try {
      const id = req.params._id;
      const title = req.body.title;
      const updatedTitleTask = await Task.findByIdAndUpdate(
        id, {
          title
        }, { new: true }
      );
      res.json(updatedTitleTask);
    } catch (error) {
      console.log(error);
    }
  },

  async deleteTask (req, res) {
    try {
      const id = req.params._id;
      const deletedTask = await Task.findByIdAndDelete(id);
      if (!deletedTask) {
        return res.status(404).json({ message: "Task with that id not found" });
      }
      res.json({ message: "Task deleted successfully", deletedTask });
    } catch (error) {
      console.log(error);
    }
  },
  async updateById(req, res) {
    try {
      const id = req.params._id;
      const { title, description, completed, checklist, category } = req.body;

      const updatedTask = await Task.findByIdAndUpdate(
        id,
        {
          ...(title !== undefined && { title }),
          ...(description !== undefined && { description }),
          ...(completed !== undefined && { completed }),
          ...(checklist !== undefined && { checklist }),
          ...(category !== undefined && { category }),
        },
        { new: true }
      ).populate('category');

      if (!updatedTask) {
        return res.status(404).json({ message: 'Tarea no encontrada' });
      }

      res.json(updatedTask);
    } catch (error) {
      console.error("Error al actualizar tarea:", error);
      res.status(500).json({ message: "Error interno al actualizar la tarea" });
    }
  },

};

module.exports = TaskController;
