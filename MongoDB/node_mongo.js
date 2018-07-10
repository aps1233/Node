var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");

/*   dbo.createCollection("customers", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  }); */  /* [shift alt a]*/ 
  
  /* at last using http create server */ 

  var myobj = { name: "Company Inc", address: "Highway 37", salary:"123456" };
  
  //dbo.collection("customers").insertOne(myobj, function(err, res) { // insert code
  //dbo.collection("customers").find({}).toArray(function(err, result) { // find all record
  //dbo.collection("customers").findOne({}, function(err, result) { // find first occurence record
      //var query = { _id: "Company Inc", salary:'123456' }; // for var query = { address: /^S/ }; // where the address starts with the letter "S"
      //dbo.collection("customers").find(query).toArray(function(err, result) { // for query string
  
      //var mysort = { _id: -1 };
      //dbo.collection("customers").find().sort(mysort).toArray(function(err, result) {     // for sorting
      
  //var myquery = { salary: '123456' }; // 
  //dbo.collection("customers").deleteOne(myquery, function(err, obj) {    // delete one record // deleteMany() for multiple recored delete 
  
  //dbo.collection("customers").drop(function(err, delOK) { // drop collection
  //You can also use the dropCollection() method to delete a table (collection).
  // like dbo.dropCollection("customers", function(err, delOK) {


  if (err) throw err;
    console.log(delOK);
    db.close();
  });

});