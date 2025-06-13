const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const BlogPost = new Schema({
  name: String,
  city: String,
  age : String
});

const MyUser = mongoose.model('User', UserSchema);
module.exports = MyUser;