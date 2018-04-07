const mongoose = require('mongoose');
mongoose.Promise=global.Promise;
//mongoose.connect('mongodb://localhost:27017/TodoApp');
var connectPath, options;
//Check if we are on Heroku
if(process.env.PORT){
 connectPath = process.env.MONGODB_URI;
 // options= {
 //     auth: {
 //         user: 'kunal12',
 //         password: 'apple1234'
 //     }
 // }
}
mongoose.connect(connectPath, options);
module.exports={
  mongoose
};
