#!/usr/bin/env node

var ip = require('ip');
var clip = require('cliparoo');

var myip = ip.address()

clip(myip, function(err){
  if (err) throw err;
  // console.log('copied!');
});

console.log(myip);