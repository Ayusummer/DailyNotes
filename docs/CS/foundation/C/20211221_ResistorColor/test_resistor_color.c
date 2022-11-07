//
// Created by 233 on 2021/12/21.
//
#include "resistor_color.h"
#include<stdio.h>

int main(){
    printf("%d\n",color_code(BLACK));
    printf("%d\n",color_code(BLUE));
    resistor_band_t* colors_t = colors();
    for(int i = 0; i < 10; i++){
        printf("%d\n",colors_t[i]);
    }
    return 0;
}
