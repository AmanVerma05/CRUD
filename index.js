const express = require("express"); // import express

const app = express();
app.use(express.json());

const empRoutes = require("./routes/emproutes"); //import routes

app.use("/api", empRoutes);

const port = 6666;
app.listen(port, () => {
  console.log(`server running on ${port}`);
});
