const express = require('express')
const connectDB = require('./config/connectDB')
const app = express()

//middleware
app.use(express.json())



//connect db
connectDB()

// route
app.use('/api/example',require('./routes/contact'))


const port = process.env.PORT|| 5000
app.listen(port , err=> err?console.log("error"): console.log(`server is running on port ${port}`))