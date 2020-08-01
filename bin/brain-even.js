#!/usr/bin/env node
import { checkingResponses } from '../games/even.js';
import { greeting } from '../src/index.js';

greeting();

console.log('Answer "yes" if the number is even, otherwise answer "no".\n');
checkingResponses();
