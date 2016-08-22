//相当于数据库
var productList = [{
    "id": 1,
    "name": "watch",
    "price": 200
},{
    "id": 2,
    "name": "T-shirt",
    "price": 300
},{
    "id": 3,
    "name": "car",
    "price": 18000
}]


var _ = require('underscore');

function Product(){}
Product.prototype = {
    getProductInfoById:{
        type: 'get',
        fn: function(params){

            var matchUser = _.filter(productList,function(ele,i){
                return ele.id == params.id;
            });
            if(matchUser && matchUser.length){
                return matchUser[0];
            }else{
                return {
                    error: 2,
                    data: '没有该商品'
                };
            }
        }
    },
    getProductList: {
        type: 'post',
        fn: function(){
            return productList;
        }
    }
};


module.exports = new Product();