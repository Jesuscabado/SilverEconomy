import express from "express"; //IMportamos express

const app = express(); //Creamos una pp de express

app.use(express.json());
// Configuración de rutas aquí
app.get("/", (req, res) => {
  res.send("Hello silvereconomy");
});

app.listen(3000, () => {
  //INDICAMOS que el servidor escuche en el puerto 3000
  console.log("Server is running in port 3000");
});
