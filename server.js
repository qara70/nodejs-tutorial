import express from "express";
import sequelize from "./sequelize.js";
import Todo from "./todo.js";

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

app.post("/api/todo", async (req, res) => {
    const todo = await Todo.create({
        title: "Todo 1",
        description: "Todo 1 description",
        status: false
    });
    res.status(200).json({ todo });
    }
);

sequelize.sync({force: true}).then(() => {
    console.log("Database & tables created!");
    app.listen(3000, () =>
        console.log("Server listening on port 3000")
    );
    }
).catch((err) => {
    console.error('Unable to connect to the database:', err);
    }
);