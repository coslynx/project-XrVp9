const express = require('express');
const mongoose = require('mongoose');
const carsRoutes = require('./routes/carsRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost:27017/fivem-cars', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB', err);
  });

app.use(express.json());

app.use('/api/cars', carsRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});