var http = require('http');
var dt = require('./myfirstmodule');
var url = require('url');
var fs = require('fs');
var uc = require('upper-case');

var val = 8;
if(val == 1) {
http.createServer(function(req,res){
    res.writeHead(200,{'content-type':'text/html'});

    var q = url.parse(req.url, true).query;
    var txt = q.year + " " + q.month; //http://localhost:8777/?month=12&year=2018
    res.write(txt+'\n');
    
    res.write(req.url+"\n");

    fs.readFile('./abc.txt',function(err,data){

        res.write('\n\n\n\n\n'+data);
        res.end(dt.myfun());       
    });
    

    
}).listen(8777);
}

else if(val == 2){
    http.createServer(function(req,res){
    fs.appendFile('./abc.txt',"Hello append file ",function(err){
        if (err) throw err;
        res.write('<link rel="icon" href="data:,">'); // for fake call by browser (twice write)
        res.write('Data Saved..');
        res.end();
        return;
    });
    }).listen(8778);
}

else if(val == 3){
    http.createServer(function(req,res){
        fs.open('./abc2.txt','w',function(err,file){ // create new empty file
            if(err) throw err;
            res.write("created..");
            res.end();
        }) 

        
    }).listen(8778);

    //Create Files
    //The File System module has methods for creating new files:

    //fs.appendFile() - appends specified content
    //fs.open() - if the flag is "w" for "writing", the specified file is opened for writing
    //fs.writeFile()

    //The fs.writeFile() method replaces the specified file and content 
    //if it exists. If the file does not exist, a new file, containing the specified content, will be created:
        



        //Update Files
        //The File System module has methods for updating files:
        //fs.appendFile() - appends specified content (same as above)
        //fs.writeFile() - Replace the content of the file "mynewfile3.txt": same as above

        //The fs.unlink() method deletes the specified file:
        //The fs.rename() method renames the specified file:fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function (err) {


}
else if(val == 4){ // for URL module
    http.createServer(function(req,res){
        res.writeHead(200,{'content-type':'text/html'});
        var q = url.parse(req.url, true); // req.url is not full url (not http localhost:8080)
        
    

        res.write(q.pathname);
        res.write(q.search);
        res.write(q.query.month);
        res.end();
    }).listen(8773);
}

else if(val == 5){ // for URL module
    http.createServer(function(req,res){
        
        fs.readFile('./abc.html',function(err,data){
            if(err){
                res.writeHead(400,{'content-type':'text/html'});
                res.end("Not found");
            }
            else{
                res.writeHead(200,{'content-type':'text/html'});
                res.end(data);  
            }
        })


}).listen(9000);
}

else if(val == 6){ // for URL module
    http.createServer(function(req,res){
       // NPM is a package manager for Node.js packages
       // A package in Node.js contains all the files you need for a module.
       res.writeHead(200, {'Content-Type': 'text/html'});
       res.write(uc("Hello World!"));
       res.end();

}).listen(9000);
}

else if(val == 7){ // for URL module
    var data = '';
    http.createServer(function(req,res){
       var rs = fs.createReadStream('./abc.html');
       res.writeHead(200, {'Content-Type': 'text/html'});
       rs.on('data',function(chunk){
        data += chunk;
       });
       rs.on('end',function(){
        res.end(data);
        data="";
     });

}).listen(9000);
}

//Every action on a computer is an event. Like when a connection is made or a file is opened.
//Events Module : Node.js has a built-in module, called "Events", 
//where you can create-, fire-, and listen for- your own events.

//To include the built-in Events module use the require() method

else if(val == 8) { 
http.createServer(function(req,res){
    var events = require('events');
    var eventEmitter = new events.EventEmitter();
    
    //Create an event handler:
    var myEventHandler = function () {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write("Hello World1!");
        res.end();
    }
    
    //Assign the eventhandler to an event:
    eventEmitter.on('scream', myEventHandler);
    
    //Fire the 'scream' event:
    eventEmitter.emit('scream');
}).listen(1111);
}
