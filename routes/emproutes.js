const express = require("express"); 

const empRoutes = express.Router(); 

empRoutes.use(express.json());

const {
  userget,
  postEmployee,
  empdelete,
  empupdate,
} = require("../controller/empcontroller");

empRoutes.get("/view", userget); //http://localhost:6666/api/view
empRoutes.post("/postemp", postEmployee); //http://localhost:6666/api/postemp
empRoutes.patch("/empupdate", empupdate); //http://localhost:6666/api/empupdate?name=
empRoutes.delete("/empdelete", empdelete); //http://localhost:6666/api/empdelete?name=

module.exports = empRoutes;
