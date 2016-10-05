/// DebuggerInstaller is a example of installer with configuration.
define(
    [
        'feature!Installer'
        ,'configurations/DebuggerConfiguration'
    ]
    ,function(
        BaseType
        ,configuration){

        function Constructor() {
            BaseType.call(this);
        }

        var prototype = new BaseType();

        prototype.init = function init() {
            return setUp.call(this);
        };
        
        function setUp() {
            var deferred = this.getDeferred();
           
            if(configuration.showLogs === false)
                hideLogs();
            else
                improveLogs();

            deferred.resolve();

            return deferred.promise();
        }

        function hideLogs() {
            console.log = function() {};
        }

        function improveLogs() {
            console.log = window.console.log.bind(window.console, '[DEBUGGER] %s');
        }

        Constructor.prototype = prototype;
        return Constructor;
    }
);