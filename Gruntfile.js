module.exports = function(grunt) {

    grunt.initConfig({
        jshint: {
            options: {
                node: true
            },
            all: ['Gruntfile.js', 'tasks/**/*.js']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('default', ['jshint']);
};

