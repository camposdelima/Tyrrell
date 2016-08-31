define(
    [
        'pages/Page'
        ,'text!views/main.html'

    ]
    ,function(BaseType, view){
        function Constructor(containerSelector) {            
            BaseType.call(this, view, containerSelector);
        }
        var prototype = new BaseType();


        Constructor.prototype = prototype;
        return Constructor;
    }
);