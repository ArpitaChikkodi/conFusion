'use strict';

module.exports = function(grunt) {

    require('time-grunt')(grunt);

    require('jit-grunt')(grunt);

    grunt.initConfig({
        sass: {
            dist: {
                files: {
                    'css/style.css': 'css/style.scss'
                }
            }
        },
        watch: {
            files: 'css/*.scss',
            tasks: ['sass']
        },
        browerSync: {
            dev: {
                bsFiles: {
                    src: [
                        'css/*.css',
                        '*.html',
                        'js/*.js'
                    ]
                },
                options: {
                    watchTask: true,
                    server: {
                        baseDir: './'
                    }
                }
            }
        }
    });

// register the grunt task with name css and convert sass to css >grunt css
    grunt.registerTask('css',['sass']);
    grunt.registerTask('default', ['browserSync', 'watch']);
};