import Task from '../models/Task.js';

export const createTask = async (req, res) => {
    const { title, description, completed } = req.body;

    if (!title || !description) {
        return res.status(400).json({ message: "Title and description are required." });
    }

    try {
        const newTask = new Task({ title, description, completed: completed || false });
        await newTask.save();
        res.status(201).json(newTask);
    } catch (error) {
        console.error('Error creating task:', error);
        res.status(500).json({ message: "An error occurred while creating the task." });
    }
};
