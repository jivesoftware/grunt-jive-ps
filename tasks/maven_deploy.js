module.exports = function(grunt) {

    grunt.registerMultiTask('mavenDeploy', 'Deploy artifacts to maven', function() {
        var options = this.options({});
        var done = this.async();
        var file = this.data.file;

        var args = [ '-X', '--batch-mode', '-DgeneratePom=false', 'deploy:deploy-file' ];
        args.push('-Dfile=' + file);
        args.push('-DgroupId=' + options.groupId);
        args.push('-Durl=' + options.url);
        args.push('-DartifactId=' + options.artifactId);
        args.push('-Dversion=' + options.version);
        args.push('-Dclassifier=' + this.data.classifier);
        args.push('-DrepositoryId=' + options.repositoryId);

        grunt.util.spawn({ cmd: 'mvn', args: args, opts: {stdio: 'inherit'} }, function(err, result, code) {
            if (err) {
                grunt.log.error('Failed to deploy to maven: '+err);
            } else {
                grunt.log.ok('Deployed: '+file);
            }

            done(err);
        });
    });
};