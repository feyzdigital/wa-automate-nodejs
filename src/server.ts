import express from 'express';
import { create } from './controllers/initializer';

const app = express();
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('✅ WhatsApp bot is up and running!');
});

// initialize WhatsApp session (bu fonksiyon zaten projede mevcut)
create();

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
