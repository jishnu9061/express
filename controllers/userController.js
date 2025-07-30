import User from "../models/User.js";

export const createUser = async (req, res) => {
    const { name, email, address } = req.body;
    if (!name || !email || !address) {
        return res.status(400).json({ message: "Name, email, and address are required." });
    }
  try {
    const user = new User({ name, email, address });
    await user.save();
    res.status(200).json(user);
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred while fetching users." });
  }
};
