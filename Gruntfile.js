/*=====================================================
=            GRUNT JS FILE - Renato Santos            =

	Github: renato-js
	Twitter: @natojs
	Date: 2015
	'Make the world better'

=													  =

- LESS - less
- SASS - sass
- CSS - cssmin
- JAVASCRIPT - concat
- JAVASCRIPT - uglify
- IMAGEM - imagemin
- WATCH - watch (sass -> css / compile-minify css / uglify js)
- HAML - compila HAML to HTML
- BROWSER SYNC

=====================================================*/

"use strict";

module.exports = function( grunt ) {

	// load automaticamente todas as task
	// nao é necessario o require como: var taskPluginName = require('task-plugin-name');	
	require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

	grunt.initConfig({
		// configuracoes das tarefas
		pkg: grunt.file.readJSON('package.json'),

		// LESS
		// Converte todos os arquivos LESS (build/less) para CSS (build/css/style-less.css)  
		less: {
		  development: {
		    files: {
		      "build/css/style.css": "build/less/*.less"
		    }
		  }
		},

		// SASS
		// Converte todos os arquivos SASS (build/sass) para CSS (build/css/style-sass.css) 
		sass: {                              	// Task
			dist: {                            // Target
			  options: {                       // Target options
			    style: 'expanded',
			    banner: '/* CSS minificado  vindo do SASS \n\n*/'
			  },
			  files: {                         // Dictionary of files
			    "build/css/1-elementos.css": "build/sass/theme/elementos.scss",
			    "build/css/2-main.css": "build/sass/main.scss"
			  }
			}
		},

		// CSS
		// minificar todos os arquivos CSS (build/css) e elimina comentários formando o 'style.min.css' (src/css)
		// OBS: Esta taks deve ser gerada após o LESS ou SASS serem convertidos para CSS
		cssmin: {
		  add_banner: {
		    options: {
		      banner: '/* CSS minificado */'
		    },
		    files: {
		      'deploy/src/css/style.min.css': ['build/css/*.css']	//chama todos os arquivos em CSS
		    }
		  }
		},

		// JAVASCRIPT
		// Concatena vários arquivos JS em um só
		concat: {
		  options: {
		    // define a string to put between each file in the concatenated output
		    separator: ';',
		    banner: '/* Javascript Concat */\n\n'
		  },
		  magic: {
		    // the files to concatenate
		    src: ['build/js/main.js','build/js/plugins.js'],
		    // the location of the resulting JS file
		    dest: 'build/js/main.concat.js'
		  }
		},

		// JAVASCRIPT
		// concatena, uglyfica e minifica arquivos javascript do projeto
		uglify: {
			options: {
				mangle: true,	//altera as variaveis para ficar menor
				banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
        				'<%= grunt.template.today("yyyy-mm-dd") %> */\n\n',
				preserveComments: false
			},

			meus_arquivos: {
				files: {
					'deploy/src/js/main.min.js': ['build/js/main.js']
				}
			}
		},

		// IMAGEM
		// otimiza imagens dinamicamente
		// OBS: As imagens irão para o diretório (img/img-minify) para não serem misturadas
	   imagemin: {
	      png: {
	         options: {
	            optimizationLevel: 7
	         },
	         files: [{
	            expand: true,
	            cwd: 'assets/_img/',
	            src: ['deploy/img/**/*.png'],
	            dest: 'assets/img/'
	         }]
	      },
	      jpg: {
	         options: {
	            progressive: true
	         },
	         files: [{
	            expand: true,
	            cwd: 'assets/_img/',
	            src: ['deploy/img/**/*.jpg'],
	            dest: 'assets/img/'
	         }]
	      }
	   },

	    browserSync: {
	      dev: {
	        bsFiles: {
	          src: ['deploy/src/css/*.css', 'deploy/*.html']
	        },
	        options: {
	          watchTask: true,
	          server: './deploy/'
	        }
	      }
	    },


		//WATCH
		//assiste as atualizacoes
		watch: {	
			//assiste sass file
			sassFile: {
			    files: ['build/sass/**/*.scss'],
			    tasks: ['scss','cssm'],
			},
			//assiste js files
			jsFile: {
			    files: ['build/js/main.js'],
			    tasks: ['ug'],
			},
			options: {
				spawn: false
			}
		}

	});

	// registrando tarefas
	grunt.registerTask( 'default', [ 'uglify' ] );
	grunt.registerTask( 'scss', [ 'sass' ] );
	grunt.registerTask( 'con ', [ 'concat' ] ) ;
	grunt.registerTask( 'ug', [ 'uglify' ] );
	grunt.registerTask( 'cssm', [ 'cssmin' ] );
	grunt.registerTask( 'ls', [ 'less' ] );
	grunt.registerTask( 'w', [ 'watch' ] );							//assiste 
	grunt.registerTask('img', ['imagemin']);
	grunt.registerTask('bsync', ['browserSync', 'watch']);

	//para testes
	grunt.registerTask( 'sa', [ 'scss','cssmin' ] );				//converte sass e junta com CSS gerado pelo LESS 


};


/*-----  End of GRUNT JS FILE - Renato Santos  ------*/
