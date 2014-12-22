var $ = require('node').all;
var Base = require('base');

var Demo123 = Base.extend({
    initializer:function(){
        var self = this;
        var $target = self.get('$target');
    },
    alertA: function() {
        var self = this;
        var a = self.get('a');
        console.log(a);
        self.set('a', 2);
        a = self.get('a');
        console.log(a);
    }
},{
    ATTRS:{
        $target:{
            value:'',
            getter:function(v){
                return $(v);
            }
        },
        a: {
            value: ''
        }
    }
});

module.exports = Demo123;



