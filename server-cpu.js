const http = require("http");

function burnCpu(ms) {
  const end = Date.now() + ms;
  while (Date.now() < end) {
    // loop busy-wait (CPU-bound): blocks event loop
  }
}

const server = http.createServer((req, res) => {
  const start = Date.now();

  burnCpu(100);

  const dur = Date.now() - start;
  res.writeHead(200, { "content-type": "application/json" });
  res.end(JSON.stringify({ ok: true, durMs: dur }));
});

server.listen(3000, () => {
  console.log("server-cpu listening on http://localhost:3000");
});
