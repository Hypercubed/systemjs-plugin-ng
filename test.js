import {controller} from './test-ng.js!ng';

document.body.innerHTML += (Array.isArray(controller) && typeof controller[controller.length-1] === 'function') ?
  'it worked' :
  'it failed';
