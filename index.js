import express from 'express'; // Express.js for API handling
import mysql from 'mysql2/promise'; // MySQL2 for promise-based connections
import dotenv from 'dotenv'; // dotenv for loading environment variables

dotenv.config(); // Load environment variables from .env file

// Initialize Express app
const app = express();

// Create a MySQL connection pool with additional settings
const pool = mysql.createPool({
  host: process.env.DB_HOST,       // Your MySQL host
  user: process.env.DB_USER,       // Your MySQL username
  password: process.env.DB_PASSWORD, // Your MySQL password
  database: process.env.DB_NAME,   // Your MySQL database name
  port: process.env.DB_PORT || 3306, // Port (default 3306 for MySQL)
  waitForConnections: true,
  connectionLimit: 10,            // Number of simultaneous connections allowed
  queueLimit: 0,                  // No limit on the queue
  acquireTimeout: 30000,          // Timeout for acquiring a connection (30 seconds)
});

// Ping the MySQL server to keep the connection alive
setInterval(async () => {
  try {
    const connection = await pool.getConnection(); // Get connection from pool
    await connection.ping(); // Ping the server to check if the connection is alive
    console.log('Connection is alive');
    connection.release(); // Release the connection back to the pool
  } catch (err) {
    console.error('Error keeping the connection alive:', err);
  }
}, 10000); // Ping every 10 seconds

// API route to fetch grades from the database
app.get('/grades', async (req, res) => {
  let connection;
  try {
    connection = await pool.getConnection(); // Get a connection from the pool
    const [grades] = await connection.query('SELECT * FROM grades'); // Query the database
    res.json(grades); // Send the results as JSON
  } catch (error) {
    console.error('Database query error:', error); // Log any errors
    res.status(500).send('Database error'); // Send error response
  } finally {
    if (connection) {
      connection.release(); // Ensure the connection is released back to the pool
    }
  }
});

// API route to insert a grade (for testing insert functionality)
app.post('/grades', express.json(), async (req, res) => {
  const { student_id, grade } = req.body; // Assume body contains student_id and grade

  let connection;
  try {
    connection = await pool.getConnection(); // Get a connection from the pool
    const [result] = await connection.query(
      'INSERT INTO grades (student_id, grade) VALUES (?, ?)', 
      [student_id, grade] // Insert data into grades table
    );
    res.status(201).send({ message: 'Grade inserted successfully', result });
  } catch (error) {
    console.error('Database insert error:', error); // Log any errors
    res.status(500).send('Database error');
  } finally {
    if (connection) {
      connection.release(); // Ensure the connection is released back to the pool
    }
  }
});

// Start the Express server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});



