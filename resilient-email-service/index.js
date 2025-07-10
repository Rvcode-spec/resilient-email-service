const express = require("express");
const app = express();
const EmailService = require("./services/EmailService");
const queue = require("./utils/queue");

app.use(express.json());

app.post("/send-email", async (req, res) => {
  const result = await EmailService.send(req.body);
  queue.addJob(req.body);
  res.json(result);
});

app.get("/:id", (req, res) => {
  const status = EmailService.getStatus(req.params.id);
  res.json({ id: req.params.id, status });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server on http://localhost:${PORT}`));
