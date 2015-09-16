var fs = require('fs');

try {
  var s = fs.createReadStream('/fsfds');
} catch(e) {
  console.log(e);
}

