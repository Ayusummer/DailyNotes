#include "isogram.h"
#include<stdio.h>

int main(){
    printf("isograms: %d\n", is_isogram("isograms"));
    printf("up-to-date: %d\n", is_isogram("up-to-date"));
    printf("Emily Jung Schwartzkopf: %d\n", is_isogram("Emily Jung Schwartzkopf"));
    printf("thumbscrew-jappingly: %d\n", is_isogram("thumbscrew-jappingly"));
    printf("%d\n", is_isogram(""));
    printf("NULL: %d\n", is_isogram(NULL));
    printf("Alphabet: %d\n", is_isogram("Alphabet"));
    printf("alphAbet: %d\n", is_isogram("alphAbet"));


    return 0;
}
