#### 前端一键导出excel表格功能

1. npm i sn-excel -D
2. 下载相关依赖包 
        npm i xlsx --save
        npm install script-loader -D
        npm install file-saver --save

#### 使用示例

```javascript
import {exportExcel} from 'sn-excel'; //引入

const header = [
      {k:'name',v:'姓名',w:'100'},
      {k:'age',v:'年龄',w:'120'},
      {k:'weight',v:'第3项体重',w:'230'},
      {k:'fav',v:'爱好',w:'160'},
      {k:'height',v:'身高',w:'180'}
    ]
    const data = [
      {name:'小九',age:24,weight:'65kg',fav:'plaeame',height:'177'},
      {name:'小八',age:24,weight:'45kg',fav:'plrGame',height:'178'},
      {name:'小七',age:24,weight:'65kg',fav:'plaerame',height:'179'},
      {name:'小六',age:24,weight:'53kg',fav:'plaGame',height:'176'},
      {name:'小五',age:24,weight:'65kg',fav:'plaeme',height:'175'},
    ]
    exportExcel(header,data,'123.xlsl')
}
```



#### 参数说明

```javascript
exportExcel(tHeader,data,excelNmae)
/** 
	export支持接收三个参数	
	tHeader: array 如上 至少传入 k:'data中对应的k',v:'表头显示的名称' 
					 w:'单行表格宽度'，不传默认100
	data: 导出的数据，可以不用处理数据格式，不用删除多的列，会根据表头自动处理
	excelNmae: 导出文件名称自定义
*/

```



---



