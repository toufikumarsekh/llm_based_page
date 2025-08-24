const express = require('express');
const path = require('path');
const { generateLLMResponse } = require('./llm'); // Import your LLM function
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// View engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve main page
app.get('/', (req, res) => {
  res.render('llm_based_page');
});

// Route 1: Generate heading
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

// Route 2: Generate summary
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

// Route 3: Generate photo caption
app.post('/generate-caption', async (req, res) => {
  try {
    const { prompt } = req.body;
    const caption = await generateLLMResponse(prompt);
    res.json({ caption });
  } catch (err) {
    console.error('❌ Error generating caption:', err.message);
    res.status(500).json({ caption: null });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server is running at http://localhost:${PORT}`);
});
