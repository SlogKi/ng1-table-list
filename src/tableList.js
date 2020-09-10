'use strict';
import tableList from './tableList.html';

export function GenerateComponent(ngModel) {
  !!ngModel && 
  ngModel.component('tableList', {
    template: tableList,
    bindings: {
      showIndex: '<',
      showHover: '<',
      title: '<',
      tableAttr: '<',
      data: '<'
    },
    controller: [
      function() {
        /* 父级页面引用如下
          <table-list 
            showIndex: "true"
            showHover: "true"
            title="'累计销售明细'"
            table-attr="tableAttr"
            data="data">
          </table-list>
        */
  
        /* 父级页面配置如下：
          tableAttr = [
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
        */
      }
    ]
  })
}