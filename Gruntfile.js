module.exports = function (grunt) {

    var sources_native = [
        'src/back-scroll.js',
        'src/wechatBack.js'
    ];

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        meta: {
            banner: '/*!<%= pkg.name %> - 滚动加载 | <%= pkg.author %>*/\n'
        },
        uglify: {
            options: {
                banner: '<%= meta.banner %>'
            },
            target: {
                files: {
                    'dist/back-scroll.min.js': ['src/back-scroll.js']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');


    grunt.registerTask('default', ['uglify']);

};
