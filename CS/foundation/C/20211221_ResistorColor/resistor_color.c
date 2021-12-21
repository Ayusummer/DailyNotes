#include "resistor_color.h"

int color_code(resistor_band_t color){
    return color;
}

resistor_band_t* colors(){
    static resistor_band_t bands[10];
    for(resistor_band_t t = 0; t < 10; t++){
        bands[t] = t;
    }
    return bands;
}