const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth.routes');
const rutaProtegida = require ('./routes/protegida.routes');
const perfilRoutes = require('./routes/perfil.routes');

require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/protegida', rutaProtegida);
app.use('/api/auth', authRoutes); // Ruta base para autenticación
app.use('/api/perfil', perfilRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});