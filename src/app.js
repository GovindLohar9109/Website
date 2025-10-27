import express from 'express';
import dotenv from "dotenv";
const PORT=process.env.PORT || 8000;
const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'Hello from CI/CD test app!' });
});


app.listen(PORT,()=>{
  console.log("Server is running on PORT ",PORT);
})

export default app;

