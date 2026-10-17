import { createServer } from "node:http";

const port = Number(process.env.PORT || 8888);

const server = createServer((request, response) => {
  if (request.url === "/health") {
    response.writeHead(200, { "content-type": "application/json" });
    response.end(JSON.stringify({ status: "ok", service: "josphat-labs-backend" }));
    return;
  }

  response.writeHead(404, { "content-type": "application/json" });
  response.end(JSON.stringify({ error: "Route not found" }));
});

server.listen(port, () => {
  console.log(`Josphat Labs backend listening on port ${port}`);
});
