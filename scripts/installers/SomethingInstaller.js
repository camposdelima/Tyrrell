define(
    [
        'feature!Installer'
    ]
    ,function(
        BaseType){

        function Constructor() {
            BaseType.call(this);
        }

        var prototype = new BaseType();

        prototype.init = function init() {
            return privatelyInstallSomethingAsync.call(this);
        };
        
        function privatelyInstallSomethingAsync() {
            var deferred = this.getDeferred();
           
            console.log('Privately installing something...');
            asyncStaticResolvePromisse(deferred);

            return deferred.promise();
        }

        function asyncStaticResolvePromisse(deferred) {
            window.setTimeout(function() {
                console.log('Private method was installed something. ');    
                deferred.resolve();
                }, 3000
            );
        }

        Constructor.prototype = prototype;
        return Constructor;
    }
);