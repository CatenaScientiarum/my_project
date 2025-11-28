// error.middleware.js
const errorResponder = (err, request, response, next) => {
   response.header("Content-Type", 'application/json')

   const status = err.statusCode || 500;
   response.status(status).send(err.message)
}

module.exports = { errorResponder };