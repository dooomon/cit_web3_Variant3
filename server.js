const express = require('express');
const app = express();
const path = require('path');

// 静的ファイルの配信設定（CSSやJavaScriptファイルなど）
app.use(express.static('public'));

// ルートパスにアクセスがあった場合の処理
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// サーバーをポート3000で起動
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

