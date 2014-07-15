module.exports = function(grunt) {

    grunt.registerTask('createExtension', function() {
        var originalCwd = process.cwd();
        var options = this.options({});
        var done = this.async();

        var jive = require(process.cwd()+'/node_modules/jive-sdk'); // Default to whatever jive-sdk is being used by the caller

        process.chdir(options.outputDirectory);

        process.env.jive_sdk_config_file = 'jiveclientconfiguration.json';

        jive.service.init({use: function() {}, all: function(){}}).then(function() {

            jive.service.extensions().prepare('', "tiles", "apps", "cartridges", "storages").done(function(){
                process.chdir(originalCwd);
                process.nextTick(function() {
                    done();
                });
            });
        });
    });

};