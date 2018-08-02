// make connection to server or web socket
var socket = io.connect('http://10.25.100.131:4000/');// this socket is running on the front end .

var message = document.getElementById('message');
var na_me = document.getElementById('name');
var btn = document.getElementById('send');
var output = document.getElementById('output');
var feedback = document.getElementById('feedback');

// Event Emitt

btn.addEventListener('click', function(){
    socket.emit('chat1',{
    message:message.value,
    name:na_me.value    
    });
});

message.addEventListener('keypress',function(){
    socket.emit('typing',na_me.value);
})



// listen for the event

socket.on('chat1', function(data){
//alert(data.name);
    output.innerHTML += '<p><strong style="color: #3c1eac;">'+data.name+': </strong>'+data.message+'</p>';
    document.getElementById('message').value="";
    feedback.innerHTML = '';
    output.scrollTop = output.scrollHeight - output.clientHeight;
});

socket.on('typing',function(data){
    //feedback.innerHTML = '';
    feedback.innerHTML = '<p><em><strong>'  +data+  '</strong> is typing a message...</em></p>';
})
    
