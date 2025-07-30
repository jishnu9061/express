const mongoose = require('mongoose');

const connectDb = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/students', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Database connection is Ready");
    } catch (error) {
        console.error("A error has been occurred while connecting to database.");
    }
};

module.exports = connectDb;