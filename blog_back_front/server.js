import express from 'express'
import router from "./routes/router.js";
import mongoose from 'mongoose';
import User_schema from "./dao/schemas/user_schema.js";

const app = express()
const port = process.env.app_port || 3000

app.use(router);
app.listen(port, () => console.log(`Server started at port ${port}`))

const url = 'mongodb://root:password@localhost:27017/';
mongoose
    .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
        // User_schema.find({}, function(err, result) {
        //     if (err) throw err;
        //
        //     console.log(result);
        //     mongoose.connection.close();
        // });
    })
    .catch(err => console.error(err));