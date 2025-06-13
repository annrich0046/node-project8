import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: String,
  city: String,
  age : String
});

const MyUser = mongoose.model('User', UserSchema);
export default MyUser;