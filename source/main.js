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

const ACTUAL_U8ARRAY = new Uint8Array( [ 83,111,109,101,32,116,101,120,116,32,119,105,116,104,32,97,32,85,110,105,120,45,115,116,121,108,101,32,108,105,110,101,32,98,114,101,97,107,46,10,32,65,110,111,116,104,101,114,32,108,105,110,101,32,119,105,116,104,32,87,105,110,100,111,119,115,45,115,116,121,108,101,32,108,105,110,101,32,98,114,101,97,107,46,13,10,72,111,119,32,97,98,111,117,116,32,97,110,111,116,104,101,114,32,108,105,110,101,32,119,105,116,104,32,97,32,99,108,97,115,115,105,99,32,77,97,99,45,115,116,121,108,101,32,108,105,110,101,32,98,114,101,97,107,46,13,78,111,119,32,97,32,115,116,114,101,97,109,32,111,102,32,98,105,110,97,114,121,32,100,97,116,97,32,119,105,116,104,32,97,32,67,82,76,70,32,116,104,114,111,117,103,104,32,105,110,32,102,111,114,32,103,111,111,100,32,109,101,97,115,117,114,101,46,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,13,10,16,17,18,19,20,21,22,23,24,25,32 ] );
const ACTUAL_BUFFER = Buffer.from( ACTUAL_U8ARRAY );
const ACTUAL_BASE64 = 'U29tZSB0ZXh0IHdpdGggYSBVbml4LXN0eWxlIGxpbmUgYnJlYWsuCiBBbm90aGVyIGxpbmUgd2l0aCBXaW5kb3dzLXN0eWxlIGxpbmUgYnJlYWsuDQpIb3cgYWJvdXQgYW5vdGhlciBsaW5lIHdpdGggYSBjbGFzc2ljIE1hYy1zdHlsZSBsaW5lIGJyZWFrLg1Ob3cgYSBzdHJlYW0gb2YgYmluYXJ5IGRhdGEgd2l0aCBhIENSTEYgdGhyb3VnaCBpbiBmb3IgZ29vZCBtZWFzdXJlLgABAgMEBQYHCAkKCwwNDg8NChAREhMUFRYXGBkg';
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
	//Parametre checks
	if( typeof(options) !== 'object' ){
		return_error = new TypeError('Param "options" is not ?Object.');
		return_error.code = 'ERR_INVALID_ARG_TYPE';
		throw return_error;
	}

	//Function
	MakeDir.sync( 'Output' );
	try{ 
		const file_buffer = FileSystem.readFileSync( 'test/example.bin' );
		console.log( file_buffer );
		Assert.deepStrictEqual( file_buffer, ACTUAL_BUFFER );
		const file_string = FileSystem.readFileSync( 'test/example.bin', 'utf8' );
		console.log( file_string );
		//FileSystem.writeFileSync( 'Output/example.utf8', file_string, 'utf8' );
		const file_u8array = new Uint8Array( file_buffer );
		Assert.deepStrictEqual( file_u8array, ACTUAL_U8ARRAY );
		console.log( file_u8array );
		//FileSystem.writeFileSync( 'Output/example.u8array', file_u8array.toString(), 'utf8' );
		const file_base64 = file_buffer.toString( 'base64' );
		Assert.deepStrictEqual( file_base64, ACTUAL_BASE64 );
		console.log( file_base64 );
		//FileSystem.writeFileSync( 'Output/example.b64', file_base64, 'utf8' );
	} catch(error){
		console.error(`Caught: ${error}`);
		process.exitCode = 1;
	}

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
