const forceDatabaseRefresh = false;
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import routes from './routes/index.js';
import sequelize  from './config/connection.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

// Serves static files in the entire client's dist folder
app.use(express.static('../client/dist'));

app.use(express.json());
app.use('/api', routes);

app.get('*', (__req, res) => {
res.sendFile(path.join(__dirname, '../../client/dist/index.html'));
});

sequelize.sync({force: forceDatabaseRefresh}).then(() => {
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
});
// import express from 'express';
// import path from 'path';
// import { fileURLToPath } from 'url';
// import dotenv from 'dotenv';
// import routes from './routes/index.js';
// import sequelize from './config/connection.js';

// dotenv.config();

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// const app = express();
// const PORT = process.env.PORT || 3001;

// // Middleware and static files
// app.use(express.static('../client/dist'));
// app.use(express.json());

// // Register all routes under /api
// app.use('/api', routes);

// // Catch-all to serve the client’s index.html for any non-API routes
// app.get('*', (_req, res) => {
//   res.sendFile(path.join(__dirname, '../../client/dist/index.html'));
// });

// // Sync the database and start the server
// sequelize.sync({ force: false }).then(() => {
//   app.listen(PORT, () => {
//     console.log(`Server is listening on port ${PORT}`);
//   });
// });