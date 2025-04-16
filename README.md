# Trellidge Backend

Este es el backend del proyecto Trellidge, una aplicación tipo Trello para organizar tareas visualmente en columnas (categorías). Este servidor maneja la lógica de creación, edición, reordenamiento y eliminación de tareas y categorías, conectándose con una base de datos MongoDB.

## 🧰 Tecnologías utilizadas

Node.js

Express.js

MongoDB + Mongoose

dotenv

body-parser

CORS

## 🚀 Cómo ejecutar el servidor

Clona este repositorio:
git clone https://github.com/DSantosPascual/BACK-TRELLIDGE.git
cd BACK-TRELLIDGE

Instala las dependencias:
npm install

Ejecuta el servidor:
npm start

## 🗂️ Estructura del proyecto

pgsql
Copiar
Editar
BACK-TRELLIDGE/
├── controllers/       → Lógica de negocio (categorías y tareas)
├── models/            → Esquemas de Mongoose
├── routes/            → Endpoints de la API
├── index.js           → Punto de entrada
├── .env               → Configuración de entorno
└── package.json       → Dependencias y scripts del proyecto
## 📜 Endpoints disponibles

Categorías:

GET /categories → Obtener todas las categorías

POST /categories → Crear una categoría nueva

DELETE /categories/:id → Eliminar una categoría por ID

Tareas:

POST /tasks → Crear una tarea

PUT /tasks/:id → Editar una tarea (posición, descripción, checklist, etc.)

DELETE /tasks/:id → Eliminar una tarea

## 🌐 Despliegue

Este proyecto puede ser desplegado fácilmente en plataformas como Heroku, DigitalOcean, o AWS. Asegúrate de configurar las variables de entorno necesarias en tu plataforma de despliegue.

## 📄 Licencia

Este proyecto se encuentra bajo la licencia MIT.

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas!
Si encuentras errores o quieres proponer mejoras, abre un issue o haz un pull request.