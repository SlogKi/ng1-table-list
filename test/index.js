'use strict';
import angular from 'angular';
import { GenerateComponent } from '../src/tableList';
// import { GenerateComponent } from 'ng-table-list';
// const { GenerateComponent, GetQueryStr, CreateStrategy } = require('ng-table-list');
import { toFixedN, GetQueryStr, CreateStrategy } from 'slo-tool-lib';

GenerateComponent(
  angular.module('app', ['ui.bootstrap'])
  .controller('myCtrl', function($scope) {
    $scope.tableAttr = [
      { title: 'th1', key: 'key1', placeholder: '-' },
      { title: 'th2', key: 'key2', placeholder: '-' },
      { title: 'th3', key: 'key3', placeholder: '-' },
      { title: 'th4', key: 'key4', placeholder: '-' },
      { 
        title: 'th5', 
        key: 'key5', 
        placeholder: '-',
        slot: { tooltip: 'tooltip12321', class: "iconfont icon-tixing", placement: 'bottom' },
      },
      { 
        title: 'th6', 
        key: 'key6', 
        placeholder: '-', 
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
    $scope.input = 123
    $scope.handleInput = function(val) {
      $scope.input = toFixedN(val);
    }
    var qs = new GetQueryStr(window.location.search)
    $scope.hasKey = qs.has('a')
    $scope.getVal = qs.get('a')
    $scope.urlObj = qs.get()
    
    var a = new CreateStrategy()
    a.add('a1', (a,b,c) => { console.log(`a1 param:${a}${b}${c}`) }).add('a2', () => { console.log('a2') })
    console.log(`has a1: ${a.has('a1')}`)
    a.add('a3').modify('a3', () => console.log('a3'))
    a.toDo('a1', 1,2,3)
    a.toDo('a2')
    var b = a.remove().get()
    console.log({b})
  })
);