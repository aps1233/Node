var http = require('http');
var MongoClient = require('mongodb').MongoClient;
var dbUrl = "mongodb://127.0.0.1:27017";



http.createServer(function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.writeHead(200, {'Content-Type': 'text/html'});
    
    

    //res.write('<link rel="icon" href="data:,">');  
    res.write("Ha Ha1");
    
       
                    /* if((req.method=='POST')&&(req.url=='/submit_newsletter')) {  
                    var body='';           
                    req.on('data', function (data) {
                        body +=data; // read data in chunks
                       // console.log(data);
                        //res.write(body);

                    });
                    req.on('end',function(){
                        //var POST =  qs.parse(body);
                        
                        console.log(body); // s=zzzzzzzzzzzzz
                    }); */
                    
                                /*MongoClient.connect(dbUrl, function(err, db) {
                                    if (err) throw err;
                                    var dbo = db.db("rate");
                                                var newsletter_obj = { name: "Company Inc", address: "Highway 37" };
                                                dbo.collection("newsletter").insertOne(newsletter_obj, function(err, res) {
                                                    if (err) throw err;
                                                    console.log("1 document inserted");
                                                    db.close();
                                                });
                                });*/ 
                  /*  } */
    //console.log(body);              
    res.end(); 
}).listen(8080);
