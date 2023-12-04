const mongoose = require("mongoose");
const plm = require("passport-local-mongoose");

mongoose.connect(
  "mongodb+srv://cloudbased:RW7OQUTnhYrnpGG6@cluster0.tvf5uah.mongodb.net/practiceEJS?retryWrites=true&w=majority"
);

const userSchema = mongoose.Schema({
  username: String,
  password: String,
  Secret: String,
});

userSchema.plugin(plm);
module.exports = mongoose.model("ejsuser", userSchema);
