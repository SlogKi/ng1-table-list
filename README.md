# Ng1-table-list
Component table-list base on the angular1.6.x
# Installation
Using npm:
```
  $ npm i -g npm
  $ npm i -D table-list
```
In index.html
```
<link rel="stylesheet" href="//sjs.wuuxiang.com/ajax/libs/twitter-bootstrap/3.3.5/css/bootstrap.min.css">
<!-- ... -->

<table-list 
  show-index="true"
  show-hover="true"
  title="'tableTitle'"
  table-attr="tableHead"
  data="data">
</table-list>

<!-- ... -->
<script src="https://wx-s1.oss-cn-beijing.aliyuncs.com/static_res/js/angular/angular-1.6.5.min.js"></script>
```
In main.js:
```
import angular from 'angular';
import { GenerateComponent } from 'table-list';

GenerateComponent(
  angular.module('app', [ /*...*/ ])
);
```
See the [package source](https://github.com/SlogKi/ng1-table-list/tree/master) for more details.

Note:
angular1.js >= 1.6.5
# Keywords
modules component