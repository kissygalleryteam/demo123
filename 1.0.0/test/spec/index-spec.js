KISSY.add(function (S, Node,Demo) {
    var $ = Node.all;
    describe('demo123', function () {
        it('Instantiation of components',function(){
            var demo = new Demo();
            expect(S.isObject(demo)).toBe(true);
        })
    });

},{requires:['node','kg/demo123/1.0.0/']});