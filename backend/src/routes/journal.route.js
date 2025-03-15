import express from "express";
import {
  getJournalsByUserId,
  createJournal,
  getJournalByJournalId,
  deleteJourbalbyJournalId,
  updateJournal,
} from "../controllers/journal.controllers.js";
import protectRoute from "../../middleware/protectRoute.js";
const router = express.Router();
//endpoint
// only authenticated user can get journal
// should be the same user

router.get("/", protectRoute, getJournalsByUserId);
router.get("/:id", protectRoute, getJournalByJournalId);
router.post("/", protectRoute, createJournal);
router.delete("/:id", protectRoute, deleteJourbalbyJournalId);
router.put("/:id", protectRoute, updateJournal);
export default router;
