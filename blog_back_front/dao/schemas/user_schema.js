import mongoose from "mongoose";

const user_schema = new mongoose.Schema({
    userId:
        {type: String, required: false},
    username:
        {type: String, required: true},
    email:
        {type: String, required: true, unique: true},
    password:
        {type: String, required: true},
    avatarUrl:
        {type: String, required: false}
});
export default mongoose.model('user', user_schema);