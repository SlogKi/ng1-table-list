'use strict';
import angular from 'angular';
import { GenerateComponent } from '../src/tableList.js';

GenerateComponent(
  angular.module('app', [])
  .controller('myCtrl', function($scope) {
    $scope.tableAttr = [
      { title: '销售时间', key: 'time', placeholder: '-' },
      { title: '销售数量', key: 'count', placeholder: '-' },
      { title: '销售集团', key: 'group', placeholder: '-' },
      { title: '销售门店', key: 'store', placeholder: '-' },
      { title: '销售人员', key: 'saler', placeholder: '-' },
      { 
        title: '审批单号', 
        key: 'businessKey', 
        placeholder: '-', 
        handleClick: function(item) {
          console.log(item)
        } 
      }
    ]
    $scope.data = [
      {
        time: '2020-01-03',
        count: '6',
        group: '集团1',
        store: '门店1',
        saler: '销售1',
        businessKey: '200907110947004364',
      }
    ]
  })
);