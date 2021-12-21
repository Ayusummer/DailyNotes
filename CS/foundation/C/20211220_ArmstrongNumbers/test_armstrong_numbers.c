//
// Created by 233 on 2021/12/21.
//
#include <stdio.h>
#include "armstrong_numbers.h"

int main() {
    printf(is_armstrong_number(9) ?
           "9 is an Armstrong number\n" : "9 is not an Armstrong number\n");
    printf(is_armstrong_number(153) ?
           "153 is an Armstrong number\n" : "153 is not an Armstrong number\n");
    return 0;
}
