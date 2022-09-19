"use strict";
// 1. Dado a seguinte lista de números:
// 8, 72, 1, 37, 21, 54, 7, 81, 23, 92, 12, 87, 3, 12, 6, 4
// Crie uma nova lista somente com os números ímpares e usando o
// filter
const listaInicial = [8, 72, 1, 37, 21, 54, 7, 81, 23, 92, 12, 87, 3, 12, 6, 4];
const listaImpares = listaInicial.filter((item) => item % 2);
