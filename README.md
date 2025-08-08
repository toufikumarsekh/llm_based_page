# 📊 LLM-Based Event Report Generator — Sohojia Foundation

This project is a full-stack **AI-powered event reporting system** designed for the **Sohojia Foundation**. It allows users to input event details (like location, date, student activities, etc.), upload photos, and generate both creative **headings** and detailed **summaries** using a Large Language Model (LLM).

> 🔥 Built with Node.js, Express, EJS and OpenRouter LLM (e.g., Zephyr 7B).

---

## ✨ Features

- 🧠 **AI-Generated Headings** — Get a creative heading for any event.
- 📋 **Dynamic Sections** — Add multiple sections with photo, topic, student/school info, and description.
- 📝 **LLM Summary Generator** — Summarizes all sections into a single event report.
- 🎨 **Colorful UI** — Clean, responsive layout with Tailwind CSS and Bootstrap-inspired design.
- 📸 **Image Previews** — Instantly preview uploaded photos.
- ⚡ **Fully client-server integrated** — Seamless backend routes for prompt handling and response.

---


2. Install Dependencies
npm install

3. Set Environment Variables
Create a .env file in the root directory:

OPENROUTER_API_KEY=your_openrouter_api_key

    🔐 Get your API key from https://openrouter.ai/

4. Run the App
node app.js

Navigate to: http://localhost:3000
