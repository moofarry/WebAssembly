#include <emscripten.h>
#include <stdio.h>


EMSCRIPTEN_KEEPALIVE
int add(int a, int b) {
    return a + b;
}


EMSCRIPTEN_KEEPALIVE
int main() {
    printf("Hello World from C\n");
}


