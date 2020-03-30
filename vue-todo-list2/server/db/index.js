const { connection } = require("./mySql");

/*
 * 功能：进行数据库查询
 * param@1: sql语句
 */
const query = sql => {
  return new Promise((resolve, reject) => {
    connection.query(sql, (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

module.exports = {
  query
};
