#!/usr/local/bin/node
'use strict';
/**
# [create-new-test-data.js](source/create-new-test-data.js)
> Creates new test data files for the given file paths.

Internal module name: `NodeBinaryModeTest`

Author: Anadian

Code license: MIT
```
	Copyright 2020 Anadian
	Permission is hereby granted, free of charge, to any person obtaining a copy of this 
software and associated documentation files (the "Software"), to deal in the Software 
without restriction, including without limitation the rights to use, copy, modify, 
merge, publish, distribute, sublicense, and/or sell copies of the Software, and to 
permit persons to whom the Software is furnished to do so, subject to the following 
conditions:
	The above copyright notice and this permission notice shall be included in all copies 
or substantial portions of the Software.
	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, 
INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A 
PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT 
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF 
CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE 
OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```
Documentation License: [![Creative Commons License](https://i.creativecommons.org/l/by-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-sa/4.0/)
> The source-code comments and documentation are written in [GitHub Flavored Markdown](https://github.github.com/gfm/).

> The type notation used in this documentation is based off of the [Google Closure type system](https://github.com/google/closure-compiler/wiki/Types-in-the-Closure-Type-System).

> The status and feature lifecycle keywords used in this documentation are based off of my own standard [defined here](https://github.com/Anadian/FeatureLifeCycleStateStandard).
*/

//#Dependencies
	//##Internal
	//##Standard
	const FileSystem = require('fs');
	const Path = require('path');
	//##External
	const MakeDir = require('make-dir');
//#Constants
const FILENAME = 'create-new-test-data.js';
const MODULE_NAME = 'NodeBinaryModeTest';
var PACKAGE_JSON = {};
var PROCESS_NAME = '';
if(require.main === module){
	PROCESS_NAME = 'node-binary-mode-test';
} else{
	PROCESS_NAME = process.argv0;
}
//##Errors

//#Global Variables
/* istanbul ignore next */

//#Functions
//#Exports and Execution
if(require.main === module){
	var _return = [1,null];
	var return_error = null;
	const FUNCTION_NAME = 'MainExecutionFunction';
	//##Dependencies
		//###Internal
		//###Standard
		//###External
		const EnvPaths = require('env-paths');
	//Constants
	const EnvironmentPaths = EnvPaths( PROCESS_NAME );
	//Variables
	var function_return = [1,null];
	//Config
	//Main
	if( process.argv.length > 2 ){
		for( var i = 2; i < process.argv.length; i++ ){
			var path_object = Path.parse( process.argv[i] );
			var output_dir = Path.join( 'Output', path_object.name );
			MakeDir.sync( output_dir );
			var file_buffer = FileSystem.readFileSync( process.argv[i] );
			FileSystem.writeFileSync( Path.join( output_dir, 'file.utf8' ), file_buffer, 'utf8' );
			var u8array = new Uint8Array( file_buffer );
			FileSystem.writeFileSync( Path.join( output_dir, 'file.u8array' ), u8array.toString(), 'utf8' );
			var base64 = file_buffer.toString( 'base64' );
			FileSystem.writeFileSync( Path.join( output_dir, 'file.b64' ), base64, 'utf8' );
		}
	}
} else{
}
