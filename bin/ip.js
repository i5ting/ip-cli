#!/usr/bin/env node

var ip = require('ip');

var myip = ip.address()
console.log(myip);