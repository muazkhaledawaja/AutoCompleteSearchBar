const http = require("http");
const router = require("./router");

const server = http.createServer(router);


server.listen(4000, () => {
  console.log(
    `Server is listening on port 4000`
  );
});


