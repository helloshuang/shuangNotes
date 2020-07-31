let request;
if(window.XMLHttpRequest){
  request = new XMLHttpRequest(); //IE7+,...
}else {
  request = new ActiveXObject("Microsoft.XMLHTTP"); //IE6,IE5
}
//用XHR发送请求：
//open(method,url,async) //调用XHR对象，async表示同步还是异步，默认为true(异步)；
//send(String)   //发送请求。

request.open("POST","create.php",true);
request.setRequestHeader("Content-type","application/x-www-form-urlencoded");  //必须写在open和send中间
request.send("name=王大锤&sex=男");
