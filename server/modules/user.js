//相当于数据库
var userList = [{
    "id": 1,
    "name": "rancheng",
    "age": 18,
    "nation": 'China'
},{
    "id": 2,
    "name": "baiwei",
    "age": 17,
    "nation": 'China'
},{
    "id": 3,
    "name": "zhaowei",
    "age": 19,
    "nation": 'China'
}]


var _ = require('underscore');

function User(){}
User.prototype = {
    getUserInfoById:{
        type: 'get',
        fn: function(params){

            var matchUser = _.filter(userList,function(ele,i){
                return ele.id == params.id;
            });
            if(matchUser && matchUser.length){
                return matchUser[0];
            }else{
                return {
                    error: 1,
                    data: '没有该用户'
                };
            }
        }
    },
    getUserList: {
        type: 'post',
        fn: function(){
            return userList;
        }
    }
};


module.exports = new User();