const express = require('express');
const usuarioRouter=require("./router/usuarioRouter")
const app = express();
const dotenv = require("dotenv");
dotenv.config();
app.use(express.json());

app.use("/api",usuarioRouter);

const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`); 
});