const express = require("express");
const app = express();
const cors=require("cors")
const bodyParser=require("body-parser");
const cookieParser=require("cookie-parser")
require('dotenv').config();
const port =process.env.PORT;

app.use(cookieParser())
app.use(bodyParser.json())
app.use(cors({
    origin: ['http://localhost:3000'],
    credentials: true
}))
app.use('/api', require("./routes/authRoutes"))
app.get('/', (req,res)=> res.send("Hello World"));
app.listen(port, ()=> console.log(`App listening on port ${port}!`));