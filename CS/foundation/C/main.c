#include <stdio.h>
#include "20211220_ArmstrongNumbers/armstrong_numbers.h"

int main() {
    printf(is_armstrong_number(9) ?
        "9 is an Armstrong number\n" : "9 is not an Armstrong number\n");
    printf(is_armstrong_number(153) ?
        "153 is an Armstrong number\n" : "153 is not an Armstrong number\n");
    return 0;
}
