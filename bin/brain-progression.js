#!/usr/bin/env node
import { greeting } from '../src/index.js';
import { progression } from '../games/progression.js';

greeting();
console.log('What number is missing in the progression?');

progression();
