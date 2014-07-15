module.exports = function(grunt) {

    grunt.registerTask('writeArtifactList', function() {
        var done = this.async();
        var options = this.options({});
        var prefix = [options.repositoryUrl, options.groupId.replace(/\./g, '/'), options.artifactId, options.version].join('/');
        var lines = [];
        var fs = require('fs');

        options.files.forEach(function(file) {
            lines.push(file + '=' + prefix + '/' + file);
        });

        fs.writeFile(options.filename, lines.join('\n'), function(err) {
            if (err){
                grunt.log.error('Failed to write artifact list: '+err);
            }

            done(err);
        });
    });

};