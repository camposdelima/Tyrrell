'use Strict'
require(
	[
		'jquery'
		, 'installers/ApplicationInstaller'
	]
	, function (
		$
		, ApplicationInstaller
    ) {

		var appInstaller = new ApplicationInstaller();
		appInstaller.init();
			
    }
);