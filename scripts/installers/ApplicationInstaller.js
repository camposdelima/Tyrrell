define(
    [
        'feature!BaseApplicationInstaller'
        ,'installers/DebuggerInstaller'
        ,'installers/SomethingInstaller'
    ]
    ,function(
        BaseType
        ,DebuggerInstaller
        ,SomethingInstaller
        ){

        function Constructor() {
            BaseType.call(this);
        }

        var prototype = new BaseType();

        prototype.init = function init() {
            var defaultInstallationsPromisse = BaseType.prototype.init.call(this);
            var deferred = this.getDeferred();

            defaultInstallationsPromisse
            .then(this.continueWith(DebuggerInstaller))
			.then(this.continueWith(SomethingInstaller))
            .then(deferred.resolve);
            
            return deferred.promise();
        };        
        
        Constructor.prototype = prototype;
        return Constructor;
    }
);