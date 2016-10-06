define(
    [
        'baseImplementations'
        ,'jquery'
    ], function(baseImplementations){        
        return $.extend(baseImplementations,
            {
                'ApplicationInstaller': 'installers/ApplicationInstaller'
                ,'BaseApplicationInstaller': 'tyrr/installers/ApplicationInstaller'
            }
        );
});