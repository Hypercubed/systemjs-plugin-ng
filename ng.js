var ngAnnotate = require('ng-annotate');

exports.translate = function(load) {
  var output = ngAnnotate(load.source, {
    add: true
  });
  if (output.errors) {
    console.error.apply(console, output.errors);
    load.source = load.source;
  } else {
    load.source = output.src;
  }
};
