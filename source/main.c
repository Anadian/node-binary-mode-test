/* A C source file for testing binary file reads directly from libuv itself. */

#include <stdio.h>
#include <stdlib.h>
#include <uv.h>

int main( int argc, char *argv[] ){
	int return_error = 0;
	uv_loop_t *uv_loop = malloc(sizeof(uv_loop_t));
	return_error = uv_loop_init(uv_loop);
	uv_fs_t *file_handle;
	return_error = uv_fs_open( uv_loop, file_handle, "test/example.bin", UV_FS_O_RDONLY, 777, null );
}
