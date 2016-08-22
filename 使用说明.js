/*

服务器介绍：
    类型： nodeJS服务器
    作用：
        此服务器（接口服务器）帮你实现:  在你的项目中  请求你自己定义的接口 （当然接口文档放在此服务器中）

    使用方法：

        1. 设置配置 ( server/config.js )详细说明在此文件中
        2. 启动服务器  server/server.js

              方法： node server.js
        3. 调用您的接口

              在您的项目中调用 你自己定义的接口，如：

                 //根据用户Id 获取用户详情
                 $.ajax({
                     url: 'http://localhost:8333/user/getUserInfoById',
                     data: '{"id":3}',
                     type: 'post',
                     dataType: 'json'
                 }).done(function (data) {
                 });


*/





