require('dotenv').config();
const OpenAI = require('openai');

const openai = new OpenAI({
    apiKey: process.env.OPENROUTER_API_KEY,
    baseURL: 'https://openrouter.ai/api/v1',
});

/**
 * Generate a response using OpenRouter-compatible model
 * @param {string} prompt - The user prompt
 * @returns {Promise<string>} - AI-generated response
 */
async function generateLLMResponse(prompt) {
    try {
        console.log('📤 Prompt sent to LLM:', prompt);

        const response = await openai.chat.completions.create({
            model: 'mistralai/mistral-7b-instruct', // ✅ valid and works well
            messages: [{ role: 'user', content: prompt }],
        });


        console.log('✅ LLM response:', JSON.stringify(response, null, 2));

        return response.choices[0].message.content.trim();
    } catch (err) {
        console.error('❌ LLM API error:', err.response?.data || err.message || err);
        throw err;
    }
}
module.exports = { generateLLMResponse };
