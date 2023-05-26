const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

// Middleware để chặn yêu cầu tạo mới khi đăng nhập
server.use((req, res, next) => {
  if (req.method === "POST" && req.path === "/uers") {
    // Chặn yêu cầu tạo mới khi đăng nhập
    return res.status(403).json({ message: "Login request not allowed" });
  }

  next();
});

server.use(router);

server.listen(3000, () => {
  console.log("JSON Server is running");
});
