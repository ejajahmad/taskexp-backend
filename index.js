import dotenv from 'dotenv';
import express from 'express';
import userRoutes from './models/user/user.route.js';

dotenv.config(); // Load environment variables

const app = express();

// Middleware for parsing JSON bodies
app.use(express.json());

// Routes
app.use('/api/auth', userRoutes); // Public routes for user signup/signin
// app.use('/api/blogs', authenticateToken, blogRoutes); // Authenticated routes for blogs

// Root route
app.get('/', (req, res) => {
    res.send('Welcome to the Node.js Express API');
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
