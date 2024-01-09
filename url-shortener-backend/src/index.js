const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 4200;


//middlewares
app.use(cors());
app.use(express.json());

//Routes
const authRoutes = require('./routes/authRouter');
const linkRoutes = require('./routes/linkRouter');

app.use('/auth', authRoutes);
app.use('/links', linkRoutes);

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});


