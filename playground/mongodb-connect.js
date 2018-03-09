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
  db.collection('Todos').insertOne({
    text:'Something to do',
    completed:false
  },(err,result)=>{
    if(err){
      return console.log('Unable to insert todo',err);
    }
    console.log(JSON.stringify(result.ops,undefined,2));
  });
  db.collection('Users').insertOne({
    name:'Kunal',
    age:21,
    location:'Lucknow'
  },(err,result)=>{
    if(err){
      return console.log('Unable to insert todo',err);
    }
    console.log(JSON.stringify(result.ops[0]._id.getTimestamp(),undefined,2));
  });
  client.close();
 });
