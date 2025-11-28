// index.js
const express = require('express');
const productRoutes = require('./product.routes');
const { logRequest } = require('./middleware');
const { errorResponder } = require('./error.middleware');

const app = express();
const PORT = 3000;

// Підключаємо логування для всіх запитів
app.use(logRequest);

// Підключаємо маршрути продуктів
app.use(productRoutes);

// Підключаємо обробник помилок (обов'язково в кінці)
app.use(errorResponder);

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});