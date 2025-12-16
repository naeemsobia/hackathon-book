const express = require('express');
const cors = require('cors');
const { loadChapters, searchChapters } = require('./chapterProcessor');
const app = express();
const port = 3002;

app.use(cors());
app.use(express.json());

app.post('/chat', (req, res) => {
  const userMessage = req.body.message;
  console.log('Received message:', userMessage);

  if (userMessage.toLowerCase().startsWith('search for:')) {
    const query = userMessage.substring('search for:'.length).trim();
    const results = searchChapters(query);
    if (results.length > 0) {
      const chapterDetails = results.map(chapter => {
        const chapterNum = chapter.chapterNumber ? `Chapter ${parseInt(chapter.chapterNumber)}: ` : '';
        return `- ${chapterNum}${chapter.title}`;
      }).join('\n');
      res.json({ reply: `I found these chapters related to "${query}":\n${chapterDetails}` });
    } else {
      res.json({ reply: `Sorry, I couldn't find any chapters related to "${query}".` });
    }
  } else {
    res.json({ reply: `You said: "${userMessage}". I am a simple chatbot. If you want to search for chapters, type "search for: [your query]".` });
  }
});

loadChapters().then(() => {
    app.listen(port, () => {
      console.log(`Chatbot backend listening at http://localhost:${port}`);
    });
});
