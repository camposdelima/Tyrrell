define(
    [
        'components/Component'
        ,'jquery'
    ]
    ,function(BaseType){
        function Constructor() {}
        var prototype = new BaseType();

        prototype.init = function init() {
            var deferred = this.getDeferred();
            deferred.resolve();
            
            return deferred.promise();
        }

        prototype.getDeferred = function getDeferred() {
            return $.Deferred();
        }

        Constructor.prototype = prototype;
        return Constructor;
    }
);