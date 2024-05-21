const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// ルートファイルのインポート
const templateRouter = require('./routes/templateRouter');

// ミドルウェアの設定
app.use(bodyParser.json());

// ルートの設定
app.use('/template', templateRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
