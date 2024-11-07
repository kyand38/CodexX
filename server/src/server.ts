const forceDatabaseRefresh = false;
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import routes from './routes/index.js';
import  sequelize  from './config/connection.js';
import gameRoutes from './routes/games_routes.js'
import libraryEntryRoutes from './routes/libEntry_routes.js'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

// Serves static files in the entire client's dist folder
app.use(express.static('../client/dist'));

app.use(express.json());
app.use('/api', routes);
app.use('/api', gameRoutes);
app.use('/api', libraryEntryRoutes);

app.get('*', (__req, res) => {
res.sendFile(path.join(__dirname, '../../client/dist/index.html'));
});

sequelize.sync({force: forceDatabaseRefresh}).then(() => {
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
});