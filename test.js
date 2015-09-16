var fs = require('fs');

var s = fs.createReadStream('/fsfds')
  .on('error', function(e) {
    console.log(e);
  });

