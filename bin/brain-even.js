#!/usr/bin/env node
import { greeting, checkingResponses } from '../src/even.js';

console.log('Welcome to the Brain Games!');
greeting();

console.log('Answer "yes" if the number is even, otherwise answer "no".\n');
checkingResponses();
