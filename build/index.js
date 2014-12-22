KISSY.add('kg/demo123/1.0.0/index',["node","base"],function(S ,require, exports, module) {
 var $ = require('node').all;
var Base = require('base');

var Demo123 = Base.extend({
    initializer:function(){
        var self = this;
        var $target = self.get('$target');
    },
    alertA: function() {
        var self = this;
        var aValue = self.get('a');
        console.log(aValue);
        self.set('a', 2);
        var anotherValue = self.get('a');
        console.log(anotherValue);
    },
    alertB: function() {

    },
    alertC: function() {

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
        },
        b: {
            value: ''
        },
        c: {
            value: ''
        }
    }
});

module.exports = Demo123;




});