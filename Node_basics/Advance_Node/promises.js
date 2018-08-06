//http://api.plos.org/search?q=title:%22Drosophila%22%20and%20body:%22RNA%22&fl=id,abstract&wt=json

var http = require('http');
var getRanking=function(url){
    var promise = new Promise(function(resolve,reject){
        var req = http.get(url,function(response){
            if(response.statusCode<200 || response.statusCode>299)
            {
                reject('Error Code-'+response.statusCode); // eRROR cODE 404, IF url IS WRONG // CALL OF CATCH //http://api.plos.org/dsearch?q=title:%22Drosophila%22%20and%20body:%22RNA%22&fl=id,abstract&wt=json
            }
            var result = "";
            response.on('data',function(chunk){result+=chunk;});
            response.on('end',function(){resolve(result);});
        });
    req.on('error',function(err){//console.error(err.message);
        reject("Req..."+err.message); // FOR WRONG url // http://docs.google
    });

    });
return promise;
}

getRanking('http://api.plos.org/search?q=title:%22Drosophila%22%20and%20body:%22RNA%22&fl=id,abstract&wt=json') // in case 
//of empty Url catch will call by default (as promise default property [wrong+right])
.then(function(data){
     console.log("Response before: "+data+data+data+data+data+data+data+data+data+data+data+data+data+data+data+data+data+data+data+data+data+data+data+data+data+data+data+data+data+data+data+data+data+data+data+data+data+data+data+data); 
    
    
    
    return getRanking('http://api.plos.org/search?q=title:%22Drosophila%22%20and%20body:%22RNA%22&fl=id,abstract&wt=json')
})
.then(function(data){
    console.log("Response after: "+data.substr(1, 100)); // dONE
    
})
.catch(function(err){
    console.log("ERROR:: "+err); // // eRROR cODE 404, IF url IS WRONG
});

