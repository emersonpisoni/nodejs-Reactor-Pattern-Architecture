const http = require("http");

function fakeIO(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const server = http.createServer(async (req, res) => {
  const start = Date.now();

  await fakeIO(100);

  const dur = Date.now() - start;
  res.writeHead(200, { "content-type": "application/json" });
  res.end(JSON.stringify({ ok: true, durMs: dur }));
});

server.listen(3000, () => {
  console.log("server-io listening on http://localhost:3000");
});
