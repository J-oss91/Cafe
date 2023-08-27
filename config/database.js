const mongoose = require('mongoose');


let connectionString = process.env.MONGO_URI
//by default mongoose has a strictQuery that is set to true (meaning we cant ask for info that is not in our schema)
//https://mongoosejs.com/docs/migrating_to_6.html#strictquery-is-removed-and-replaced-by-strict
mongoose.set('strictQuery',false);

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});


//ANOTHER WAY TO GET THE USER NAME AND PASSWORD TO BE DIFFERENT 
// mongoose.connect(
// `mongodb+srv://${process.env.MONGOOSEUSERNAME}:${process.env.MONGOOSEPASSWORD}//THIS CHANGES@cluster0-erizp.mongodb.net/database?retryWrites=true&w=majority`
// , {
//   useNewUrlParser: true,
//   useCreateIndex: true,
//   useUnifiedTopology: true
// });