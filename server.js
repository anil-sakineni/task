require('dotenv').config();
const express = require('express');
const connectDB = require('./src/config/db');
const errorHandler = require('./src/middlewares/error');
const taskRoute = require('./src/routes/task.routes');
const corsMiddleware = require('cors');
const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(corsMiddleware());
app.use(express.json());
app.use('/api/tasks', taskRoute);
app.use(errorHandler);

connectDB();

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});