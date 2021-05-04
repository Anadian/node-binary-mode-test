#!/usr/local/bin/node
'use strict';
/**
# [run-auto-test.js](source/run-auto-test.js)
> Runs the test cases created by `create-auto-test.js`.

Internal module name: `RunAutoTest`

Author: Anadian

Code license: MIT
```
	Copyright 2021 Anadian
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

//# Dependencies
	//## Internal
	//## Standard
	const FileSystem = require('fs');
	const Path = require('path');
	const Assert = require('assert');
	//## External
//# Constants
const FILENAME = 'run-auto-test.js';
const MODULE_NAME = 'RunAutoTest';
var PACKAGE_JSON = {};
var PROCESS_NAME = '';
if(require.main === module){
	PROCESS_NAME = 'run-auto-test';
} else{
	PROCESS_NAME = process.argv0;
}
//## Errors

//# Global Variables
/* istanbul ignore next */

/**
## Functions
*/

//# Exports and Execution
if(require.main === module){
	var return_error = null;
	const FUNCTION_NAME = 'MainExecutionFunction';
	//## Dependencies
		//### Internal
		//### Standard
		//### External
	for( var i = 0; i < 30; i++ ){
		var data_path = Path.join( 'test', 'DATA', `${i}.b64` );
		var input_path = Path.join( 'test', 'input', `${i}.utf8` );
		var data_string = FileSystem.readFileSync( data_path, 'utf8' );
		console.log( i, data_string );
		var data_buffer = Buffer.from( data_string, 'base64' );
		var input_buffer = FileSystem.readFileSync( input_path );
		try{
			Assert.deepStrictEqual( input_buffer, data_buffer );
		} catch(error){
			console.error(`Assert.deepStrictEqual threw an error for ${i}: ${error}`);
		}
	}
} else{
}
