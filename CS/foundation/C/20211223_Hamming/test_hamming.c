//
// Created by 233 on 2021/12/23.
//

#include "Hamming.h"
#include<stdio.h>

int main(){
    printf("两个空字符串: %d\n", compute("", ""));
    printf("A与A: %d\n", compute("A", "A"));
    printf("G与T: %d\n", compute("G", "T"));
    printf("GGACTGAAATCTG与GGACTGAAATCTG: %d\n", compute("GGACTGAAATCTG", "GGACTGAAATCTG"));
    printf("GGACGGATTCTG与AGGACGGATTCT: %d\n", compute("GGACGGATTCTG", "AGGACGGATTCT"));
    printf("AATG与AAA: %d\n", compute("AATG", "AAA"));
    printf("ATA与AGTG: %d\n", compute("ATA", "AGTG"));
    printf("空字符串与G: %d\n", compute("", "G"));
    printf("G与空字符串: %d\n", compute("G", ""));
    return 0;
}
