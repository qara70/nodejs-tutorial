import express from "express";
import cors from "cors";
import sequelize from "./sequelize.js";
import Todo from "./todo.js";

const app = express();
app.use(cors({ origin: 'null' }));
app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).send("Hello World!");
    }
);

app.get("/api", async (req, res) => {
    const todos = await Todo.findAll();
    res.status(200).json({ todos });
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

app.post("/api/create", async (req, res) => {
    console.log('/api/create', req.body);
    await Todo.create({
        title: req.body.title,
        description: req.body.description,
        status: req.body.status ?? false
    });
    const todos = await Todo.findAll();

    res.status(200).json({ todos });
    }
);

app.delete('/api/delete/:id', async (req, res) => {
    const todo = await Todo.findByPk(req.params.id);
    await todo.destroy();
    const todos = await Todo.findAll();
    res.status(200).json({ todos });
    }
);

sequelize.sync().then(() => {
    console.log("Database & tables created!");
    app.listen(3000, () =>
        console.log("Server listening on port 3000")
    );
    }
).catch((err) => {
    console.error('Unable to connect to the database:', err);
    }
);