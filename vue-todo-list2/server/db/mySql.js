// const { queryTodoItemsSQL } = require("./sql");

var mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "demo"
});

connection.connect();
console.log(connection);
// const query = () => {};
module.exports = {
  connection
};
