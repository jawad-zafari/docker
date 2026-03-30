const express = require('express');
const mysql = require('mysql2');

const dbConfig = {
  host: process.env.DB_HOST || 'database',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'root',
  database: process.env.DB_NAME || 'projetdb'
};

let connection;

function connectToDatabase() {
  connection = mysql.createConnection(dbConfig);

  connection.connect((err) => {
    if (err) {
      console.error('Base de données non prête. Nouvelle tentative dans 5 secondes...');
      setTimeout(connectToDatabase, 5000);
    } else {
      console.log('Connecté à la base de données avec succès !');
    }
  });

  connection.on('error', (err) => {
    console.error('Erreur de base de données :', err.code);
    if (err.code === 'PROTOCOL_CONNECTION_LOST' || err.code === 'ECONNREFUSED') {
      console.log('Reconnexion à la base de données en cours...');
      setTimeout(connectToDatabase, 5000);
    } else {
      console.error('Erreur non gérée :', err);
    }
  });
}

connectToDatabase();

const app = express();

app.get('/', (req, res) => {
  res.send('Bienvenue sur l\'API du backend de votre projet Docker');
});

app.get('/api/status', (req, res) => {
  connection.query('SELECT NOW() AS currentTime', (err, results) => {
    if (err) {
      console.error('Erreur lors de la requête :', err);
      res.status(500).send('Database query failed');
    } else {
      res.json({ status: 'success', currentTime: results[0].currentTime });
    }
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});