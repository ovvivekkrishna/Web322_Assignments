const express = require('express');
const app = express();
const PORT = 3000;

// Route for homepage
app.get('/', (req, res) => {
    res.send('vivek krishna ombalamurikkal vinod - 129478236')
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
