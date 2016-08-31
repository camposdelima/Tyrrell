'use Strict'
require(
	[
		'jquery'
		, 'installers/ContainerInstaller'
		, 'installers/DispatcherInstaller'
		, 'installers/RouterInstaller'
	]
	, function (
		$
		, ContainerInstaller
		, DispatcherInstaller
		, RouterInstaller
    ) {

		init(ContainerInstaller)
			.then(continueWith(DispatcherInstaller))
			.then(continueWith(RouterInstaller));

		function continueWith(ComponentType) {
			return function (dependency) {
				return init(ComponentType, dependency);
			};
		}

		function init(ComponentType, dependency) {
			var component = new ComponentType(dependency);
			return component.init();
		}
    }
);