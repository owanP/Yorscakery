const express = require('express');
const path = require('path');
const mysql = require('mysql');
const app = express();

// Database connection setup
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',     
  password: '', 
  database: 'db_yors',
});

// Connect to database  
db.connect(err => {
  if (err) {
    console.error('Database connection error:', err);
    process.exit(1); 
  }
  console.log('Connected to MySQL database');
});

// Middleware
app.use(express.static(path.join(__dirname, 'public')));

// API Routes
app.get('/api/products', (req, res) => {
  let sql = 'SELECT * FROM product';
  const params = [];
  const conditions = [];

  if (req.query.category) {
    conditions.push('Category = ?'); 
    params.push(req.query.category);
  }

  if (req.query.search) {
    conditions.push('name LIKE ?');
    params.push(`%${req.query.search}%`);
  }

  if (conditions.length > 0) {
    sql += ' WHERE ' + conditions.join(' AND ');
  }

  db.query(sql, params, (err, results) => {
    if (err) {
      console.error('MySQL Error:', err);
      return res.status(500).json({ error: 'Database error' });
    }
    res.json(results);
  });
});


// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

