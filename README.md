# systemjs-plugin-ng

SystemJS plugin for adding AngularJS dependency injection annotations using [ng-annotate](https://github.com/olov/ng-annotate).

*Note: ng-annotate currently does not work with ES6 modules [[source](https://github.com/olov/ng-annotate#es6-and-typescript-support)]*

## Install

```sh
jspm install ng=github:Hypercubed/systemjs-plugin-ng
```

*Alternativly copy `ng.js` to your app root install ng-annotate.*

## Usage

```js
import {controller} from './controller.js!ng';
```

or apply to all resources in a path by adding a meta configuration to your SystemJS config file:

```
System.config({
  // locate the plugin via map configuration
	// (or installed as described above)
  map: {
    text: '/path/to/ng-plugin.js'
  },
  // use meta configuration to reference which modules
  // should use systemjs-plugin-ng
  meta: {
    'app/*.js': {
      loader: 'ng'
    }
  }
});
```

## License
MIT
