(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["jsClosures"],{"0e44":function(n,o,e){"use strict";e.r(o);var r=e("7265"),s=function(){var n=this,o=n._self._c;return o("div",{staticClass:"pa-4"},[o("h1",[n._v("JS Closures")]),o("CodeHighlight",{attrs:{code:n.code}}),o(r["a"],{on:{click:n.runClosure}},[n._v(" 运行 ")]),o("p",[n._v("将函数作为返回值，就会看到闭包在这些函数中的应用")])],1)},t=[],c=e("bc12"),a={components:{CodeHighlight:c["a"]},data(){return{code:'function foo() {\n  var a = "abc";\n  function bar() {\n    console.log(a);\n  }\n  return bar;\n}\n\nvar baz = foo();\nbaz(); // abc'}},methods:{closure(){const n="abc";function o(){return n}return o()},runClosure(){const n=this.closure();console.log(n)}}},u=a,l=e("2be6"),i=Object(l["a"])(u,s,t,!1,null,"7f7e55be",null);o["default"]=i.exports}}]);
//# sourceMappingURL=jsClosures.5b818109.js.map