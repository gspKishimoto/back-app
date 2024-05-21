const mysql = require('mysql');
const util = require('util');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'test',
});

// プロミスベースのクエリ関数作成
const query = util.promisify(connection.query).bind(connection);

const template = async (data) => {
  const sql = 'SELECT * FROM template WHERE id = ?';
  const params = [data.id];
  try {
    const result = await query(sql, params);
    return result;
  } catch (err) {
    throw new Error('Error occurred in templateModel.template: ' + err.message);
  }
};

module.exports = {
  template,
};
