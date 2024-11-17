import express from 'express';
import { OpenAI } from 'openai';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';  // Import dotenv

dotenv.config();  // Load environment variables from .env file

const app = express();
const PORT = 5001;

app.use(bodyParser.json());
app.use(cors());

// Use the OpenAI API key from environment variables
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,  // Get the API key from the environment variable
});

// Test Endpoint
app.get('/api/test', (req, res) => {
  res.json({ message: 'API is working!' });
});

// Handle user questions
app.post('/chatbot/question', async (req, res) => {
  const { message } = req.body;

  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-4', // Use GPT-4 or GPT-3.5-turbo
      messages: [{ role: 'user', content: message }],
    });

    res.json({ answer: response.choices[0].message.content });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to get response from AI' });
  }
});

// Endpoint for uploaded notes explanation
app.post('/chatbot/upload-notes', async (req, res) => {
  const { notesContent } = req.body;

  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-4', // Or 'gpt-3.5-turbo'
      messages: [
        { role: 'system', content: 'You are an expert tutor.' },
        { role: 'user', content: `Please explain the following notes: ${notesContent}` },
      ],
    });

    res.json({ explanation: response.choices[0].message.content });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to process notes' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
