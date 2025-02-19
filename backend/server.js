const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());

// Stub data
let exams = [
  {
    student: { first_name: "Isabella", last_name: "S" },
    meeting_point: "En attente",
    date: "En attente",
    status: "Recherche de place",
  },
  {
    student: { first_name: "Franziska", last_name: "S" },
    meeting_point: "Martigues-B",
    date: "2024-06-16T14:00:00",
    status: "Confirmé",
  },
  {
    student: { first_name: "Lucas", last_name: "R" },
    meeting_point: "Martigues-B",
    date: "2024-06-21T17:00:00",
    status: "A organiser",
  },
  {
    student: { first_name: "Léo", last_name: "C" },
    meeting_point: "Martigues-B",
    date: "2024-05-26T13:00:00",
    status: "Annulé",
  },
];

app.get("/api/exams", (req, res) => {
  res.json(exams);
});

app.post("/api/exams", (req, res) => {
  const newExam = req.body;
  exams.push(newExam);
  res.status(201).json(newExam);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
