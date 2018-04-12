var http = require('http');
var request = http.request({



    //前三个是在拼url
    //url = host + port + path

    //完整路径
    //http://192.168.0.44:8084/qjlianlian/front/v1/user/getUserInfo

    host: '192.168.0.44',     //网站域名或 IP 地址
    port: '8084',                  //端口
    path: '/qjlianlian/front/v1/user/getUserInfo',    //相对路径(相对于根，包括查询数据)

    method: 'post', //'get'
    headers: {                  //请求头
        //'Content-type': 'application/json'
        'Content-type': 'application/json',
        'qpToken':'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOlsid3d3LnFpYW5qaWFsaWNhaS5jb20iLCJ3d3cucGlhb2ppYXppLmNvbSJdLCJwdWlkIjoiYzhmN2NjNzU4MmVlNDM4Nzk2OTEyYmJkODYyYmY2MzgiLCJpc3MiOiJxai5waiIsInF1aWQiOjcyMzUsImV4cCI6MTUyNDA0OTc3NCwiaWF0IjoxNTIzNDQ0OTc0fQ.J0weTQ3GR15YtI9hx3qrHL4i1B02DtDU67KqMgohrBw'
        //'Content-Length' : contents.length
    }
},function(response){

    //console.log(response)
    //响应对象
    //响应对象
    response.setEncoding('utf8');
    response.on('data',function(data){
        console.log(data);
    });

});
request.end();