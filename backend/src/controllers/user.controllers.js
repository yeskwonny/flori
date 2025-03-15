import User from "../models/user.model.js";

export const getUserInfo = async (req, res) => {
  try {
    const userId = req.user._id;
    console.log(userId);
    const userInfo = await User.findOne({
      _id: userId,
    });

    if (!userInfo) {
      return res.status(400).json({ message: `No userinfo with Id:${userId}` });
    }
    res.status(200).json({
      status: 200,
      message: "get a journal by user id",
      userInfo: userInfo,
    });
  } catch (error) {
    console.log(
      "Error in getting userInfo by userId controller",
      error.message
    );
    res.status(500).json({ message: "Internal server error" });
  }
};

export const updateUserInfo = async (req, res) => {
  try {
    const userId = req.user._id;
    const { email } = req.body;

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { email },
      { new: true, runValidators: true, select: "-password" }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({
      stats: 200,
      message: "User profile updated successfully",
      user: updatedUser,
    });
  } catch (error) {
    console.log("Error updating user profile:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};
