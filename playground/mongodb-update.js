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
  // db.collection('Todos').findOneAndUpdate({
  //   _id:new ObjectID('5aa2e233b741cb3dcbab3850')
  // },{
  //   $set:{
  //     completed:true
  //   }
  // },{
  //   returnOriginal:false
  // }).then((result)=>{
  //   console.log(result);
  // });
  db.collection('Users').findOneAndUpdate({
    _id:new ObjectID('5aa2c9d3a147441e6495e10f')
  },{
    $set:{
      name:'Andrew'
    },
    $inc:{
      age:4
    }
  },{
    returnOriginal:false
  }).then((result)=>{
    console.log(result);
  });
  //client.close();
 });
