import Express from "express";

const app = Express();
const PORT = process.env.PORT || 8000;

app.get("/", (_req, res) => {
    res.status(200).json({ message: "Hello World" });
});

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
