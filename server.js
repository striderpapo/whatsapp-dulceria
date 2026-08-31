/*const express = require("express");

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

// Ruta de prueba
app.get("/", (req, res) => {
  res.send("🍬 Bot de WhatsApp funcionando");
});

// Verificación del Webhook de Meta
app.get("/webhook", (req, res) => {
  const VERIFY_TOKEN = "dulceria_token";

  const mode = req.query["hub.mode"];
  const token = req.query["hub.verify_token"];
  const challenge = req.query["hub.challenge"];

  if (mode === "subscribe" && token === VERIFY_TOKEN) {
    console.log("✅ Webhook verificado por Meta");
    res.status(200).send(challenge);
  } else {
    res.sendStatus(403);
  }
});

// Recepción de mensajes de WhatsApp
app.post("/webhook", (req, res) => {
  console.log("📩 Mensaje recibido:");
  console.log(JSON.stringify(req.body, null, 2));

  res.sendStatus(200);
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});*/
const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("🍬 Bot de WhatsApp funcionando");
});

app.post("/webhook", (req, res) => {
    console.log("📩 Webhook recibido");

    console.log(JSON.stringify(req.body, null, 2));

    res.sendStatus(200);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`🚀 Servidor escuchando en el puerto ${PORT}`);
});