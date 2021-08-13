const express = require('express');
const connectDB = require('./Config/db');

const app = express();

//⏩ connect Database
connectDB();

//⏩ Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API Running'));

//⏩  define routes
app.use('/api/users', require('./routes/Api/users'));
app.use('/api/auth', require('./routes/Api/auth'));
app.use('/api/profile', require('./routes/Api/profile'));
app.use('/api/posts', require('./routes/Api/posts'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
