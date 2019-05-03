import * as mongoose from 'mongoose';
import User from '../interfaces/user.interface';

const allergySchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    type: String
});

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    userName: String,
    password: String,
    email: String,
    phone: String,
    allergies: [allergySchema],
    diets: [String]
});

const userModel = mongoose.model<User & mongoose.Document>('User', userSchema);

export default userModel;