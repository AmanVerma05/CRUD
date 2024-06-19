const connection = require("../model/dbconnect"); // import the connection from the model

///////////// GET DATA //////////////////

const userget = async (req, res) => {
  let sqlquery = "SELECT * FROM EMP";
  await connection.query(sqlquery, function (error, result) {
    if (error) {
      console.log(error);
    } else {
      res.send(result);
    }
  });
};

// //////////////POST///////////
const postEmployee = async (req, res) => {
  let data = req.body;
  let sqlquery = `INSERT INTO emp set?`;

  await connection.query(sqlquery, [data], function (error, result) {
    if (error) {
      console.log(error);
    } else {
      res.send("Successfully Inserted")
    }
  });
};

////////////////////////UPDATE DATA////////////

const empupdate = async (req, res) => {
  let name = req.query.name;
  let data2 = req.body;
  let sqlquery = `UPDATE emp SET ? WHERE name=?`;
  await connection.query(sqlquery, [data2, name], function (error, result) {
    if (error) {
      console.log(error);
    } else {
      res.send("Successfully Updated")
    }
  });
};

////////////////////////DELETE DATA////////////

const empdelete = async (req, res) => {
  let name = req.query.name;
  let sqlquery = `DELETE FROM emp WHERE name=?`;
  await connection.query(sqlquery, [name], function (error, result) {
    if (error) {
      console.log(error);
    } else {
      res.send("Successfully Deleted")
    }
  });
};

module.exports = { userget, postEmployee, empdelete, empupdate };
