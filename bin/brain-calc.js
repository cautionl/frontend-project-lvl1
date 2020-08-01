#!/usr/bin/env node
import { calc } from '../games/calc.js';
import { greeting } from '../src/index.js';

greeting();

console.log('What is the result of the expression?\n');
calc();
