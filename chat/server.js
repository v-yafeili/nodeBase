/**
 * Created by v-yaf_000 on 2016/5/13.
 */

var net = require("net");
var chatServer=net.createServer();

chatServer.on("connection",function(client){
    client.name = client.remoteAddress +":"+client.remotePort;
    console.log(client.name +' join room \n\r');
    client.on("data",function(data){
        console.log(data.toString())
    })
    client.on("end",function(data){
        console.log("退出")
    })
})

chatServer.listen(9000,function(){
    console.log("server  is runing")
})