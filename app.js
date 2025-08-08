// app.js
const express = require('express');
const path = require('path');
const { generateLLMResponse } = require('./llm'); // Import your LLM function
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json()); // to parse JSON requests
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public')); // for serving /style.css or images

// View engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve your main page
app.get('/', (req, res) => {
  res.render('llm_based_page'); // llm_based_page.ejs should be in /views
});

// Route 1: Handle heading generation
app.post('/generate-heading', async (req, res) => {
  try {
    const { prompt } = req.body;
    const heading = await generateLLMResponse(prompt);
    res.json({ heading });
  } catch (err) {
    console.error('❌ Error generating heading:', err.message);
    res.status(500).json({ heading: null });
  }
});

// Route 2: Handle summary generation
app.post('/generate-summary', async (req, res) => {
  try {
    const { prompt } = req.body;
    const summary = await generateLLMResponse(prompt);
    res.json({ summary });
  } catch (err) {
    console.error('❌ Error generating summary:', err.message);
    res.status(500).json({ summary: null });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server is running at http://localhost:${PORT}`);
});
