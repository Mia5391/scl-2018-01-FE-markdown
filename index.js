# !/usr/bin/env node

'use strict';

let mdlinks = require('./lib/md-links');

let [,, ...args] = process.argv;

mdlinks.mdLinks(args[0]);
