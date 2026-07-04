import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv"; // Package to import variables
import rateLimiter from "./middleware/rateLimiter.js";
import { connect } from "mongoose";
import { setServers } from 'node:dns/promises';
import cors from "cors";

// Set public DNS servers
setServers(['1.1.1.1', '8.8.8.8']);

dotenv.config();

const app = express();

const port = process.env. PORT || 5001;

// Middleware
app.use(cors({
    origin: "http://localhost:5173"
}));
app.use(express.json()); // This will parse JSON bodies: req.body
app.use(rateLimiter);

// app.use((req, res, next) => {
//     console.log(`Req method is ${req.method} and Req URL is ${req.url}`);
//     next();
// }); // This is a simple middleware example

app.use("/api/notes", notesRoutes);

// Freely to add routes and controllers use the best practices
// app.use("/api/products", productssRoutes);

connectDB().then(() => {
    app.listen(port, () => {
        console.log("Server started on port: " + port);
    });
});

/*
// Made first API!
app.get("/api/notes", (req, res) => {
    //res.send("You got 5 notes");
    res.status(200).send("You got 5 notes");
});

app.post("/api/notes", (req, res) => {
    res.status(201).json({message:"Post created successfully"});
});

// http://localhost/api/notes/[id]
app.put("/api/notes/:id", (req, res) => {
    res.status(200).json({message:"Post updated successfully"});
});

app.delete("/api/notes/:id", (req, res) => {
    res.status(200).json({message:"Post deleted successfully"});
});
*/

// mongodb+srv://nuaimmandinie:<password_db>@cluster0.5mreh.mongodb.net/<db_name or leave (test)>?appName=Cluster0