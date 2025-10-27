import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'Hello from CI/CD test app!' });
});

export default app;

// Start server only when not in test mode
if (process.env.NODE_ENV !== 'test') {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
}
