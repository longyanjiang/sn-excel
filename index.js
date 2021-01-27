import {export_json_to_excel} from './vendor/Export2Excel'

/**
 * 
 * @param {arr} headers 表头信息 [{k:'键名',v:'对应表头显示的名称',w:'表格宽度'}]
 * @param {arr} excelData 导出的数据
 * @param {string} excelName 自定义导出名称.xlsx
 */
export function exportExcel(headers,excelData,excelName) {
    const dataKeys = headers.map( t => t.k )
    const tHeader = headers.map( t => t.v)
    const setWidthData = headers.map( t => t.w)
    const list = formatJson(dataKeys,excelData)
    export_json_to_excel(tHeader,list,excelName,setWidthData)
}


function formatJson(filterVal, jsonData){
    return jsonData.map( v => filterVal.map( k => v[k] ))
}

