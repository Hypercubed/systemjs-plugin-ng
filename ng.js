var ngAnnotate = require('ng-annotate');

exports.translate = function(load) {
  load.source = ngAnnotate(load.source, { add: true }).src;
};
