const fs = require("fs");

const requestHandler = (req, res) => {
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head>");
    res.write("<title> form page </title>");
    res.write(
      '<body> <form action="/message" method="POST"><input type="text" name="message"/> <button type="submit"> submit</button></form> </body>'
    );
    res.write("</html>");
    res.write("</head>");
    return res.end();
  }
  if (req.url === "/message" && req.method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log("chunk", chunk);
      body.push(chunk);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body)?.toString();
      console.log("parsedBody", parsedBody);
      fs.writeFileSync("message.txt", parsedBody);
    });
    res.statusCode = 302;
    res.setHeader("Location", "/message");
    return res.end();
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head>");
  res.write("<title> Form Message </title>");
  res.write("<body>Thanks for sending a message </body>");
  res.write("</html>");
  res.write("</head>");
  res.end();
};

module.exports = requestHandler;
