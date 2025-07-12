const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Optional: enable CORS (just in case)
const cors = require('cors');
app.use(cors());

// Root endpoint for health check
app.get('/', (req, res) => {
  res.send('🟢 Token server is live. Use /fake-token to retrieve a static access token.');
});

// /fake-token endpoint used by Adobe Journey Optimizer
app.get('/fake-token', (req, res) => {
  res.json({
    access_token: "Bearer eyJhbGciOiJSUzI1NiIsIng1d...<YOUR_FULL_TOKEN>...D9Pg"
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`✅ Token API server is running at http://localhost:${PORT}`);
});
