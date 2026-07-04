import express from "express"
import { createNote, deleteNote, getAllNotes, getNote, updateNote } from "../controller/notesController.js";

const router = express.Router();

// Do not add /api/notes anymore bcus already defined in server.js

// Can use router.get("/", (req, res)) => but not best practice

router.get("/", getAllNotes);

router.get("/:id", getNote);

router.post("/", createNote);

// http://localhost/api/notes/[id]
router.put("/:id", updateNote);

router.delete("/:id", deleteNote);

export default router;