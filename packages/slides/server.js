let express = require("express");
let static = require("express-static-gzip");
let app = express();

app.use(static("./"));
app.listen(1234);
