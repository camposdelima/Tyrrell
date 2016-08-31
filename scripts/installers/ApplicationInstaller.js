define(
    [
        'installers/Installer'
        , 'installers/ContainerInstaller'
		, 'installers/DispatcherInstaller'
		, 'installers/RouterInstaller'
    ]
    ,function(
        BaseType
        ,ContainerInstaller
        ,DispatcherInstaller
        ,RouterInstaller
        ){

        function Constructor() {
            BaseType.call(this);
        }

        var prototype = new BaseType();

        prototype.init = function init() { 
            var deferred = this.getDeferred();
            
            initialize(ContainerInstaller)
			.then(continueWith(DispatcherInstaller))
			.then(continueWith(RouterInstaller))
            .then(deferred.resolve);
            
            return deferred.promise();
        };	   

		function continueWith(ComponentType) {
			return function (dependency) {
				return initialize(ComponentType, dependency);
			};
		}

        function initialize(ComponentType, dependency) {
			var component = new ComponentType(dependency);
			return component.init();
		}

        Constructor.prototype = prototype;
        return Constructor;
    }
);