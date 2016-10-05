define(
    [
        'baseImplementations'
        ,'jQuery'
    ], function(baseImplementations){        
        return $.extend(baseImplementations,
            {
                'ApplicationInstaller': 'installers/ApplicationInstaller'
                ,'BaseApplicationInstaller': 'tyrr/installers/ApplicationInstaller'
            }
        );
});