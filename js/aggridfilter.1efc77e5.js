(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["aggridfilter"],{"1e13":function(e,t,i){"use strict";i("5461")},5461:function(e,t,i){},affd:function(e,t,i){"use strict";i("0894"),i("c793");var a=i("404d"),n=i("dbeb"),s=i("bb03"),o=i("8159"),r=i("4498"),l=i("5d20");t["a"]=Object(l["a"])(s["a"],Object(o["a"])({onVisible:["init"]}),r["a"]).extend({name:"v-pagination",directives:{Resize:n["a"]},props:{circle:Boolean,disabled:Boolean,navigationColor:String,navigationTextColor:String,length:{type:Number,default:0,validator:e=>e%1===0},nextIcon:{type:String,default:"$next"},prevIcon:{type:String,default:"$prev"},totalVisible:[Number,String],value:{type:Number,default:0},pageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.page"},currentPageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.currentPage"},previousAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.previous"},nextAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.next"},wrapperAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.wrapper"}},data(){return{maxButtons:0,selected:null}},computed:{classes(){return{"v-pagination":!0,"v-pagination--circle":this.circle,"v-pagination--disabled":this.disabled,...this.themeClasses}},items(){const e=parseInt(this.totalVisible,10);if(0===e||isNaN(this.length)||this.length>Number.MAX_SAFE_INTEGER)return[];const t=Math.min(Math.max(0,e)||this.length,Math.max(0,this.maxButtons)||this.length,this.length);if(this.length<=t)return this.range(1,this.length);const i=t%2===0?1:0,a=Math.floor(t/2),n=this.length-a+1+i;if(this.value>a&&this.value<n){const e=1,t=this.length,n=this.value-a+2,s=this.value+a-2-i,o=n-1===e+1?2:"...",r=s+1===t-1?s+1:"...";return[1,o,...this.range(n,s),r,this.length]}if(this.value===a){const e=this.value+a-1-i;return[...this.range(1,e),"...",this.length]}if(this.value===n){const e=this.value-a+1;return[1,"...",...this.range(e,this.length)]}return[...this.range(1,a),"...",...this.range(n,this.length)]}},watch:{value(){this.init()}},beforeMount(){this.init()},methods:{init(){this.selected=null,this.onResize(),this.$nextTick(this.onResize),setTimeout(()=>this.selected=this.value,100)},onResize(){const e=this.$el&&this.$el.parentElement?this.$el.parentElement.clientWidth:window.innerWidth;this.maxButtons=Math.floor((e-96)/42)},next(e){e.preventDefault(),this.$emit("input",this.value+1),this.$emit("next")},previous(e){e.preventDefault(),this.$emit("input",this.value-1),this.$emit("previous")},range(e,t){const i=[];e=e>0?e:1;for(let a=e;a<=t;a++)i.push(a);return i},genIcon(e,t,i,n,s){return e("li",[e("button",this.setBackgroundColor(this.navigationColor,{staticClass:"v-pagination__navigation",class:{"v-pagination__navigation--disabled":i},attrs:{disabled:i,type:"button","aria-label":s},on:i?{}:{click:n}}),[e(a["a"],{props:{color:this.navigationTextColor}},[t])])])},genItem(e,t){const i=t===this.value&&(this.color||"primary"),a=t===this.value,n=a?this.currentPageAriaLabel:this.pageAriaLabel;return e("button",this.setBackgroundColor(i,{staticClass:"v-pagination__item",class:{"v-pagination__item--active":t===this.value},attrs:{type:"button","aria-current":a,"aria-label":this.$vuetify.lang.t(n,t)},on:{click:()=>this.$emit("input",t)}}),[t.toString()])},genItems(e){return this.items.map((t,i)=>e("li",{key:i},[isNaN(Number(t))?e("span",{class:"v-pagination__more"},[t.toString()]):this.genItem(e,t)]))},genList(e,t){return e("ul",{directives:[{modifiers:{quiet:!0},name:"resize",value:this.onResize}],class:this.classes},t)}},render(e){const t=[this.genIcon(e,this.$vuetify.rtl?this.nextIcon:this.prevIcon,this.value<=1,this.previous,this.$vuetify.lang.t(this.previousAriaLabel)),this.genItems(e),this.genIcon(e,this.$vuetify.rtl?this.prevIcon:this.nextIcon,this.value>=this.length,this.next,this.$vuetify.lang.t(this.nextAriaLabel))];return e("nav",{attrs:{role:"navigation","aria-label":this.$vuetify.lang.t(this.wrapperAriaLabel)}},[this.genList(e,t)])}})},c793:function(e,t,i){},eead:function(e,t,i){"use strict";i.r(t);var a=i("affd"),n=i("66e1"),s=i("7b27"),o=i("2370"),r=function(){var e=this,t=e._self._c;return t("div",{staticClass:"pa-4"},[t("h1",[e._v(" aggrid筛选 ")]),t("ag-grid-vue",{staticClass:"ag-theme-alpine",staticStyle:{height:"350px"},attrs:{"grid-options":e.gridOptions,"column-defs":e.columnDefs,"row-data":e.rowData,pagination:!0,"pagination-auto-page-size":!1,"pagination-page-size":e.paginationPageSize},on:{"first-data-rendered":e.onFirstDataRendered,filterChanged:e.onFilterChanged}}),t("div",[t("p",[e._v("手写的一个分页:")]),t("div",{staticClass:"d-flex align-center",style:"height: 32px;"},[t("div",{staticClass:"mr-2"},[e._v(" 每页行数: ")]),t("div",[t(n["a"],{staticClass:"ag-select align-self-center",staticStyle:{"max-width":"min-content"},attrs:{outlined:"",dense:"",items:e.paginationPageSizeOptions,small:"","hide-details":""},on:{change:e.onPageSizeChanged},model:{value:e.paginationPageSize,callback:function(t){e.paginationPageSize=t},expression:"paginationPageSize"}})],1),t(s["a"]),t("div",{staticClass:"mt-2 d-flex"},[t(a["a"],{attrs:{length:e.totalPages,"total-visible":7,color:"primary"},on:{input:e.onPaginationInput},model:{value:e.curPage,callback:function(t){e.curPage=t},expression:"curPage"}}),t("div",{staticClass:"agText ag-rightWidth ml-6 d-flex align-center"},[t("span",{staticClass:"mr-1"},[e._v("第")]),t(o["a"],{staticStyle:{"min-width":"fit-content"},attrs:{outlined:"",dense:"","hide-details":""},model:{value:e.curPageText,callback:function(t){e.curPageText=t},expression:"curPageText"}}),t("span",{staticClass:"ml-1"},[e._v("页")])],1)],1)],1)])],1)},l=[],g=i("8a78"),h=i("401b");g["a"].setLicenseKey("CompanyName=Suzhou ruhlamat Smart Technologies Co., Ltd.,LicensedApplication=Infinity,LicenseType=SingleApplication,LicensedConcurrentDeveloperCount=1,LicensedProductionInstancesCount=30,AssetReference=AG-030422,SupportServicesEnd=30_August_2023_[v2]_MTY5MzM1MDAwMDAwMA==28423dd515d527503fc5a257dc86a8ac");var c={name:"Aggrid",components:{AgGridVue:h["AgGridVue"]},data(){return{columnDefs:null,rowData:null,gridOptions:{defaultColDef:{sortable:!0,filter:!0,resizable:!0,floatingFilter:!0,minWidth:200,flex:1}},paginationPageSize:2,paginationPageSizeOptions:[{text:"2",value:2},{text:"4",value:4},{text:"10",value:10},{text:"100",value:100},{text:"All",value:0}],totalRecords:0,curPage:1,totalPages:0}},computed:{curPageText:{get(){return this.curPage},set(e){Number(e)?Number(e)>this.totalPages?(this.gridApi.paginationGoToPage(this.totalPages-1),this.curPage=this.totalPages):(this.gridApi.paginationGoToPage(Number(e)-1),this.curPage=Number(e)):(this.gridApi.paginationGoToPage(0),this.curPage=1)}}},beforeMount(){this.columnDefs=[{field:"make",filter:"agTextColumnFilter"},{field:"model"},{field:"price",filter:"agNumberColumnFilter"}],this.rowData=[{make:"1Toyota",model:"Celica",price:35e3},{make:"2Ford",model:"Mondeo",price:32e3},{make:"3Porsche",model:"Boxster",price:72e3},{make:"4Toyota",model:"Celica",price:35e3},{make:"5Ford",model:"Mondeo",price:32e3},{make:"6Porsche",model:"Boxster",price:72e3},{make:"7Toyota",model:"Celica",price:35e3},{make:"8Ford",model:"Mondeo",price:32e3},{make:"9Porsche",model:"Boxster",price:72e3},{make:"10Toyota",model:"Celica",price:35e3},{make:"11Ford",model:"Mondeo",price:32e3},{make:"12Porsche",model:"Boxster",price:72e3},{make:"13Toyota",model:"Celica",price:35e3},{make:"14Ford",model:"Mondeo",price:32e3},{make:"15Porsche",model:"Boxster",price:72e3},{make:"16Toyota",model:"Celica",price:35e3},{make:"17Ford",model:"Mondeo",price:32e3},{make:"18Porsche",model:"Boxster",price:72e3}],this.initPagination(this.rowData)},methods:{onFirstDataRendered(e){this.gridApi=e.api,this.gridColumnApi=e.columnApi},onFilterChanged(){const e=this.gridApi.getModel().rowsToDisplay;this.initPagination(e),this.totalPages<this.curPage&&(console.log(this.curPage,this.totalPages,"go to last"),this.curPage=this.totalPages,this.onPaginationInput(this.curPage))},onPageSizeChanged(){const e=this.gridApi.getModel().rowsToDisplay;this.initPagination(e),this.totalPages<this.curPage&&(console.log(this.curPage,this.totalPages,"go to last"),this.curPage=this.totalPages,this.onPaginationInput(this.curPage))},initPagination(e){this.totalRecords=e.length||0,e.length&&this.paginationPageSize?this.totalPages=Math.ceil(e.length/this.paginationPageSize):this.totalPages=0},onPaginationInput(e){this.gridApi.paginationGoToPage(e-1)}}},u=c,d=(i("1e13"),i("2be6")),p=Object(d["a"])(u,r,l,!1,null,"7b0d3c98",null);t["default"]=p.exports}}]);
//# sourceMappingURL=aggridfilter.1efc77e5.js.map