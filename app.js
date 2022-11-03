const express = require("express");
const path = require("path");
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, 'client/build/index.html'))
})
app.get('/api', (req, res)=>{
    res.sendFile(path.join(__dirname, 'client/public/post.json'))
})

app.listen(PORT, ()=>{
    console.log(`Server running on PORT ${PORT}`)
})
