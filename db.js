const mongoose = require('mongoose');
const Admin = mongoose.mongo.Admin;

// connect to mongo db
mongoose.connect(process.env.CONNECTION_URL, { 
  keepAlive: 1,
  useCreateIndex: true,
  useNewUrlParser: true, 
  useUnifiedTopology: true
});

mongoose.connection.on('open', function (ref) {
    console.log('Connected to mongo server.');
    //trying to get collection names
    mongoose.connection.db.listCollections().toArray((req, res) => {
        if(req) {
            console.log("error",req)
        } else {
            console.log(res);
        }
    })
});

mongoose.connection.on('error', () => {
  throw new Error(`unable to connect to database: ${CONNECTION_URL}`);
});
