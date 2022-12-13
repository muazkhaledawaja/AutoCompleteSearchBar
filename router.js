const fs = require("fs");
const path = require("path");

//convert JSON file to readable oject
const mockData = JSON.parse(fs.readFileSync("public/mockData.json"));
 

const router = (req, res) => {
  const arr = req.url.split("?");
  const endpoint = arr[0];
  const query = arr[1];

  //generic  route
  if (endpoint === "/") {
    const filePath = path.join(__dirname, "public", "index.html");
    fs.readFile(filePath, (error, file) => {
      if (error) {
        console.log(error);
        return;
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(file);
      }
    });
    // CSS route
  } else if (endpoint === "/main.css") {
    const filePath = path.join(__dirname, "public", "main.css");
    fs.readFile(filePath, (error, file) => {
      if (error) {
        console.log(error);
        return;
      } else {
        res.writeHead(200, { "Content-Type": "text/css" });
        res.end(file);
      }
    });
    // JS route
  } else if (endpoint === "/app.js") {
    const filePath = path.join(__dirname, "public", "app.js");
    fs.readFile(filePath, (error, file) => {
      if (error) {
        console.log(error);
        return;
      } else {
        res.writeHead(200, { "Content-Type": "text/js" });
        res.end(file);
      }
    });
    // Auto-Complete route
  } else if (endpoint === "/search") {
    let result = [];
    const toSearch = query.split("=")[1].trim();
    if (toSearch.length) {
      result = mockData.filter((e) =>
        e.carName.toLowerCase().startsWith(toSearch.toLowerCase(), 0)
      );
    }
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(result));
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<h1>P N F 404 :(</h1>");
  }
};

module.exports = router;
