const mongoose = require('mongoose');
mongoose.Promise=global.Promise;
//mongoose.connect('mongodb://localhost:27017/TodoApp');
var connectPath, options;
//Check if we are on Heroku
if(process.env.PORT){
 connectPath = "mongodb://<dbuser>:<dbpassword>@ds047712.mlab.com:47712/todos";
 options= {
     auth: {
         user: 'kunal12',
         password: 'apple1234'
     }
 }
}else{
 connectPath = "mongodb://localhost:27017/TodoApp";
 options = {}
}
mongoose.connect(connectPath, options);
module.exports={
  mongoose
};
