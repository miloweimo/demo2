(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["aggridcolwidth"],{"61cb":function(e,o,t){"use strict";t.r(o);var n=function(){var e=this,o=e._self._c;return o("div",[o("h1",[e._v("aggrid表格记住列宽选项")]),e._m(0),o("ag-grid-vue",{staticClass:"ag-theme-alpine",staticStyle:{height:"300px"},attrs:{"column-defs":e.columnDefs,"row-data":e.rowData,"grid-options":e.gridOptions},on:{"column-resized":e.onColumnResized}})],1)},i=[function(){var e=this,o=e._self._c;return o("div",[o("a",{attrs:{href:"https://www.ag-grid.com/vue-data-grid/"}},[e._v("Aggrid 文档")]),o("br"),o("p",[e._v("效果：刷新页面保持列宽")])])}],l=t("8a78"),s=t("401b");l["a"].setLicenseKey("CompanyName=Suzhou ruhlamat Smart Technologies Co., Ltd.,LicensedApplication=Infinity,LicenseType=SingleApplication,LicensedConcurrentDeveloperCount=1,LicensedProductionInstancesCount=30,AssetReference=AG-030422,SupportServicesEnd=30_August_2023_[v2]_MTY5MzM1MDAwMDAwMA==28423dd515d527503fc5a257dc86a8ac");var a={name:"Aggrid",components:{AgGridVue:s["AgGridVue"]},data(){return{columnDefs:null,rowData:null,gridOptions:{defaultColDef:{resizable:!0,sortable:!0,filter:!0}},gridColumnApi:null,isRestoreColumn:!0}},beforeMount(){this.columnDefs=[{field:"make"},{field:"model"},{field:"price"}],this.rowData=[{make:"Toyota",model:"Celica",price:35e3},{make:"Ford",model:"Mondeo",price:32e3},{make:"Porsche",model:"Boxster",price:72e3}]},mounted(){this.gridColumnApi=this.gridOptions.columnApi,this.hanldeRestoreColumn(),window.addEventListener("beforeunload",()=>{this.hanldeStoreColumn()})},beforeDestroy(){this.hanldeStoreColumn()},methods:{onColumnResized(){const e=this.gridColumnApi.getColumnState();console.log("列状态 columnstate:",e,"调整了列宽 onColumnResized")},hanldeRestoreColumn(){if(this.isRestoreColumn){const e=localStorage.getItem(this.localKey);console.log(e,"columnstate 读取缓存中表格列状态"),e&&"null"!==e&&"undefined"!==e&&this.gridColumnApi.applyColumnState({state:JSON.parse(e),applyOrder:!0})}},hanldeStoreColumn(){if(this.isRestoreColumn){const e=this.gridColumnApi.getColumnState();console.log(e,"columnstate 当前表格列状态"),localStorage.setItem(this.localKey,JSON.stringify(e))}}}},r=a,d=(t("a23a"),t("2be6")),u=Object(d["a"])(r,n,i,!1,null,"58d03b3b",null);o["default"]=u.exports},a23a:function(e,o,t){"use strict";t("d473")},d473:function(e,o,t){}}]);
//# sourceMappingURL=aggridcolwidth.5ff8a2ab.js.map