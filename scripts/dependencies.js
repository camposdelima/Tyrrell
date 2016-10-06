/**
 * @author Cristiano
 */
'use strict'

requirejs.config(
	{
	    baseUrl: 'scripts',
	    paths: {
			'views': '../views'
			,'jquery': '../vendors/jquery/dist/jquery.min'
			,'sammy': '../vendors/sammy/lib/sammy'
			,'text': '../vendors/text/text'
			,'feature': '../vendors/amd-feature/feature'			
			,'tyrr': '../vendors/tyrr'
			,'underscore': '../vendors/underscore/underscore'
			
			//LOOSECOUPLING
			,'baseImplementations': '../vendors/tyrr/configurations/ImplementationsConfiguration'
			,'implementations': 'configurations/ImplementationsConfiguration'
	    }
		,shim: {
			'sammy': ['jquery']
		}
		,deps: ['tyrr/default']
	}
);

require(['default']);
