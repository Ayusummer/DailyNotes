cmake_minimum_required(VERSION 3.20)
project(C)

set(CMAKE_C_STANDARD 99)

add_executable(C
        main.c
        20211220_ArmstrongNumbers/armstrong_numbers.h
        20211220_ArmstrongNumbers/armstrong_numbers.c)
