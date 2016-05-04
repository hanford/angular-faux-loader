## angular-faux-loader  
Small utility directive for displaying a loading message while content/data is coming in. 

[![NPM][dl-icon]][dl-url]

#### Installation  
Installation is super easy, simply add the dependency to your build and add  to your your input

```
# use npm
$ npm install angular-faux-loader
```

Add angular-faux-loader to your dependencies

```
angular
  .module('yourApp', ['ngLoader', require('angular-faux-loader')])
  .controller('SampleController', function () {})
```

Finally in your template you can add  
  

 ```<loader message="Loading..." min="100" loader-value="{{otherValue}}"></loader>```

[dl-icon]: https://nodei.co/npm/angular-faux-loader.png?downloads=true
[dl-url]: https://npmjs.org/package/angular-faux-loader
