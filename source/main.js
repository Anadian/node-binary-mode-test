#!/usr/local/bin/node
'use strict';
/**
# [node-binary-mode-test.js](source/node-binary-mode-test.js)
> Tests if NodeJS can probably handle binary files on all platforms.

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
	const Assert = require('assert').strict;
	const OperatingSystem = require('os');
	const Path = require('path');
	//##External
	const MakeDir = require('make-dir');
//#Constants
const FILENAME = 'node-binary-mode-test.js';
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
var Logger = { 
	log: () => {
		return null;
	}
};
//#Functions
/**
## Functions
*/
/**
### setLogger
> Allows this module's functions to log the given logger object.

Parametres:
| name | type | description |
| --- | --- | --- |
| logger | {?object} | The logger to be used for logging or `null` to disable logging. |

Throws:
| code | type | condition |
| --- | --- | --- |
| 'ERR_INVALID_ARG_TYPE' | {TypeError} | Thrown if `logger` is neither an object nor `null` |

History:
| version | change |
| --- | --- |
| 0.0.0 | Introduced |
*/
function setLogger( logger ){
	var return_error = null;
	//const FUNCTION_NAME = 'setLogger';
	//Variables
	//Parametre checks
	/* istanbul ignore else */
	if( typeof(logger) === 'object' ){
		/* istanbul ignore next */
		if( logger === null ){
			logger = { 
				log: () => {
					return null;
				}
			};
		}
	} else{
		return_error = new TypeError('Param "logger" is not an object.');
		return_error.code = 'ERR_INVALID_ARG_TYPE';
		throw return_error;
	}

	//Function
	Logger = logger;
	//Return
}
/**
### DoTestCase_Async
> Performs the test case assertions.

Parametres:
| name | type | description |
| --- | --- | --- |
| test_case_file_path | {string} | The filepath for the test case.  |

Returns:
| type | description |
| --- | --- |
| {Promise} | A promise that resolves to `0` if all good. |

Throws:
| code | type | condition |
| --- | --- | --- |
| 'ERR_INVALID_ARG_TYPE' | {TypeError} | Thrown if a given argument isn't of the correct type. |

History:
| version | change |
| --- | --- |
| 0.0.1 | WIP |
*/
async function DoTestCase_Async( test_case_file_path ){
	var arguments_array = Array.from(arguments);
	var _return;
	var return_error;
	const FUNCTION_NAME = 'DoTestCase_Async';
	Logger.log({process: PROCESS_NAME, module: MODULE_NAME, file: FILENAME, function: FUNCTION_NAME, level: 'debug', message: `received: ${arguments_array}`});
	//Variables
	var path_object = Path.parse( test_case_file_path );
	var name_string = path_object.name;
	//Parametre checks
	if( typeof(test_case_file_path) !== 'string' ){
		return_error = new TypeError('Param "test_case_file_path" is not string.');
		return_error.code = 'ERR_INVALID_ARG_TYPE';
		throw return_error;
	}

	//Function
	try{
		//Load Test Data
		var actual_base64 = FileSystem.readFileSync( Path.join( 'test', 'DATA', name_string+'.b64' ), 'utf8' );
		var actual_buffer = Buffer.from( actual_base64, 'base64' );
		var actual_u8array = new Uint8Array( actual_buffer );
		var actual_string = actual_buffer.toString( 'utf8' );
		//Load test input
		var file_buffer = FileSystem.readFileSync( Path.join( 'test', 'input', name_string ) );
		var file_string = FileSystem.readFileSync( Path.join( 'test', 'input', name_string ), 'utf8' );
		var file_u8array = new Uint8Array( file_buffer );
		var file_base64 = file_buffer.toString( 'base64' );
		//Assertions
		console.log('For %s: testing buffer.', name_string);
		Assert.deepStrictEqual( file_buffer, actual_buffer );
		console.log('For %s: testing string.', name_string);
		Assert.deepStrictEqual( file_string, actual_string );
		console.log('For %s: testing u8array.', name_string);
		Assert.deepStrictEqual( file_u8array, actual_u8array );
		console.log('For %s: testing base64.', name_string);
		Assert.deepStrictEqual( file_base64, actual_base64 );
		_return = 0;
	} catch(error){
		console.error('Caught: ', error);
		return_error = error;
	}

	//Return
	if( return_error != null ){
		throw return_error;
	}
	Logger.log({process: PROCESS_NAME, module: MODULE_NAME, file: FILENAME, function: FUNCTION_NAME, level: 'debug', message: `returned: ${_return}`});
	return _return;
}
/**
### main_Async
> The main execution block. This function is private and should never be called directly.

Parametres:
| name | type | description |
| --- | --- | --- |
| options | {?Object} | [Reserved] Additional run-time options. \[default: {}\] |

Throws:
| code | type | condition |
| --- | --- | --- |
| 'ERR_INVALID_ARG_TYPE' | {TypeError} | Thrown if a given argument isn't of the correct type. |

History:
| version | change |
| --- | --- |
| 0.0.1 | WIP |
*/
async function main_Async( options = {} ){
	var arguments_array = Array.from(arguments);
	var return_error;
	const FUNCTION_NAME = 'main_Async';
	Logger.log({process: PROCESS_NAME, module: MODULE_NAME, file: FILENAME, function: FUNCTION_NAME, level: 'debug', message: `received: ${arguments_array}`});
	//Variables
	var test_cases = [
		Path.join( 'test', 'input', 'tc1' ),
		Path.join( 'test', 'input', 'tc2' ),
		Path.join( 'test', 'input', 'tc3' )
	];
	//Parametre checks
	if( typeof(options) !== 'object' ){
		return_error = new TypeError('Param "options" is not ?Object.');
		return_error.code = 'ERR_INVALID_ARG_TYPE';
		throw return_error;
	}

	//Function
	/*for( var i = 0; i < test_cases.length; i++ ){
		console.log( 'Test case %d: %s', i, test_cases[i] );
		try{
			await DoTestCase_Async( test_cases[i] );
		} catch(error){
			return_error = new Error(`await DoTestCase_Async threw an error: ${error}`);
			console.error( return_error );
			process.exitCode = 1;
		}
	}*/
	setTimeout( DoTestCase_Async, 1, test_cases[0] ); 
	setTimeout( DoTestCase_Async, 60000, test_cases[1] ); 
	setTimeout( DoTestCase_Async, 120000, test_cases[2] ); 
}
//#Exports and Execution
if(require.main === module){
	var _return = [1,null];
	var return_error = null;
	const FUNCTION_NAME = 'MainExecutionFunction';
	//##Dependencies
		//###Internal
		//###Standard
		//###External
		const ApplicationLogWinstonInterface = require('application-log-winston-interface');
		const EnvPaths = require('env-paths');
	//Constants
	const EnvironmentPaths = EnvPaths( PROCESS_NAME );
	//Variables
	var function_return = [1,null];
	//Logger
	try{ 
		MakeDir.sync( EnvironmentPaths.log );
	} catch(error)/* istanbul ignore next */{
		console.error('MakeDir.sync threw: %s', error);
	}
	function_return = ApplicationLogWinstonInterface.InitLogger('debug.log', EnvironmentPaths.log);
	if( function_return[0] === 0 ){
		setLogger( function_return[1] );
	}
	Logger.log({process: PROCESS_NAME, module: MODULE_NAME, file: FILENAME, function: FUNCTION_NAME, level: 'debug', message: 'Start of execution block.'});
	//Config
	//Main
	main_Async();
	Logger.log({process: PROCESS_NAME, module: MODULE_NAME, file: FILENAME, function: FUNCTION_NAME, level: 'debug', message: 'End of execution block.'});
} else{
	exports.setLogger = setLogger;
}
