// product.routes.js
const express = require('express');
const products = require('./products');
const { blockSpecialBrand } = require('./middleware');

const router = express.Router();

// 1. Отримати всі продукти
router.get('/products', (request, response) => {
   return response.json(products);
});

// 2. Отримати продукти за брендом (з middleware blockSpecialBrand)
router.get('/products/:brand', blockSpecialBrand, (request, response) => {
   const { brand } = request.params;
   const filteredProducts = products.filter(product => product.brand === brand);
   response.json(filteredProducts);
});

// 3. ДОДАТКОВЕ ЗАВДАННЯ: Отримати продукт за ID
// Використовуємо префікс /id/, щоб не плутати з брендом
router.get('/products/id/:id', (request, response) => {
   const { id } = request.params;
   // Знаходимо один елемент. id з URL це рядок, тому parseInt
   const product = products.find(p => p.id === parseInt(id));
   
   if (product) {
       response.json(product);
   } else {
       response.status(404).send('Product not found');
   }
});

// 4. Тестовий роут для помилки
router.get('/productswitherror', (request, response) => {
   let err = new Error("processing error")
   err.statusCode = 400
   throw err
});

module.exports = router;