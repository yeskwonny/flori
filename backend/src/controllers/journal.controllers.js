import User from "../models/user.model.js";
import Journal from "../models/journal.model.js";

// create a journal
export const createJournal = async (req, res) => {
  try {
    const userId = req.user._id;
    const { worry, root, prediction, reality, plantingDate } = req.body;

    if (!worry || !root || !prediction || !reality || !plantingDate) {
      return res.status(400).json({ error: "content are required" });
    }
    // xy position
    //!todo change xy depends on size
    const randomX = Math.floor(Math.random() * 500);
    const randomY = Math.floor(Math.random() * 500);
    const newJournal = new Journal({
      user: userId,
      worry,
      root,
      prediction,
      reality,
      plantingDate,
      x: randomX,
      y: randomY,
    });

    await newJournal.save();
    // seding response
    res.status(201).json({
      status: 201,
      message: "Journal created successfully",
      journal: newJournal,
    });
  } catch (error) {
    console.log("Error in creating journal controller", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};
// get all journals by userId
export const getJournalsByUserId = async (req, res) => {
  try {
    const userId = req.user._id;
    const journals = await Journal.find({
      user: userId,
    });
    if (!journals.length) {
      res.status(400).json({ message: `No journal with user id: ${userId}` });
    }
    res.status(200).json({
      status: 200,
      message: "get journals by user id",
      journals: journals,
    });
  } catch (error) {
    console.log(
      "Error in getting journals by user id controller",
      error.message
    );
    res.status(500).json({ message: "Internal server error" });
  }
};

// get a journal by journal id
export const getJournalByJournalId = async (req, res) => {
  try {
    const journalId = req.params.id;

    const singleJournal = await Journal.findOne({
      _id: journalId,
    });

    if (!singleJournal) {
      return res
        .status(400)
        .json({ message: `No journal with journalId:${journalId}` });
    }
    res.status(200).json({
      status: 200,
      message: "get a journal by journal id",
      singleJournal: singleJournal,
    });
  } catch (error) {
    console.log(
      "Error in getting journal by journal id controller",
      error.message
    );
    res.status(500).json({ message: "Internal server error" });
  }
};
// update a journal
export const updateJournal = async (req, res) => {
  try {
    const journalId = req.params.id;
    console.log(journalId);
    const { content, status } = req.body;

    const updatedJournal = await Journal.findByIdAndUpdate(
      journalId,
      { content, status },
      { new: true, runValidators: true }
    );

    console.log(updatedJournal);

    if (!updatedJournal) {
      return res.status(404).json({ message: "Journal not found" });
    }

    res.status(200).json({
      stats: 200,
      message: "Journal updated successfully",
      updatedJournal,
    });
  } catch (error) {
    console.log("Error updating journal:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

// delete a journal
export const deleteJourbalbyJournalId = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedJournal = await Journal.findByIdAndDelete(id);

    if (!deletedJournal) {
      return res
        .status(400)
        .json({ message: `No journal with journalId:${id}` });
    }
    console.log(deletedJournal);
    res.status(204).json({
      status: 204,
      message: "deleted a journal by journal id",
    });
  } catch (error) {
    console.log("Error in delete journal controller", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};
