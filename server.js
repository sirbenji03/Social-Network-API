// Require express and mongoose
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.use(require('./routes'));

// Connect mongoose
mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://sirbenji:ABC123@cluster0.w1oob.mongodb.net/socialNetworkDB?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Log mongoose queries
mongoose.set('debug', true);

app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));