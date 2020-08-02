#!/usr/bin/env node
import { greeting } from '../src/index.js';
import { prime } from '../games/prime.js';

greeting();

console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
prime();
