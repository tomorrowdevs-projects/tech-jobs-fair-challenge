import express from 'express';
import cors from 'cors';
import { createProxyMiddleware } from 'http-proxy-middleware';

const app = express();

// Abilita il middleware CORS
app.use(cors());

// Configura il proxy per inoltrare le richieste al server remoto
app.use('/web/auth/login', createProxyMiddleware({
  target: 'https://tjf-challenge.azurewebsites.net',
  changeOrigin: true,
}));

// Avvia il server locale sulla porta desiderata
const port = process.env.PORT || 5173;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
