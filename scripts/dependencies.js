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
			// ,'moment': '../vendor/moment/moment'
			,'sammy': '../vendors/sammy/lib/sammy'
			,'text': '../vendors/text/text'
	    }
	}
);

require(['default']);
