// JSON Server module
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("src/data/db.json");

// Make sure to use the default middleware
const middlewares = jsonServer.defaults();

const port = 4000;
server.use(middlewares);
// Add this before server.use(router)

server.use(router);
// Listen to port
server.listen(port, () => {
    console.log(`JSON Server is running in ${port}`);
});

// Export the Server API
module.exports = server;