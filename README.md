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

<div ng-app="app" ng-controller="myCtrl">
  <table-list 
    show-index="true"
    show-hover="true"
    title="'tableTitle'"
    table-attr="tableHead"
    data="data">
  </table-list>
</div>

<!-- ... -->
<script src="https://wx-s1.oss-cn-beijing.aliyuncs.com/static_res/js/angular/angular-1.6.5.min.js"></script>
```
In main.js:
```
import angular from 'angular';
import { GenerateComponent } from 'table-list';

GenerateComponent(
  angular.module('app', [ /*...*/ ])
  .controller('myCtrl', function($scope) {
    $scope.tableAttr = [
      { title: 'th1', key: 'key1', placeholder: '-' },
      { title: 'th2', key: 'key2', placeholder: '-' },
      { title: 'th3', key: 'key3', placeholder: '-' },
      { title: 'th4', key: 'key4', placeholder: '-' },
      { title: 'th5', key: 'key5', placeholder: '-' },
      { 
        title: 'th6', 
        key: 'key6', 
        placeholder: '-', 
        slot: { tooltip: 'tooltip', class: "iconfont icon-xxx", placement: 'bottom' },
        handleClick: function(param) {
          console.log(param)
        } 
      }
    ]
    $scope.data = [
      {
        key1: 'value1',
        key2: 'value2',
        key3: 'value3',
        key4: 'value4',
        key5: 'value5',
        key6: 'value6',
      }
    ]
  })
);
```
See the [package source](https://github.com/SlogKi/ng1-table-list/tree/master) for more details.

Note:
angular1.js >= 1.6.5
# Keywords
modules component