const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Le serveur fonctionne correctement !');
});


// Middleware pour parser le JSON
app.use(express.json());

// Endpoint GET simple
app.get('/', (req, res) => {
  res.send('Le serveur fonctionne correctement !');
});

// Endpoint POST (exemple : "/register")
app.post('/register', (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ error: 'Tous les champs sont obligatoires.' });
  }
  res.status(200).json({ success: true, message: 'Utilisateur enregistré avec succès !' });
});

// Lancer le serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});


const jwt = require('jsonwebtoken');
const SECRET_KEY = 'secret_key_example'; // Utilise une clé secrète plus sécurisée dans un fichier .env

// Endpoint pour obtenir le token
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Vérifie les identifiants (exemple simple, à adapter avec une vraie base de données)
  if (email === 'user@example.com' && password === 'mypassword123') {
    // Crée un token (expirant dans 1 heure)
    const token = jwt.sign({ email }, SECRET_KEY, { expiresIn: '1h' });
    return res.status(200).json({ token });
  }

  // Erreur si les identifiants sont incorrects
  res.status(401).json({ error: 'Email ou mot de passe incorrect.' });
});

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));
