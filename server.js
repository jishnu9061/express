const app = require('./app');
const connectDB = require('./config/db');

const PORT = 3000;

// Connect to DB and then start server
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running at http://localhost:${PORT}.....`);
    });
});
