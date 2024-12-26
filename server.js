const express = require('express');
const app = express();
const port = 3000;

// 静态文件服务
app.use(express.static('.'));

// CORS支持
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
}); 