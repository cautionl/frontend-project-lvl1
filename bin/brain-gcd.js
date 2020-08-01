#!/usr/bin/env node
import { greeting } from '../src/index.js';
import { gcd } from '../games/gcd.js';

greeting();

console.log('Find the greatest common divisor of given numbers.');
gcd();
