var env = process.env.NODE_ENV || 'development';
//console.log('env ****', env);
var db = {
  dev : 'mongodb://localhost:27017/TodoApp',
  test : 'mongodb://localhost:27017/TodoAppTest',
  mlab : 'mongodb://kunal12:apple1234@ds047712.mlab.com:47712/todos'
};
if(process.env.PORT){
  process.env.MONGODB_URI = db.mlab;
} else {
  process.env.PORT = 3000;
  if(env === 'development'){
    process.env.MONGODB_URI = db.dev;
  } else if (env === 'test'){
    process.env.MONGODB_URI = db.test;
  }
}
