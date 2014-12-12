module.exports = function(grunt) {
  grunt.initConfig({
    uglify: {
        dist: {
      		src: 'assets/js/custom.js',
      		dest: 'assets/js/custom.min.js'
        }
    },
    less: {
    	dist: {
    		src: 'assets/css/style.less',
    		dest: 'assets/css/style.css'
    	},
    	options: {
    		cleancss:true,
    		ieCompat:true
    	}
    },
    htmlmin: {
      dist: {
	     options: {
	       removeComments:false,
	       collapseWhitespace: true,
         minifyJS:true
	     },
	     files: {
	       'index.html':'dev/index-dev.html',
         'single.html':'dev/single-dev.html',
         'guest.html':'dev/guest-dev.html',
         'albums.html':'dev/albums-dev.html',
         'guesttrack.html':'dev/guesttrack-dev.html',
         'header.html':'dev/header-dev.html',
         'footer.html':'dev/footer-dev.html',
         'footernav.html':'dev/footernav-dev.html',
         'contact.html':'dev/contact-dev.html',
         'video.html':'dev/video-dev.html'
	     }
      }
    },
    watch:{
    	scripts: {
    		files: ['assets/js/custom.js','assets/css/style.less','dev/index-dev.html','dev/single-dev.html','dev/guest-dev.html','dev/albums-dev.html','dev/guesttrack-dev.html','dev/header-dev.html','dev/footer-dev.html','dev/footernav-dev.html','dev/video-dev.html','dev/contact-dev.html'],
    		tasks: ['htmlmin','uglify','less','livereload'],
    		options: {
    			livereload:true
		}
    	}
    },
    livereload:{
	     options: {
	         base: '/',
	     },
	     files: ['assets/custom.js','assets/css/style.less','index.html','single.html','guest.html','albums.html','guesttrack.html','header.html','footer.html','footernav.html','video.html','contact.html']
    }

  });
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-livereload');

  grunt.registerTask('default',['uglify','less','htmlmin','watch','livereload']);
};