import express = require("express");

const app = express();

app.get("/home", (req, res) => {
    res.json({ message: process.env.USER_NAME});
});

app.get("/produtos", (req, res) => {
    res.json({ id: crypto.randomUUID()});
});

app.listen(3000, () => {
    console.log("Servidor rodando suave");
});