//const MongoClient=require('mongodb').MongoClient;

//Both above and the below line does the same thing. The below method is object destructuring
const {MongoClient,ObjectID}=require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
  if(err){
    console.log('Unable to connect to MongoDB server');
  }
  else{
    console.log('Connected to MongoDB server');
  }
  const db=client.db('TodoApp')
  // db.collection('Todos').findOneAndDelete({
  //   completed:false
  // }).then((result)=>{
  //   console.log(result);
  // });
  db.collection('Users').findOneAndDelete({
    _id:123
  }).then((result)=>{
    console.log(result);
  });
  // db.collection('Users').deleteMany({
  //   name:'Kunal'
  // }).then((result)=>{
  //   console.log(result);
  // });
  //client.close();
 });
