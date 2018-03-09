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
  // db.collection('Todos').find({
  //   _id: new ObjectID('5aa2c542b741cb3dcbab2d98')
  // }).toArray().then((docs)=>{
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs,undefined,2));
  // },(err)=>{
  //   console.log('Unable to fetch todos',err);
  // });

  // db.collection('Todos').find().count().then((count)=>{
  //   console.log('Todos count: '+count);
  // },(err)=>{
  //   console.log('Unable to fetch todos',err);
  // });


  db.collection('Users').find({
    name: 'Nukku'
  }).toArray().then((docs)=>{
    console.log('Todos in Users');
    console.log(JSON.stringify(docs,undefined,2));
  },(err)=>{
    console.log('Unable to fetch todos',err);
  });
  //client.close();
 });
