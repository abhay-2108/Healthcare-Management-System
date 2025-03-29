require('dotenv').config();
const express = require('express');
const cors = require("cors");
const path = require('path');
const fs = require("node:fs");
const mime = require("mime-types");

const { GoogleGenerativeAI } = require('@google/generative-ai');
const apiKey = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: 'gemini-2.0-flash-thinking-exp-01-21',
});

const generationConfig = {
  temperature: 0.7,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 65536,
  responseMimeType: 'text/plain',
};

const app = require('./app');
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const chatSession = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        { text: "You are a conversational AI chatbot for healthcare management. Provide concise responses for doctor assistance, patient support, staff guidance, emergency response, medical management, financial queries, and user security." },
      ],
    },
    {
      role: "model",
      parts: [{ text: "Understood. Medico at your service. How may I assist you? (Specify role & need)." }],
    },
  ],
});

app.post('/chat', async (req, res) => {
  try {
      const { message } = req.body;
      if (!message) return res.status(400).json({ error: 'Message is required.' });

      const chatSession = model.startChat({
          generationConfig,
          history: [
              { role: "user", parts: [{ text: message }] }
          ],
      });

      const result = await chatSession.sendMessage(message);
      const responseText = result.response.text();
      res.json({ response: responseText });
  } catch (error) {
      console.error('Error processing message:', error);
      res.status(500).json({ error: 'Error processing message' });
  }
});


app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
