import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.status(200).send("Hello World!");
    }
);

app.get("/api", (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'null')
    res.status(200).json({ message: "Hello from server!" });
    }
);

app.listen(3000, () =>
    console.log("Server listening on port 3000")
);