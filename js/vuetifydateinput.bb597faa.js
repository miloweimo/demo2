(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["vuetifydateinput"],{2915:function(t,e,a){t.exports=a.p+"img/cnsys.a17feb9d.png"},"345e":function(t,e,a){},"4a81":function(t,e,a){},"9d8b":function(t,e,a){"use strict";a.r(e);a("28eb"),a("0894"),a("4a81");var n=a("9869"),s=a("0011"),i=a("e479");const r=["sm","md","lg","xl"],l=(()=>r.reduce((t,e)=>(t[e]={type:[Boolean,String,Number],default:!1},t),{}))(),o=(()=>r.reduce((t,e)=>(t["offset"+Object(i["F"])(e)]={type:[String,Number],default:null},t),{}))(),c=(()=>r.reduce((t,e)=>(t["order"+Object(i["F"])(e)]={type:[String,Number],default:null},t),{}))(),d={col:Object.keys(l),offset:Object.keys(o),order:Object.keys(c)};function u(t,e,a){let n=t;if(null!=a&&!1!==a){if(e){const a=e.replace(t,"");n+="-"+a}return"col"!==t||""!==a&&!0!==a?(n+="-"+a,n.toLowerCase()):n.toLowerCase()}}const f=new Map;var p=n["default"].extend({name:"v-col",functional:!0,props:{cols:{type:[Boolean,String,Number],default:!1},...l,offset:{type:[String,Number],default:null},...o,order:{type:[String,Number],default:null},...c,alignSelf:{type:String,default:null,validator:t=>["auto","start","end","center","baseline","stretch"].includes(t)},tag:{type:String,default:"div"}},render(t,{props:e,data:a,children:n,parent:i}){let r="";for(const s in e)r+=String(e[s]);let l=f.get(r);if(!l){let t;for(t in l=[],d)d[t].forEach(a=>{const n=e[a],s=u(t,a,n);s&&l.push(s)});const a=l.some(t=>t.startsWith("col-"));l.push({col:!a||!e.cols,["col-"+e.cols]:e.cols,["offset-"+e.offset]:e.offset,["order-"+e.order]:e.order,["align-self-"+e.alignSelf]:e.alignSelf}),f.set(r,l)}return t(e.tag,Object(s["a"])(a,{class:l}),n)}}),g=a("e37c");const h=["sm","md","lg","xl"],m=["start","end","center"];function v(t,e){return h.reduce((a,n)=>(a[t+Object(i["F"])(n)]=e(),a),{})}const y=t=>[...m,"baseline","stretch"].includes(t),b=v("align",()=>({type:String,default:null,validator:y})),w=t=>[...m,"space-between","space-around"].includes(t),_=v("justify",()=>({type:String,default:null,validator:w})),j=t=>[...m,"space-between","space-around","stretch"].includes(t),S=v("alignContent",()=>({type:String,default:null,validator:j})),C={align:Object.keys(b),justify:Object.keys(_),alignContent:Object.keys(S)},x={align:"align",justify:"justify",alignContent:"align-content"};function B(t,e,a){let n=x[t];if(null!=a){if(e){const a=e.replace(t,"");n+="-"+a}return n+="-"+a,n.toLowerCase()}}const O=new Map;var k=n["default"].extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:y},...b,justify:{type:String,default:null,validator:w},..._,alignContent:{type:String,default:null,validator:j},...S},render(t,{props:e,data:a,children:n}){let i="";for(const s in e)i+=String(e[s]);let r=O.get(i);if(!r){let t;for(t in r=[],C)C[t].forEach(a=>{const n=e[a],s=B(t,a,n);s&&r.push(s)});r.push({"no-gutters":e.noGutters,"row--dense":e.dense,["align-"+e.align]:e.align,["justify-"+e.justify]:e.justify,["align-content-"+e.alignContent]:e.alignContent}),O.set(i,r)}return t(e.tag,Object(s["a"])(a,{staticClass:"row",class:r}),n)}}),$=a("66e1"),V=a("2370"),E=function(){var t=this,e=t._self._c;return e("div",{staticClass:"pa-4"},[t._m(0),e(k,[e(p,{staticClass:"d-flex align-center"},[e($["a"],{staticClass:"mt-2 mr-2",staticStyle:{"max-width":"fit-content"},attrs:{items:["zhHans","en","ja"],dense:"",small:"",outlined:"","hide-details":"",clearable:""},on:{change:function(e){return t.changeLang(t.lang)}},model:{value:t.lang,callback:function(e){t.lang=e},expression:"lang"}}),e("span",{staticClass:"mr-2"},[t._v(" "+t._s(t.$t("msg"))+" ")])],1)],1),e(g["a"],{ref:"form"},[e(k,[e(p,{staticClass:"d-flex align-center"},[e(V["a"],{staticClass:"mr-2",staticStyle:{"max-width":"fit-content"},attrs:{type:"datetime-local",step:"1",dense:"",small:"",outlined:"","hide-details":""},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}}),e("input",{directives:[{name:"model",rawName:"v-model",value:t.date,expression:"date"}],staticClass:"mr-2",staticStyle:{border:"1px solid","border-radius":"5px"},attrs:{timezone:"-12:00",type:"datetime-local"},domProps:{value:t.date},on:{input:function(e){e.target.composing||(t.date=e.target.value)}}}),e("span",{staticClass:"mr-2"},[t._v("date:"+t._s(t.date))])],1)],1)],1),t._m(1),t._m(2)],1)},N=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"d-flex align-start"},[e("h1",{staticClass:"mr-2"},[t._v(" 日期组件国际化 ")])])},function(){var t=this,e=t._self._c;return e("div",[e("p",[e("a",{attrs:{href:"https://stackoverflow.com/questions/7372038/is-there-any-way-to-change-input-type-date-format"}},[t._v("有没有办法改变输入类型=“日期”格式？ stackoverflow")])]),e("p",[t._v(' 结论：根据操作系统的语言地区设置，原生input[type="datetime-local"]显示不同的日期选项 ')]),e("p",[t._v(" 和i18n无法直接配合使用 ")]),e("p",[t._v(" 建议用第三方库实现，日期选择的国际化 ")])])},function(){var t=this,e=t._self._c;return e("div",[e("img",{attrs:{src:a("af2e"),alt:"en"}}),e("img",{attrs:{src:a("d354"),alt:"ensys"}}),e("hr"),e("img",{attrs:{src:a("c290"),alt:"cn"}}),e("img",{attrs:{src:a("2915"),alt:"cnsys"}})])}],z={data(){return{lang:"zhHans",date:""}},methods:{changeLang(t){this.lang=t,this.$i18n.locale=t}}},L=z,F=(a("d6fc"),a("2be6")),G=Object(F["a"])(L,E,N,!1,null,"7126c7be",null);e["default"]=G.exports},af2e:function(t,e,a){t.exports=a.p+"img/en.0946bb43.png"},c290:function(t,e,a){t.exports=a.p+"img/cn.0eb762f2.png"},d354:function(t,e,a){t.exports=a.p+"img/ensys.2635727e.png"},d6fc:function(t,e,a){"use strict";a("345e")},e37c:function(t,e,a){"use strict";a("0894");var n=a("5d20"),s=a("27d6"),i=a("d6c5");e["a"]=Object(n["a"])(s["a"],Object(i["b"])("form")).extend({name:"v-form",provide(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:()=>({inputs:[],watchers:[],errorBag:{}}),watch:{errorBag:{handler(t){const e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput(t){const e=t=>t.$watch("hasError",e=>{this.$set(this.errorBag,t._uid,e)},{immediate:!0}),a={_uid:t._uid,valid:()=>{},shouldValidate:()=>{}};return this.lazyValidation?a.shouldValidate=t.$watch("shouldValidate",n=>{n&&(this.errorBag.hasOwnProperty(t._uid)||(a.valid=e(t)))}):a.valid=e(t),a},validate(){return 0===this.inputs.filter(t=>!t.validate(!0)).length},reset(){this.inputs.forEach(t=>t.reset()),this.resetErrorBag()},resetErrorBag(){this.lazyValidation&&setTimeout(()=>{this.errorBag={}},0)},resetValidation(){this.inputs.forEach(t=>t.resetValidation()),this.resetErrorBag()},register(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister(t){const e=this.inputs.find(e=>e._uid===t._uid);if(!e)return;const a=this.watchers.find(t=>t._uid===e._uid);a&&(a.valid(),a.shouldValidate()),this.watchers=this.watchers.filter(t=>t._uid!==e._uid),this.inputs=this.inputs.filter(t=>t._uid!==e._uid),this.$delete(this.errorBag,e._uid)}},render(t){return t("form",{staticClass:"v-form",attrs:{novalidate:!0,...this.attrs$},on:{submit:t=>this.$emit("submit",t)}},this.$slots.default)}})}}]);
//# sourceMappingURL=vuetifydateinput.bb597faa.js.map