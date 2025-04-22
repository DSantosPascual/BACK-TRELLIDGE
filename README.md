# Trellidge Backend

Aquí encontrarás es el backend del proyecto Trellidge, una aplicación tipo Trello que permite organizar tareas visualmente en columnas (categorías). 
Esta parte del proyecto se encarga de manejar la lógica del servidor y la creación, edición, reordenamiento y eliminación de tareas y categorías, conectándose con una base de datos MongoDB.

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

El Backend ha sido desplegado mediante la aplicación Render.



Este proyecto ha sido creado por:

Dámaso Santos, Adrián Pajuelo y Adrián Garrido.